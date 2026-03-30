#!/usr/bin/env python3
"""
Tiny REST API for persisting IIIF manifests created in the workshop.
Stores JSON files in MANIFESTS_DIR and serves them back.

Endpoints:
  GET    /api/manifests/          → list all saved manifests
  GET    /api/manifests/<id>.json → retrieve one manifest
  PUT    /api/manifests/<id>.json → create or update a manifest
  DELETE /api/manifests/<id>.json → delete a manifest
"""

import json
import os
import re
import sys
from http.server import HTTPServer, BaseHTTPRequestHandler

MANIFESTS_DIR = os.environ.get("MANIFESTS_DIR", "/var/www/taller/manifests")
LISTEN_PORT = int(os.environ.get("API_PORT", "8080"))

# Only allow safe filenames: alphanumeric, hyphens, underscores, dots
SAFE_NAME = re.compile(r"^[a-zA-Z0-9_\-]+\.json$")
MAX_BODY = 2 * 1024 * 1024  # 2 MB limit per manifest


class ManifestHandler(BaseHTTPRequestHandler):
    """Handles CRUD operations for manifest JSON files."""

    def _set_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json_response(self, code, data):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self._set_cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _error(self, code, msg):
        self._json_response(code, {"error": msg})

    def _parse_filename(self):
        """Extract and validate filename from the path."""
        # Path should be /api/manifests/<name>.json
        path = self.path.rstrip("/")
        prefix = "/api/manifests/"
        if not path.startswith(prefix):
            return None
        name = path[len(prefix):]
        if not name or not SAFE_NAME.match(name):
            return None
        return name

    # ── OPTIONS (CORS preflight) ──
    def do_OPTIONS(self):
        self.send_response(204)
        self._set_cors()
        self.end_headers()

    # ── GET ──
    def do_GET(self):
        path = self.path.rstrip("/")

        # List all manifests
        if path == "/api/manifests":
            try:
                files = sorted(
                    f for f in os.listdir(MANIFESTS_DIR)
                    if f.endswith(".json") and os.path.isfile(os.path.join(MANIFESTS_DIR, f))
                )
                self._json_response(200, {"manifests": files})
            except OSError as e:
                self._error(500, str(e))
            return

        # Get single manifest
        name = self._parse_filename()
        if not name:
            self._error(400, "Invalid manifest name")
            return

        filepath = os.path.join(MANIFESTS_DIR, name)
        if not os.path.isfile(filepath):
            self._error(404, "Manifest not found")
            return

        try:
            with open(filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
            self._json_response(200, data)
        except (json.JSONDecodeError, OSError) as e:
            self._error(500, str(e))

    # ── PUT ──
    def do_PUT(self):
        name = self._parse_filename()
        if not name:
            self._error(400, "Invalid manifest name. Use alphanumeric, hyphens, underscores.")
            return

        length = int(self.headers.get("Content-Length", 0))
        if length > MAX_BODY:
            self._error(413, "Manifest too large (max 2 MB)")
            return

        raw = self.rfile.read(length)
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            self._error(400, "Invalid JSON")
            return

        filepath = os.path.join(MANIFESTS_DIR, name)
        try:
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            self._json_response(200, {"saved": name})
        except OSError as e:
            self._error(500, str(e))

    # ── DELETE ──
    def do_DELETE(self):
        name = self._parse_filename()
        if not name:
            self._error(400, "Invalid manifest name")
            return

        filepath = os.path.join(MANIFESTS_DIR, name)
        if not os.path.isfile(filepath):
            self._error(404, "Manifest not found")
            return

        try:
            os.remove(filepath)
            self._json_response(200, {"deleted": name})
        except OSError as e:
            self._error(500, str(e))

    def log_message(self, fmt, *args):
        sys.stderr.write("[api] %s\n" % (fmt % args))


if __name__ == "__main__":
    os.makedirs(MANIFESTS_DIR, exist_ok=True)
    server = HTTPServer(("127.0.0.1", LISTEN_PORT), ManifestHandler)
    print(f"Manifest API listening on 127.0.0.1:{LISTEN_PORT}", flush=True)
    server.serve_forever()
