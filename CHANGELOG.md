# Changelog

## [v2.0] - 2026-05-28

### Agregado (Evolutivos Evaluados)
* [cite_start]**E1: Validación de formulario JS**[cite: 316]: Implementación de validación asíncrona en la página de contacto (PR #13). Previene el envío si hay errores y provee feedback visual al usuario.
* [cite_start]**E2: Consumo de API pública con fetch**[cite: 316]: Integración en la página de Sucursales de una API para renderizar dinámicamente un listado de comunas y datos (PR #14).
* [cite_start]**E4: Persistencia con localStorage**[cite: 316]: Implementación de la funcionalidad de *Modo Oscuro/Claro* (PR #15). La preferencia del usuario se guarda en el `localStorage` y persiste al recargar o cambiar de página.
* [cite_start]**E5: Componentes Interactivos**[cite: 316]: Implementación de un *Swiper* dinámico con transiciones y refactorización de componentes interactivos a lo largo de las vistas (PR #11 y #12).

### Mejorado (Calidad y Refactor)
* [cite_start]**E6: Mejoras de Calidad**[cite: 318]: Ajustes exhaustivos de accesibilidad, manejo de contraste, corrección de atributos ARIA y mejoras visuales en CSS.
* Refactorización de código HTML repetitivo e implementación de renderizado dinámico para elementos modulares.
* Limpieza general de estilos del Navbar y replicación estructurada en páginas secundarias (PR #16).
* [cite_start]Actualización de la documentación en el `README.md` y estructura de directorios[cite: 330, 331, 332].

---

## [v1.0] - 2026-05-15
* Entrega inicial: maquetación estática con HTML5 Semántico, CSS mobile-first, y Bootstrap 5 vía CDN.
* Estructura base del proyecto y configuración de control de versiones.