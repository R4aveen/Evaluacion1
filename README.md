### Banco Itaú Empresas - Clon (Evaluación 1)

> Proyecto del Módulo 1 — HTML + CSS + JS · Diplomado Fullstack IPSS

## Integrantes

* Bastián Rojas
* Francisco San Juan

## Descripción

Clon de la interfaz de Banco Itaú Empresas enfocaado en la fidelidad visual, adaptabilidad responsiva (Mobile First) y optimización de rendimiento eliminando dependencias externas de terceros.

Puntos clave evaluados:

* Estructura limpia utilizando HTML5 semántico.
* Estilos estructurados mediante Bootstrap 5 combinados con CSS personalizado e inyección de variables globales en el `:root`.
* Interactividad avanzada con JavaScript Vanilla, implementando un motor de carrusel propio (`swipper.js`) con físicas de arrastre, soporte táctil, autoplay y transiciones fluidas de loop infinito.

## Demo

* Sitio desplegado: [Enlace a GitHub Pages]
* Repositorio oficial: [R4aveen/Evaluacion1](https://github.com/R4aveen/Evaluacion1/)

## Cómo correr localmente

```bash
# Clonar el proyecto
git clone https://github.com/R4aveen/Evaluacion1.git

# Acceder al directorio
cd Evaluacion1

# Instalar extension "Live Server" (vsc o fork de vsc)

# O Levantar un servidor local con Python
python3 -m http.server 8000

```

## Estructura del proyecto

```text
.
├── assets/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   │   ├── main.js
│   │   ├── menu.js
│   │   ├── primaryCards.js
│   │   ├── swipper.js
│   │   ├── footerDesktop.js
│   │   └── footerMobile.js
│   └── img/
├── contact.html
├── index.html
├── .gitignore
└── README.md

```

## Stack Tecnológico

* HTML5 Semántico
* Bootstrap 5 (CDN)
* CSS Custom (Manejo de Flexbox, CSS Grid y funciones funcionales como Clamp)
* JavaScript Vanilla (Arquitectura modular libre de librerías externas)