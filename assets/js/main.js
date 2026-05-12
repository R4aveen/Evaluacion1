document.addEventListener('DOMContentLoaded', function () {
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
