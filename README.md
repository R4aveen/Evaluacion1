# Banco Itaú Empresas - UI Clone & JS Engine

> Proyecto del Módulo 1 — HTML + CSS + JS · Diplomado Fullstack IPSS
> **Versiones:** [v1.0] (Maquetación Base) | **[v2.0] (Motor JS & APIs)**

## Integrantes

* **Bastián Rojas**
* **Francisco San Juan**

## Descripción

Clon funcional de la interfaz de Banco Itaú Empresas. El proyecto evolucionó de una maquetación estática responsiva (Mobile First) a una aplicación dinámica interactiva, destacando por la optimización de rendimiento y la eliminación de dependencias externas (Zero-dependencies JS). 

Puntos clave del desarrollo:
* **Estructura:** HTML5 semántico y accesible.
* **Estilos:** Bootstrap 5 (CDN) combinado con CSS custom, inyección de variables globales en el `:root`, flexbox, CSS Grid y funciones como `clamp()`.
* **Interactividad:** JavaScript Vanilla modular, implementando un motor de carrusel propio (`swipper.js`) con físicas de arrastre, renderizado dinámico del DOM y consumo de APIs.

---

## Evolutivos Implementados (Evaluación 2)

Para la segunda fase del proyecto, se implementaron los siguientes requerimientos técnicos:

* **[E1] Validación de Formulario en JS:** El formulario de la página de contacto verifica los datos en tiempo real mediante JS puro, previniendo el evento `submit` y renderizando alertas visuales (errores inline) si los datos no cumplen los criterios.
* **[E2] Consumo de API y Renderizado Dinámico:** Se implementó `fetch` con `async/await` en la sección de Sucursales para cargar asíncronamente una lista de comunas/sucursales, inyectando tarjetas dinámicas en el DOM con manejo de errores.
* **[E4] Persistencia con LocalStorage:** Desarrollo de un sistema de Modo Oscuro / Claro. La preferencia del usuario se almacena en `localStorage`, garantizando que el tema persista al navegar entre páginas o recargar el sitio.
* **[E5] Componente Interactivo Custom:** Refactorización del carrusel y componentes de UI (Offcanvas, Tabs) utilizando exclusivamente Vanilla JS, sin depender de librerías de terceros.
* **[E6] Mejoras de Calidad y Accesibilidad:** Ajuste de contrastes, implementación de etiquetas ARIA y optimización de rendimiento para alcanzar altos estándares en Lighthouse.

## Decisiones Técnicas

* **Arquitectura JS Modular:** En lugar de tener un único archivo espagueti, el código JavaScript se dividió por responsabilidades (`api/`, `render.js`, `comunas.js`, componentes aislados). Esto previene choques de variables y facilita la mantenibilidad.
* **Manejo del DOM Seguro:** Para la inyección de datos dinámicos (tarjetas de sucursales, headers/footers), se priorizó el uso de métodos seguros y sanitización de datos para prevenir vulnerabilidades de tipo XSS.
* **Desacople de UI:** Se extrajo el HTML repetitivo (como el Header y el Footer) para renderizarlo dinámicamente en las páginas secundarias (`contact.html`, `sucursales.html`), aplicando el principio DRY (Don't Repeat Yourself).

---

## Demo

* **Sitio desplegado:** [Enlace a GitHub Pages]
* **Repositorio oficial:** [R4aveen/Evaluacion1](https://github.com/R4aveen/Evaluacion1/)

## Cómo correr localmente

```bash
# 1. Clonar el proyecto
git clone [https://github.com/R4aveen/Evaluacion1.git](https://github.com/R4aveen/Evaluacion1.git)

# 2. Acceder al directorio
cd Evaluacion1

# 3. Levantar el proyecto
# Opción A: Usar la extensión "Live Server" en VS Code
# Opción B: Levantar un servidor local con Python
python3 -m http.server 8000

```

## Estructura del proyecto

```text
.
├── assets/
│   ├── css/
│   │   └── custom.css          # Estilos propios sobre Bootstrap
│   ├── data/
│   │   └── comunas.json        # Datos locales / Mock API
│   ├── img/                    # Assets gráficos
│   └── js/
│       ├── api/                # Lógica de fetch y renderizado (Eval 2)
│       │   ├── comunas.js
│       │   └── render.js
│       ├── main.js             # Entry point
│       ├── menu.js
│       ├── swipper.js          # Motor custom de carrusel
│       └── ...                 # Scripts de componentes UI
├── index.html                  # Landing principal
├── contact.html                # Página de contacto (Validaciones JS)
├── sucursales.html             # Listado dinámico (Fetch API)
├── CHANGELOG.md                # Historial de versiones v1.0 a v2.0
└── README.md

```

## Stack Tecnológico

* **Estructura:** HTML5 Semántico
* **Estilos:** CSS3 / Bootstrap 5 (CDN)
* **Lógica:** JavaScript Vanilla (ES6+)
* **Herramientas:** Git, GitHub Pages, LocalStorage, Fetch API

```

```
