import { fetchComunas } from './api/comunas.js';
import { renderSelectComunas, renderTablaComunas } from './api/render.js';

let todasLasComunas = [];
let currentPage = 1;
const itemsPerPage = 10;

async function inicializarFiltros() {
    const select = document.getElementById('comunas-select');
    const tablaContenedor = document.getElementById('tabla-comunas-contenedor');
    
    if (select) {
        select.innerHTML = '<option value="">Cargando comunas...</option>';
        select.disabled = true;
    }

    if (tablaContenedor) {
        tablaContenedor.innerHTML = '<tr><td colspan="5" class="text-center py-4"><div class="spinner-border text-warning" role="status"><span class="visually-hidden">Cargando...</span></div><p class="mt-2">Cargando datos...</p></td></tr>';
    }

    if (select || tablaContenedor) {
        todasLasComunas = await fetchComunas();

        if (select) {
            renderSelectComunas(todasLasComunas);
            select.disabled = false;
        }

        if (tablaContenedor) {
            aplicarFiltros();
        }
        
        setupEventListeners();
    }
}

function aplicarFiltros() {
    const select = document.getElementById('comunas-select');
    const estadoRadios = document.querySelectorAll('input[name="estadoSucursal"]');
    
    let comunaSeleccionada = select ? select.value : '';
    let estadoSeleccionado = '';
    
    estadoRadios.forEach(radio => {
        if (radio.checked) {
            estadoSeleccionado = radio.value;
        }
    });

    let filtradas = todasLasComunas;

    if (comunaSeleccionada) {
        filtradas = filtradas.filter(c => c.comuna === comunaSeleccionada);
    }

    if (estadoSeleccionado) {
        filtradas = filtradas.filter(c => c.estado.toLowerCase() === estadoSeleccionado.toLowerCase());
    }

    renderTablaComunas(filtradas, currentPage, itemsPerPage);
}

function setupEventListeners() {
    const select = document.getElementById('comunas-select');
    const estadoRadios = document.querySelectorAll('input[name="estadoSucursal"]');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (select) {
        select.addEventListener('change', () => {
            currentPage = 1;
            aplicarFiltros();
        });
    }

    estadoRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            currentPage = 1;
            aplicarFiltros();
        });
    });

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                aplicarFiltros();
            }
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const selectVal = document.getElementById('comunas-select').value;
            const estadoVal = document.querySelector('input[name="estadoSucursal"]:checked').value;
            let filtradas = todasLasComunas;
            if (selectVal) filtradas = filtradas.filter(c => c.comuna === selectVal);
            if (estadoVal) filtradas = filtradas.filter(c => c.estado.toLowerCase() === estadoVal.toLowerCase());
            
            const totalPages = Math.ceil(filtradas.length / itemsPerPage) || 1;
            if (currentPage < totalPages) {
                currentPage++;
                aplicarFiltros();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    inicializarFiltros();
    const offcanvasElement = document.getElementById('offcanvasExample');
    const btnMenu = document.getElementById('btn-menu-lateral');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (offcanvasElement && btnMenu && iconMenu && iconClose) {
        offcanvasElement.addEventListener('show.bs.offcanvas', function () {
            btnMenu.classList.add('btn-menu-active');
            iconMenu.classList.add('d-none');
            iconClose.classList.remove('d-none');
        });

        offcanvasElement.addEventListener('hide.bs.offcanvas', function () {
            btnMenu.classList.remove('btn-menu-active');
            iconClose.classList.add('d-none');
            iconMenu.classList.remove('d-none');
        });
    }
});

 function updateOffcanvasSide() {
        const offcanvas = document.getElementById('offcanvasExample');
        if (!offcanvas) return;
        if (window.innerWidth < 991) {
            offcanvas.classList.remove('offcanvas-start');
            offcanvas.classList.add('offcanvas-end');
        } else {
            offcanvas.classList.remove('offcanvas-end');
            offcanvas.classList.add('offcanvas-start');
        }
    }
    window.addEventListener('resize', updateOffcanvasSide);
    window.addEventListener('DOMContentLoaded', updateOffcanvasSide);


