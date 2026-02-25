# Enunciado del proyecto — **Clon adaptado: Portfolio OR Tienda / Página de negocio (solo HTML + Tailwind CSS)**

**Objetivo:**
Tomando la base técnica del enunciado original (proyecto hecho solo con HTML y Tailwind CSS), adapta la consigna para crear **una página personal tipo portafolio** (con **mínimo 5 secciones**) *o* **una página para una tienda / negocio**. El objetivo sigue siendo practicar maquetación responsiva, clases personalizadas con `@apply`, colores y animaciones en Tailwind, HTML semántico y accesibilidad.

## Dos opciones (elige 1 al empezar el proyecto)

### Opción A — **Portafolio personal** (recomendado: 5–7 secciones)

Secciones mínimas sugeridas (mín. 5):

1. **Hero / Presentación** (foto, título, CTA para contacto o ver proyectos)
2. **Sobre mí** (bio breve, skills, badges)
3. **Proyectos** (grid filtrable o con lightbox CSS-only; mínimo 6 proyectos de ejemplo)
4. **Servicios / Qué ofrezco** (cards con iconos y descripciones)
5. **Testimonios / Clientes**
6. **Contacto** (formulario no funcional o mailto, mapa/ubicación opcional)
   (+) Bonus: Blog / Noticias o sección de “Recursos”.

Interacciones CSS-only recomendadas:

* Lightbox/modal CSS-only para detalles de un proyecto.
* Hover y focus states claros en tarjetas de proyecto y enlaces.

### Opción B — **Tienda / Página de negocio**

Secciones mínimas sugeridas (mín. 5):

1. **Hero / Banner** con oferta principal y CTA (ej. “Comprar ahora”)
2. **Catálogo / Grid de productos o servicios** (mín. 6 items)
3. **Card de producto** con hover (mostrar precio, botón, badge)
4. **Carrito / Modal de compra CSS-only** (simulación visual sin JS)
5. **Opiniones / Testimonios**
6. **Contacto / Ubicación y horarios**
   (+) Bonus: Sección de preguntas frecuentes o planes/precios.

Interacciones CSS-only recomendadas:

* Menú hamburguesa CSS-only para móvil.
* Badges y micro-animaciones en botones y cards.


## Requisitos técnicos (aplican a ambas opciones)

1. **Solo HTML + Tailwind CSS**. Tailwind debe estar instalado (instrucciones abajo).
2. Crear y usar **clases personalizadas** con `@apply` en `src/input.css` (mín. 5 clases propias — ej.: `.brand-btn`, `.card-shadow`, `.project-tag`, `.hero-grad`, `.muted-text`).
3. Definir **colores personalizados** en `theme` y **animaciones personalizadas**. Usa al menos 3 animaciones distintas en la UI (entradas, hover, micro-interacciones).
4. **100% responsive** en breakpoints: mobile (≤640px), tablet (641–1024px), desktop (≥1024px). No debe haber overflow horizontal.
5. Implementar al menos las secciones mínimas indicadas según la opción elegida.
6. **Accesibilidad básica:** `alt` en todas las imágenes; roles/aria donde apliquen; buen contraste; focus states visibles para teclado.
7. Código organizado y comentado. Usa nombres de clases semánticos/personalizados donde lo exige la consigna.


## Entregables (estructura y archivos)


project-portfolio-or-store/
├─ index.html
├─ package.json
├─ src/
│  └─ input.css        <-- aquí defines @tailwind, tus classes con @apply y theme.
├─ dist/
│  └─ output.css
└─ assets/
   ├─ avatar.jpg / logo.png
   └─ projects/ or products/
README.md

**Archivos obligatorios:**

* `index.html` (semántico, comentado).
* `src/input.css` donde usarás `@apply` y declararás clases reutilizables (mín. 5).
* `dist/output.css` (build de Tailwind).
* Carpeta `assets/` con imágenes y `alt` adecuados.
* `README.md` con instrucciones de build y notas de diseño.

## Setup mínimo (recordatorio)

(Si ya tienes Tailwind instalado, ignora este bloque)

1. `npm init -y`
2. `npm install tailwindcss @tailwindcss/cli`
3. `src/input.css` ejemplo mínimo:


4. Build (dev/watch):


npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch


5. En `index.html` enlaza `dist/output.css`.


## Checklist de entrega (marca lo que completes)

* [ ] `index.html` completo y semántico.
* [ ] `src/input.css` con `@apply` y **mín. 5 clases personalizadas**.
* [ ] Grid de proyectos/productos responsivo y funcional.
* [ ] Navbar móvil con menú hamburguesa CSS-only.
* [ ] **Mín. 3 animaciones** personalizadas aplicadas.
* [ ] `README.md` con pasos de build y decisiones de diseño.
* [ ] Todas las imágenes tienen `alt` y site pasa chequeos básicos de accesibilidad.
* [ ] Código comentado y organizado.


## Criterios de evaluación (qué buscar)

* **Maquetación y responsividad:** adaptación limpia entre breakpoints, sin scroll horizontal.
* **Uso de Tailwind y personalización:** colores y animaciones en `theme`, buen uso de `@apply`.
* **Pulido visual:** tipografía, espacios, sombras, consistencia cromática.