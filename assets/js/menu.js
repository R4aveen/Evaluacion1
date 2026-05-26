document.addEventListener('DOMContentLoaded', () => {

    const menuPrincipalData = [
        { icon: 'bar-chart-2.svg', title: 'Inversiones' },
        { icon: 'credit-card.svg', title: 'Cuentas' },
        { icon: 'smartphone.svg', title: 'Pagos' },
        { icon: 'pie-chart.svg', title: 'Financiamiento' },
        { icon: 'globe.svg', title: 'Comercio exterior' },
        { icon: 'download.svg', title: 'Recaudación' },
        { icon: 'briefcase.svg', title: 'Corporate Finance' },
        { icon: 'heart.svg', title: 'Sostenibilidad' },
        { icon: 'database.svg', title: 'Mesa de dinero' },
        { icon: 'shield.svg', title: 'Seguros' },
        { icon: 'map.svg', title: 'Bancos globales' }
    ];

    const menuPrincipalContainer = document.getElementById('menu-principal-container');

    if(menuPrincipalContainer) {
        menuPrincipalContainer.innerHTML = menuPrincipalData.map( item => `
            <li>
                <a href="#" class="menu-lateral-item">
                    <div class="d-flex align-items-center">
                        <img src="./assets/img/headerIcons/${item.icon}" alt="${item.title}" class="menu-lateral-icon filter-orange">
                        <span>${item.title}</span>
                    </div>
                    <img src="./assets/img/headerIcons/chevron-right.svg" alt="Ir a ${item.title}" class="menu-lateral-arrow-icon filter-orange">
                </a>
            </li>
        `).join('');
    }


    const menuSecundarioData = [
        { icon: null, title: 'Itaú beneficios', isBold: true },
        { icon: 'help-circle.svg', title: 'Contáctanos', isBold: false },
        { icon: 'map-pin.svg', title: 'Sucursales', isBold: false }
    ];


    const menuSecundarioContainer = document.getElementById('menu-secundario-container');

    if(menuSecundarioContainer) {
        menuSecundarioContainer.innerHTML = menuSecundarioData.map( item => `
            <li class="mb-2 px-4 ${item.isBold ? 'mb-3' : ''}">
                <a href="#" class="d-flex align-items-center gap-2 text-decoration-none text-dark ${item.isBold ? 'fw-bold' : ''}">
                    ${item.icon ? `<img src="assets/img/headerIcons/${item.icon}" alt="${item.title}" class="filter-orange" style="width:18px; height:18px;">` : '<span>'}
                    ${item.icon ? item.title : `${item.title}</span>`}
                    <img src="./assets/img/headerIcons/chevron-right.svg" alt="" class="menu-lateral-arrow-icon filter-orange ms-auto">
                </a>
            </li>    
        `).join('');
    }
});