/**
 * i18n — Bilingual system (ES/EN) for IIIF Workshop
 */

const I18N = {
    currentLang: localStorage.getItem('taller-iiif-lang') || 'es',

    translations: {
        // ── Nav ──
        'nav.logo': { es: 'Taller IIIF', en: 'IIIF Workshop' },
        'nav.intro': { es: 'Intro', en: 'Intro' },
        'nav.url': { es: 'URL', en: 'URL' },
        'nav.builder': { es: 'Constructor', en: 'Builder' },
        'nav.regions': { es: 'Regiones', en: 'Regions' },
        'nav.sizes': { es: 'Tamaños', en: 'Sizes' },
        'nav.rotation': { es: 'Rotación', en: 'Rotation' },
        'nav.quality': { es: 'Calidad', en: 'Quality' },
        'nav.info': { es: 'info.json', en: 'info.json' },
        'nav.zoom': { es: 'Zoom', en: 'Zoom' },
        'nav.viewer': { es: 'Visor', en: 'Viewer' },
        'nav.compare': { es: 'Comparar', en: 'Compare' },
        'nav.presentation': { es: 'Presentación', en: 'Presentation' },
        'nav.manifests': { es: 'Manifiestos', en: 'Manifests' },
        'nav.editor': { es: 'Editor', en: 'Editor' },
        'nav.mirador': { es: 'Mirador', en: 'Mirador' },
        'nav.annotations': { es: 'Anotaciones', en: 'Annotations' },
        'nav.interop': { es: 'Interoperabilidad', en: 'Interoperability' },
        'nav.gallery': { es: 'Galería', en: 'Gallery' },
        'nav.search': { es: 'Búsqueda', en: 'Search' },
        'nav.ohc': { es: 'OHC', en: 'OHC' },
        'nav.dutch': { es: 'Ciencia NL', en: 'Dutch Science' },

        // ── Hero ──
        'hero.title': { es: 'Taller IIIF Interactivo', en: 'Interactive IIIF Workshop' },
        'hero.desc': {
            es: 'Explora las posibilidades del estándar IIIF (International Image Interoperability Framework) usando Cantaloupe como servidor de imágenes y OpenSeadragon como visor.',
            en: 'Explore the possibilities of the IIIF standard (International Image Interoperability Framework) using Cantaloupe as image server and OpenSeadragon as viewer.'
        },

        // ── Section 1: What is IIIF ──
        'sec1.title': { es: '¿Qué es IIIF?', en: 'What is IIIF?' },
        'sec1.desc': { es: 'IIIF es un conjunto de estándares abiertos para servir, compartir y anotar imágenes de alta resolución a través de la web.', en: 'IIIF is a set of open standards for serving, sharing, and annotating high-resolution images on the web.' },
        'sec1.image.desc': { es: 'Permite solicitar partes específicas de una imagen con parámetros en la URL: región, tamaño, rotación, calidad y formato.', en: 'Allows requesting specific parts of an image via URL parameters: region, size, rotation, quality, and format.' },
        'sec1.pres.desc': { es: 'Define cómo organizar imágenes en secuencias (manifiestos), como las páginas de un libro o las piezas de una colección.', en: 'Defines how to organize images into sequences (manifests), like pages of a book or items in a collection.' },
        'sec1.search.desc': { es: 'Permite buscar texto dentro de los recursos IIIF, como texto OCR en páginas de documentos digitalizados.', en: 'Allows searching text within IIIF resources, such as OCR text on pages of digitized documents.' },
        'sec1.infra.title': { es: 'Nuestra infraestructura', en: 'Our infrastructure' },
        'sec1.cantaloupe': { es: 'Servidor IIIF de imágenes escrito en Java. Soporta IIIF Image API 2.1 y 3.0, múltiples formatos, cache, y procesamiento dinámico.', en: 'IIIF image server written in Java. Supports IIIF Image API 2.1 and 3.0, multiple formats, caching, and dynamic processing.' },
        'sec1.osd': { es: 'Visor JavaScript de alta resolución. Permite zoom profundo, navegación fluida, y consume directamente endpoints IIIF.', en: 'High-resolution JavaScript viewer. Supports deep zoom, smooth navigation, and directly consumes IIIF endpoints.' },

        // ── Section 2: URL Anatomy ──
        'sec2.title': { es: 'Anatomía de una URL IIIF', en: 'Anatomy of a IIIF URL' },
        'sec2.desc': { es: 'Cada parte de la URL controla un aspecto de la imagen que se devuelve. Pasa el cursor sobre cada parte.', en: 'Each part of the URL controls an aspect of the returned image. Hover over each part.' },
        'sec2.legend.base': { es: 'Base del servidor', en: 'Server base' },
        'sec2.legend.id': { es: 'Identificador', en: 'Identifier' },
        'sec2.legend.region': { es: 'Región', en: 'Region' },
        'sec2.legend.size': { es: 'Tamaño', en: 'Size' },
        'sec2.legend.rotation': { es: 'Rotación', en: 'Rotation' },
        'sec2.legend.quality': { es: 'Calidad', en: 'Quality' },
        'sec2.legend.format': { es: 'Formato', en: 'Format' },
        'sec2.region.title': { es: 'Valores de Región', en: 'Region Values' },
        'sec2.region.values': {
            es: 'full            → Imagen completa\nsquare          → Recorte cuadrado centrado\nx,y,w,h         → Píxeles (ej: 100,100,500,300)\npct:x,y,w,h     → Porcentaje (ej: pct:25,25,50,50)',
            en: 'full            → Full image\nsquare          → Centered square crop\nx,y,w,h         → Pixels (e.g.: 100,100,500,300)\npct:x,y,w,h     → Percentage (e.g.: pct:25,25,50,50)'
        },
        'sec2.size.title': { es: 'Valores de Tamaño', en: 'Size Values' },
        'sec2.size.values': {
            es: 'max             → Tamaño máximo disponible\nw,              → Ancho fijo, alto proporcional\n,h              → Alto fijo, ancho proporcional\nw,h             → Tamaño exacto (puede distorsionar)\n!w,h            → Encajar en caja (mantiene proporción)\npct:n           → Porcentaje del original',
            en: 'max             → Maximum available size\nw,              → Fixed width, proportional height\n,h              → Fixed height, proportional width\nw,h             → Exact size (may distort)\n!w,h            → Fit in box (keeps ratio)\npct:n           → Percentage of original'
        },

        // ── Section 3: Builder ──
        'sec3.title': { es: 'Constructor interactivo', en: 'Interactive builder' },
        'sec3.desc': { es: 'Ajusta los parámetros y observa el resultado en tiempo real. Haz click en la URL para copiarla.', en: 'Adjust the parameters and see the result in real time. Click the URL to copy it.' },
        'sec3.image': { es: 'Imagen', en: 'Image' },
        'sec3.region': { es: 'Región', en: 'Region' },
        'sec3.size': { es: 'Tamaño', en: 'Size' },
        'sec3.rotation': { es: 'Rotación (0-360)', en: 'Rotation (0-360)' },
        'sec3.mirror': { es: 'Espejo', en: 'Mirror' },
        'sec3.mirror.label': { es: 'Reflejar horizontalmente', en: 'Flip horizontally' },
        'sec3.quality': { es: 'Calidad', en: 'Quality' },
        'sec3.format': { es: 'Formato', en: 'Format' },

        // ── Section 4: Regions ──
        'sec4.title': { es: 'Regiones', en: 'Regions' },
        'sec4.desc': { es: 'Selecciona qué parte de la imagen quieres obtener. Click en cualquiera para copiar su URL.', en: 'Select which part of the image you want. Click any to copy its URL.' },

        // ── Section 5: Sizes ──
        'sec5.title': { es: 'Tamaños', en: 'Sizes' },
        'sec5.desc': { es: 'Controla las dimensiones de la imagen de salida. IIIF permite especificar ancho, alto, porcentaje o encajar en una caja.', en: 'Control the output image dimensions. IIIF allows specifying width, height, percentage, or fit in a box.' },

        // ── Section 6: Rotation ──
        'sec6.title': { es: 'Rotación y espejo', en: 'Rotation and mirror' },
        'sec6.desc': { es: 'Rota la imagen en cualquier ángulo (0-360°). Usa el prefijo ! para aplicar espejo horizontal antes de rotar.', en: 'Rotate the image at any angle (0-360°). Use the ! prefix to apply horizontal mirror before rotating.' },

        // ── Section 7: Quality ──
        'sec7.title': { es: 'Calidad y formato', en: 'Quality and format' },
        'sec7.desc': { es: 'Transforma la imagen a diferentes calidades (color, grises, bitonal) y formatos (JPG, PNG, WebP).', en: 'Transform the image to different qualities (color, grayscale, bitonal) and formats (JPG, PNG, WebP).' },

        // ── Section 8: info.json ──
        'sec8.title': { es: 'info.json', en: 'info.json' },
        'sec8.desc': { es: 'Cada imagen IIIF expone un endpoint info.json con sus metadatos: dimensiones, formatos soportados, niveles de tile, etc. Es lo que usa OpenSeadragon para saber cómo pedir los tiles.', en: 'Every IIIF image exposes an info.json endpoint with its metadata: dimensions, supported formats, tile levels, etc. This is what OpenSeadragon uses to know how to request tiles.' },
        'sec8.what.title': { es: '¿Qué contiene info.json?', en: 'What does info.json contain?' },
        'sec8.fields': {
            es: '<li><strong>width / height</strong> — Dimensiones reales</li><li><strong>tiles</strong> — Configuración de tiling para zoom</li><li><strong>sizes</strong> — Tamaños prefabricados disponibles</li><li><strong>profile</strong> — Capacidades del servidor</li><li><strong>extraFormats</strong> — Formatos adicionales soportados</li><li><strong>extraQualities</strong> — Calidades disponibles</li>',
            en: '<li><strong>width / height</strong> — Actual dimensions</li><li><strong>tiles</strong> — Tiling configuration for zoom</li><li><strong>sizes</strong> — Available pre-made sizes</li><li><strong>profile</strong> — Server capabilities</li><li><strong>extraFormats</strong> — Additional supported formats</li><li><strong>extraQualities</strong> — Available qualities</li>'
        },

        // ── Section 9: Zoom ──
        'sec9.title': { es: 'Zoom progresivo', en: 'Progressive zoom' },
        'sec9.desc': { es: 'IIIF permite hacer zoom progresivo pidiendo regiones cada vez más pequeñas a resolución completa. Así funciona el "deep zoom" que permite explorar imágenes gigantes.', en: 'IIIF enables progressive zoom by requesting ever smaller regions at full resolution. This is how "deep zoom" works to explore gigantic images.' },
        'sec9.tiling.title': { es: '¿Cómo funciona el tiling?', en: 'How does tiling work?' },
        'sec9.tiling.desc': { es: 'Cuando una imagen es muy grande, el servidor la divide en <strong>tiles</strong> (baldosas) de ~256×256 o 512×512 píxeles. El visor (OpenSeadragon) solo pide los tiles que necesita para el nivel de zoom y la zona visible, haciendo que imágenes de cientos de megapíxeles sean navegables en el navegador.', en: 'When an image is very large, the server divides it into <strong>tiles</strong> of ~256×256 or 512×512 pixels. The viewer (OpenSeadragon) only requests the tiles needed for the current zoom level and visible area, making hundred-megapixel images browsable.' },

        // ── Section 10: Viewer ──
        'sec10.title': { es: 'Visor OpenSeadragon', en: 'OpenSeadragon Viewer' },
        'sec10.desc': { es: 'Zoom profundo con rueda del ratón, arrastrar para mover, botones de rotación. OpenSeadragon pide automáticamente solo los tiles necesarios al servidor Cantaloupe.', en: 'Deep zoom with mouse wheel, drag to pan, rotation buttons. OpenSeadragon automatically requests only the needed tiles from Cantaloupe.' },
        'sec10.hint': { es: 'Rueda = zoom · Arrastrar = mover · Botones = rotar', en: 'Wheel = zoom · Drag = pan · Buttons = rotate' },
        'sec10.code.title': { es: 'Código mínimo', en: 'Minimal code' },

        // ── Section 11: Compare ──
        'sec11.title': { es: 'Comparar imágenes', en: 'Compare images' },
        'sec11.desc': { es: 'Visualiza dos imágenes simultáneamente con zoom independiente. Útil para comparar diferentes versiones, restauraciones o detalles.', en: 'View two images simultaneously with independent zoom. Useful for comparing different versions, restorations, or details.' },
        'sec11.left': { es: 'Imagen izquierda', en: 'Left image' },
        'sec11.right': { es: 'Imagen derecha', en: 'Right image' },

        // ── Section 12: Presentation API ──
        'sec12.title': { es: 'Presentation API', en: 'Presentation API' },
        'sec12.desc': { es: 'La Image API sirve imágenes individuales. La Presentation API organiza esas imágenes en estructuras con significado: libros, manuscritos, exposiciones, colecciones.', en: 'The Image API serves individual images. The Presentation API organizes them into meaningful structures: books, manuscripts, exhibitions, collections.' },
        'sec12.concepts': { es: 'Conceptos clave', en: 'Key concepts' },
        'sec12.manifest.def': { es: 'Describe un objeto digital completo (un libro, una obra). Contiene metadatos y una secuencia de Canvas.', en: 'Describes a complete digital object (a book, an artwork). Contains metadata and a sequence of Canvases.' },
        'sec12.canvas.def': { es: 'Una superficie abstracta (como una página) donde se "pintan" contenidos mediante anotaciones.', en: 'An abstract surface (like a page) where content is "painted" via annotations.' },
        'sec12.annotation.def': { es: 'Asocia contenido (imagen, texto, audio) a un Canvas o zona de un Canvas.', en: 'Associates content (image, text, audio) to a Canvas or a region of a Canvas.' },
        'sec12.collection.def': { es: 'Agrupa múltiples Manifests jerárquicamente.', en: 'Groups multiple Manifests hierarchically.' },
        'sec12.range.def': { es: 'Define una estructura lógica (capítulos, secciones) dentro de un Manifest.', en: 'Defines a logical structure (chapters, sections) within a Manifest.' },
        'sec12.anatomy': { es: 'Anatomía de un Manifest', en: 'Anatomy of a Manifest' },
        'sec12.combine': { es: 'Image API + Presentation API', en: 'Image API + Presentation API' },
        'sec12.imageapi.desc': { es: 'Sirve píxeles: regiones, zoom, formatos', en: 'Serves pixels: regions, zoom, formats' },
        'sec12.combine.desc': { es: 'El manifest referencia servicios de imagen IIIF', en: 'The manifest references IIIF image services' },
        'sec12.presapi.desc': { es: 'Organiza, describe y estructura los contenidos', en: 'Organizes, describes, and structures content' },

        // ── Section 13: Manifest Explorer ──
        'sec13.title': { es: 'Explorador de manifiestos', en: 'Manifest explorer' },
        'sec13.desc': { es: 'Explora los manifiestos de ejemplo. Selecciona uno para ver su estructura JSON y la visualización de sus canvas.', en: 'Explore the sample manifests. Select one to see its JSON structure and canvas visualization.' },

        // ── Section 14: CRUD Editor ──
        'sec14.title': { es: 'Editor de Manifiestos IIIF', en: 'IIIF Manifest Editor' },
        'sec14.desc': { es: 'Crea, edita y exporta manifiestos IIIF 3.0 usando el <strong>Digirati Manifest Editor</strong> (open source, integrado en este contenedor) o el editor visual rápido con plantillas precocinadas.', en: 'Create, edit, and export IIIF 3.0 manifests using the <strong>Digirati Manifest Editor</strong> (open source, built into this container) or the quick visual editor with pre-made templates.' },

        // ── Section 15: Mirador ──
        'sec15.title': { es: 'Visor Mirador', en: 'Mirador Viewer' },
        'sec15.desc': { es: 'Mirador es el visor IIIF más completo. Lee manifiestos y permite navegar páginas, ver metadatos, comparar imágenes lado a lado, y gestionar anotaciones.', en: 'Mirador is the most complete IIIF viewer. It reads manifests and allows page navigation, metadata viewing, side-by-side image comparison, and annotation management.' },
        'sec15.load': { es: 'Cargar manifiesto:', en: 'Load manifest:' },
        'sec15.load.btn': { es: 'Cargar en Mirador', en: 'Load in Mirador' },
        'sec15.custom.placeholder': { es: 'O pega una URL de manifiesto externo...', en: 'Or paste an external manifest URL...' },
        'sec15.custom.btn': { es: 'Cargar externo', en: 'Load external' },
        'sec15.features': { es: 'Funciones de Mirador', en: 'Mirador features' },

        // ── Section 16: Annotations ──
        'sec16.title': { es: 'Anotaciones IIIF', en: 'IIIF Annotations' },
        'sec16.desc': { es: 'Las anotaciones IIIF siguen el estándar W3C Web Annotation y permiten asociar contenido (texto, tags, enlaces) a zonas específicas de un canvas.', en: 'IIIF annotations follow the W3C Web Annotation standard and allow associating content (text, tags, links) to specific zones of a canvas.' },

        // ── Section 17: Interoperability ──
        'sec17.title': { es: 'Interoperabilidad en acción', en: 'Interoperability in action' },
        'sec17.desc': { es: 'La verdadera potencia de IIIF es que cualquier visor puede abrir manifiestos de cualquier institución del mundo. Aquí puedes explorar colecciones reales de museos, bibliotecas y archivos internacionales, todo desde el mismo visor.', en: 'The true power of IIIF is that any viewer can open manifests from any institution worldwide. Here you can explore real collections from museums, libraries, and international archives, all from the same viewer.' },
        'sec17.why.title': { es: '¿Por qué importa la interoperabilidad?', en: 'Why does interoperability matter?' },
        'sec17.standard': { es: 'Un estándar, muchas instituciones', en: 'One standard, many institutions' },
        'sec17.standard.desc': { es: 'El Museo del Prado, la British Library y la Biblioteca Nacional de Francia usan el mismo formato.', en: 'The Prado Museum, the British Library, and the National Library of France all use the same format.' },
        'sec17.mix': { es: 'Mezcla y compara', en: 'Mix and compare' },
        'sec17.mix.desc': { es: 'Abre un manuscrito de Oxford junto a uno de Harvard en la misma ventana. Compara versiones de diferentes archivos.', en: 'Open a manuscript from Oxford alongside one from Harvard in the same window. Compare versions from different archives.' },
        'sec17.nosilos': { es: 'Sin silos', en: 'No silos' },
        'sec17.nosilos.desc': { es: 'No estás atado a un visor propietario. Cualquier visor compatible IIIF puede mostrar cualquier manifiesto.', en: 'You\'re not locked into a proprietary viewer. Any IIIF-compatible viewer can display any manifest.' },
        'sec17.collections': { es: 'Colecciones internacionales', en: 'International collections' },
        'sec17.collections.desc': { es: 'Selecciona una obra y cárgala en Mirador. Estas son URLs reales de instituciones que publican sus colecciones con IIIF.', en: 'Select a work and load it in Mirador. These are real URLs from institutions publishing their collections via IIIF.' },
        'sec17.load.btn': { es: 'Cargar seleccionado en Mirador', en: 'Load selected in Mirador' },
        'sec17.load.multi': { es: 'Abrir varios lado a lado', en: 'Open multiple side by side' },
        'sec17.find.title': { es: '¿Dónde encontrar manifiestos IIIF?', en: 'Where to find IIIF manifests?' },
        'sec17.experiment': { es: 'Experimenta: pega tu propio manifiesto', en: 'Experiment: paste your own manifest' },
        'sec17.experiment.desc': { es: 'Busca un manifiesto IIIF en cualquier repositorio y pégalo aquí para verlo al instante.', en: 'Find a IIIF manifest in any repository and paste it here to view it instantly.' },
        'sec17.custom.btn': { es: 'Cargar', en: 'Load' },

        // ── Section 18: Gallery ──
        'sec18.title': { es: 'Galería de imágenes', en: 'Image gallery' },
        'sec18.desc': { es: 'Todas las imágenes disponibles en el servidor. Click en una para ver su info.json.', en: 'All images available on the server. Click one to see its info.json.' },

        // ── Section 19: Content Search ──
        'sec19.title': { es: 'IIIF Content Search API', en: 'IIIF Content Search API' },
        'sec19.desc': { es: 'La <strong>Content Search API</strong> permite buscar texto dentro de documentos IIIF que tienen OCR (reconocimiento óptico de caracteres). Los resultados devuelven las coordenadas exactas donde aparece cada término en cada página.', en: 'The <strong>Content Search API</strong> allows searching text within IIIF documents that have OCR (Optical Character Recognition). Results return the exact coordinates where each term appears on each page.' },
        'sec19.how.title': { es: '¿Cómo funciona?', en: 'How does it work?' },
        'sec19.search.btn': { es: 'Buscar', en: 'Search' },
        'sec19.search.placeholder': { es: 'Buscar texto (ej: plant, flower, leaf...)', en: 'Search text (e.g.: plant, flower, leaf...)' },
        'sec19.total': { es: 'Resultados totales', en: 'Total results' },
        'sec19.hits': { es: 'Hits devueltos', en: 'Hits returned' },
        'sec19.pages': { es: 'Páginas con resultados', en: 'Pages with results' },

        // ── Section 20: OHC ──
        'sec20.title': { es: 'Caso práctico: Oficina del Historiador de La Habana', en: 'Case study: Office of the Historian of Havana' },
        'sec20.desc': {
            es: 'Aplica todo lo aprendido en el taller con imágenes reales del Repositorio Digital de la Oficina del Historiador de la Ciudad de La Habana. Este repositorio usa <strong>Cantaloupe + Omeka S</strong> para servir colecciones patrimoniales cubanas vía IIIF.',
            en: 'Apply everything learned in this workshop with real images from the Digital Repository of the Office of the Historian of the City of Havana. This repository uses <strong>Cantaloupe + Omeka S</strong> to serve Cuban heritage collections via IIIF.'
        },
        'sec20.heritage': { es: 'Patrimonio de La Habana', en: 'Havana Heritage' },
        'sec20.heritage.desc': { es: 'Naipes, joyas, relojes, postales, fotografías y revistas históricas digitalizadas.', en: 'Playing cards, jewelry, clocks, postcards, photographs, and digitized historical magazines.' },
        'sec20.gallery.title': { es: 'Galería de colecciones OHC', en: 'OHC Collections Gallery' },
        'sec20.builder.title': { es: 'Constructor de URLs IIIF — OHC', en: 'IIIF URL Builder — OHC' },
        'sec20.viewer.title': { es: 'Visor Deep Zoom — OHC', en: 'Deep Zoom Viewer — OHC' },
        'sec20.compare.title': { es: 'Comparar imágenes OHC lado a lado', en: 'Compare OHC images side by side' },
        'sec20.info.title': { es: 'info.json remoto — OHC', en: 'Remote info.json — OHC' },
        'sec20.meta.title': { es: 'Metadatos del repositorio (Omeka S API)', en: 'Repository metadata (Omeka S API)' },
        'sec20.replicate': { es: 'Cómo replicar este repositorio', en: 'How to replicate this repository' },
        'sec20.endpoints': { es: 'Endpoints del repositorio OHC', en: 'OHC Repository endpoints' },

        // ── Section 21: Dutch Science ──
        'sec21.title': { es: 'Ciencia holandesa e IIIF', en: 'Dutch Science & IIIF' },
        'sec21.desc': {
            es: 'Explora recursos IIIF de instituciones holandesas con especial énfasis en colecciones de ciencia e ingeniería. Los Países Bajos son líderes en patrimonio digital abierto.',
            en: 'Explore IIIF resources from Dutch institutions with special emphasis on science and engineering collections. The Netherlands is a leader in open digital heritage.'
        },
        'sec21.delft.title': { es: 'TU Delft — Patrimonio Científico', en: 'TU Delft — Scientific Heritage' },
        'sec21.delft.desc': {
            es: 'La Universidad Tecnológica de Delft publica sus colecciones patrimoniales como manifiestos IIIF 3.0 a través de su portal <strong>heritage.tudelft.nl</strong>. Incluye exposiciones sobre mujeres en la ciencia, conocimiento de irrigación, historia del campus y más.',
            en: 'Delft University of Technology publishes its heritage collections as IIIF 3.0 manifests through its <strong>heritage.tudelft.nl</strong> portal. Includes exhibitions on women in science, irrigation knowledge, campus history, and more.'
        },
        'sec21.delft.wis': { es: 'Mujeres en la Ciencia — 26 piezas que narran la contribución de las mujeres en la ciencia y tecnología en TU Delft.', en: 'Women in Science — 26 pieces narrating women\'s contributions to science and technology at TU Delft.' },
        'sec21.delft.irrigation': { es: 'Conocimiento de irrigación — Planos e ilustraciones de ingeniería hidráulica holandesa, una tradición centenaria.', en: 'Irrigation Knowledge — Blueprints and illustrations of Dutch hydraulic engineering, a centuries-old tradition.' },
        'sec21.delft.campus': { es: 'Historia del Campus — El desarrollo arquitectónico y científico de TU Delft desde sus inicios.', en: 'Campus History — The architectural and scientific development of TU Delft since its beginnings.' },
        'sec21.delft.genai': { es: 'IA Generativa al Vuelo — Exposición sobre la intersección de inteligencia artificial y patrimonio cultural.', en: 'Gen AI on the Fly — Exhibition on the intersection of artificial intelligence and cultural heritage.' },
        'sec21.delft.corona': { es: 'Crónicas del Corona — Documentación del impacto del COVID-19 en la comunidad universitaria.', en: 'Corona Chronicles — Documentation of COVID-19\'s impact on the university community.' },
        'sec21.delft.collection': { es: 'Colección General — Punto de entrada a todas las colecciones digitales de TU Delft Heritage.', en: 'General Collection — Entry point to all digital collections at TU Delft Heritage.' },
        'sec21.rijks.title': { es: 'Rijksmuseum — Arte y Ciencia', en: 'Rijksmuseum — Art & Science' },
        'sec21.rijks.desc': {
            es: 'El Rijksmuseum de Ámsterdam ofrece manifiestos IIIF 3.0 de su colección completa a través de Micrio. Además de obras maestras, incluye instrumentos científicos, globos terráqueos y objetos de historia natural.',
            en: 'The Rijksmuseum in Amsterdam offers IIIF 3.0 manifests of its entire collection through Micrio. Beyond masterpieces, it includes scientific instruments, globes, and natural history objects.'
        },
        'sec21.rijks.nightwatch': { es: 'La Ronda de Noche — La obra maestra de Rembrandt en resolución ultra-alta (717 gigapíxeles).', en: 'The Night Watch — Rembrandt\'s masterpiece in ultra-high resolution (717 gigapixels).' },
        'sec21.rijks.milkmaid': { es: 'La Lechera — Obra icónica de Vermeer con detalles microscópicos visibles.', en: 'The Milkmaid — Vermeer\'s iconic work with visible microscopic details.' },
        'sec21.rijks.dollhouse': { es: 'Casa de Muñecas de Petronella Oortman — Objeto 3D del siglo XVII con detalle extraordinario.', en: 'Dolls\' House of Petronella Oortman — 17th century 3D object with extraordinary detail.' },
        'sec21.kb.title': { es: 'KB / eCodicesNL — Manuscritos Medievales', en: 'KB / eCodicesNL — Medieval Manuscripts' },
        'sec21.kb.desc': {
            es: 'La Biblioteca Nacional de los Países Bajos (KB) publica sus manuscritos medievales a través de eCodicesNL con manifiestos IIIF 3.0 ricos en metadatos. Incluye códices iluminados, textos científicos y obras fundamentales de la tradición europea.',
            en: 'The National Library of the Netherlands (KB) publishes its medieval manuscripts through eCodicesNL with metadata-rich IIIF 3.0 manifests. Includes illuminated codices, scientific texts, and fundamental works of the European tradition.'
        },
        'sec21.kb.augustine': { es: 'La Ciudad de Dios de San Agustín (1410-1421) — 597 páginas con iluminaciones extraordinarias.', en: 'Augustine\'s City of God (1410-1421) — 597 pages with extraordinary illuminations.' },
        'sec21.kb.collection': { es: 'Colección completa Huis van het Boek — 66 manuscritos medievales de Den Haag.', en: 'Complete Huis van het Boek collection — 66 medieval manuscripts from The Hague.' },
        'sec21.load.btn': { es: 'Cargar en Mirador', en: 'Load in Mirador' },
        'sec21.load.multi': { es: 'Abrir seleccionados', en: 'Open selected' },
        'sec21.why.title': { es: '¿Por qué Holanda y la ciencia?', en: 'Why the Netherlands and science?' },
        'sec21.why.desc': {
            es: 'Los Países Bajos tienen una larga tradición de ciencia abierta. TU Delft es líder en acceso abierto a datos de investigación, y el Rijksmuseum fue pionero en liberar sus colecciones como datos abiertos. IIIF es una pieza fundamental de esta estrategia: permite que investigadores de todo el mundo accedan, comparen y anoten recursos sin necesidad de descargarlos.',
            en: 'The Netherlands has a long tradition of open science. TU Delft is a leader in open access to research data, and the Rijksmuseum was a pioneer in releasing its collections as open data. IIIF is a fundamental piece of this strategy: it allows researchers worldwide to access, compare, and annotate resources without downloading them.'
        },

        // ── Footer ──
        'footer': { es: 'Taller IIIF · Cantaloupe 5.0 + OpenSeadragon', en: 'IIIF Workshop · Cantaloupe 5.0 + OpenSeadragon' },

        // ── JS dynamic content ──
        'toast.copied': { es: 'URL copiada', en: 'URL copied' },
        'toast.manifest.loaded': { es: 'Manifiesto externo cargado', en: 'External manifest loaded' },
        'toast.manifests.loaded': { es: 'manifiestos cargados', en: 'manifests loaded' },
        'loading': { es: 'Cargando...', en: 'Loading...' },
        'error.loading': { es: 'Error cargando imagen', en: 'Error loading image' },
        'selected': { es: 'seleccionados', en: 'selected' },
        'selected.single': { es: 'seleccionado', en: 'selected' },

        // ── Region labels ──
        'region.full': { es: 'Completa', en: 'Full' },
        'region.square': { es: 'Cuadrado', en: 'Square' },
        'region.top-left': { es: 'Esquina sup-izq', en: 'Top-left corner' },
        'region.center50': { es: 'Centro 50%', en: 'Center 50%' },
        'region.top-half': { es: 'Mitad superior', en: 'Top half' },
        'region.bottom-half': { es: 'Mitad inferior', en: 'Bottom half' },
        'region.left-half': { es: 'Mitad izquierda', en: 'Left half' },
        'region.right-half': { es: 'Mitad derecha', en: 'Right half' },

        // ── Size labels ──
        'size.max': { es: 'Máximo', en: 'Maximum' },
        'size.width': { es: 'ancho', en: 'width' },
        'size.height': { es: 'alto', en: 'height' },
        'size.exact': { es: 'exacto', en: 'exact' },
        'size.fit': { es: 'encajar', en: 'fit' },

        // ── Rotation labels ──
        'rot.none': { es: 'Sin rotación', en: 'No rotation' },
        'rot.mirror.h': { es: 'Espejo H', en: 'Mirror H' },
        'rot.mirror.90': { es: 'Espejo + 90°', en: 'Mirror + 90°' },
        'rot.mirror.v': { es: 'Espejo V', en: 'Mirror V' },

        // ── Zoom labels ──
        'zoom.full': { es: 'Vista completa', en: 'Full view' },
        'zoom.2x': { es: 'Zoom 2× (centro)', en: 'Zoom 2× (center)' },
        'zoom.4x': { es: 'Zoom 4× (centro)', en: 'Zoom 4× (center)' },
        'zoom.8x': { es: 'Zoom 8× (centro)', en: 'Zoom 8× (center)' },

        // ── Quality labels ──
        'quality.gray': { es: 'Grises JPG', en: 'Gray JPG' },
        'quality.gray.png': { es: 'Grises PNG', en: 'Gray PNG' },

        // ── Interop external labels ──
        'ext.bodleian-map.label': { es: 'Mapa de Gough — Gran Bretaña medieval', en: 'Gough Map — Medieval Great Britain' },
        'ext.bodleian-map.desc': { es: 'Uno de los mapas más antiguos de las Islas Británicas (ca. 1360).', en: 'One of the oldest maps of the British Isles (ca. 1360).' },
        'ext.bodleian-romance.desc': { es: 'Manuscrito iluminado medieval con la vida de Alejandro Magno.', en: 'Medieval illuminated manuscript with the life of Alexander the Great.' },
        'ext.nga.label': { es: 'NGA Highlights Collection', en: 'NGA Highlights Collection' },
        'ext.nga.desc': { es: 'Obras maestras de la National Gallery incluyendo Leonardo, Vermeer, Monet.', en: 'Masterpieces from the National Gallery including Leonardo, Vermeer, Monet.' },
        'ext.harvard.desc': { es: 'Autorretrato de Van Gogh dedicado a Gauguin (1888).', en: 'Van Gogh self-portrait dedicated to Gauguin (1888).' },
        'ext.yale-voynich.desc': { es: 'El misterioso códice del siglo XV con escritura y plantas desconocidas que nadie ha descifrado.', en: 'The mysterious 15th-century codex with unknown writing and plants that no one has deciphered.' },
        'ext.yale-art.desc': { es: 'Le café de nuit (El café nocturno), obra icónica de Van Gogh (1888).', en: 'Le café de nuit (The Night Café), iconic work by Van Gogh (1888).' },
        'ext.wellcome.desc': { es: 'Historia de las primeras técnicas de impresión en color.', en: 'History of early colour printing techniques.' },
        'ext.princeton.desc': { es: 'Uno de los primeros libros de cocina publicados por una afroamericana (1881).', en: 'One of the first cookbooks published by an African American woman (1881).' },
        'ext.ecodices.desc': { es: 'Biblia de la época carolingia del monasterio de Floreffe (siglo XII).', en: 'Carolingian-era Bible from Floreffe Monastery (12th century).' },
        'ext.heidelberg.desc': { es: 'Manuscrito griego de la famosa Bibliotheca Palatina.', en: 'Greek manuscript from the famous Bibliotheca Palatina.' },
        'ext.stanford.desc': { es: 'Mapas históricos de la colección David Rumsey.', en: 'Historical maps from the David Rumsey Collection.' },
        'ext.nls.desc': { es: 'Mapas manuscritos de Escocia de Timothy Pont (ca. 1583-1614).', en: 'Manuscript maps of Scotland by Timothy Pont (ca. 1583-1614).' },
        'ext.wales.desc': { es: 'Crónica medieval galesa sobre los príncipes de Gales.', en: 'Medieval Welsh chronicle about the princes of Wales.' },
        'ext.bsb.label': { es: 'Evangeliario de Otón III', en: 'Gospel Book of Otto III' },
        'ext.bsb.desc': { es: 'Evangeliario otoniano del siglo X/XI con iluminaciones en oro. Patrimonio de la Humanidad UNESCO.', en: 'Ottonian Gospel Book from the 10th/11th century with gold illuminations. UNESCO World Heritage.' },
        'ext.keio.label': { es: 'Colección de estampas japonesas', en: 'Japanese Prints Collection' },
        'ext.keio.desc': { es: 'Estampas xilográficas japonesas de la era Edo.', en: 'Japanese woodblock prints from the Edo era.' },
    },

    t(key) {
        const entry = this.translations[key];
        if (!entry) return key;
        return entry[this.currentLang] || entry['es'] || key;
    },

    setLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('taller-iiif-lang', lang);
        document.documentElement.lang = lang;
        this.applyAll();
    },

    toggle() {
        this.setLang(this.currentLang === 'es' ? 'en' : 'es');
    },

    applyAll() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const text = this.t(key);
            if (el.dataset.i18nAttr === 'placeholder') {
                el.placeholder = text;
            } else if (el.dataset.i18nAttr === 'innerHTML') {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        });

        // Update toggle button
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
            btn.title = this.currentLang === 'es' ? 'Switch to English' : 'Cambiar a español';
        }

        // Dispatch event for JS-generated content
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: this.currentLang } }));
    },

    init() {
        document.documentElement.lang = this.currentLang;
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', () => this.toggle());
        }
        this.applyAll();
    }
};
