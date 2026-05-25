document.addEventListener('DOMContentLoaded', () => {
    const cardsData = [
        {
            img: 'solucion_financiamiento.webp',
            title: 'Conoce las soluciones de financiamiento',
            text: 'Te ayudamos a desarrollar tus proyectos.',
            btnText: 'Conocer opciones',
            variant: 'primary'
        },
        {
            img: 'cuenta_corriente.webp',
            title: 'Cuenta Corriente',
            text: 'Haz crecer tu negocio con una cuenta diseñada para ti.',
            btnText: 'Conocer más',
            variant: 'primary'
        },
        {
            img: 'comercio_internacional.png',
            title: 'Comercio internacional con Portal Comex',
            text: 'Gestiona pagos, cobranzas, financiamiento y más.',
            btnText: 'Conocer más',
            variant: 'secondary'
        },
        {
            img: 'leasing_factoring.webp',
            title: 'Potencia tu negocio con Leasing',
            text: 'Revisa el catálogo Itaú y accede a ofertas exclusivas.',
            btnText: 'Revisar catálogo',
            variant: 'secondary'
        },
        {
            img: 'factoring_digital.png',
            title: 'Impulsa tu negocio con Factoring digital',
            text: 'Con abono en línea, recibe tus fondos en 10 minutos.',
            btnText: 'Conocer más',
            variant: 'secondary'
        }
    ];

    const cardsContainer = document.getElementById('cards-swiper-container');

    if (cardsContainer) {
        cardsContainer.innerHTML = cardsData.map(card => {
            const isPrimary = card.variant === 'primary';
            
            const outerRadius = isPrimary ? '16px' : '12px';
            const paddingClasses = isPrimary ? 'p-3' : 'p-2';
            const overlayStyles = isPrimary 
                ? 'background-color: rgba(30, 30, 30, 0.8); border-radius: 12px; min-height: 170px;'
                : 'background-color: rgba(60, 60, 60, 0.85); border-radius: 8px; min-height: 160px; backdrop-filter: blur(2px);';
            const btnClasses = isPrimary 
                ? 'btn w-100 fw-bold py-2 mt-3' 
                : 'btn btn-light w-100 fw-bold text-dark py-2 mt-3';
            const btnStyles = isPrimary 
                ? 'background-color: #ffffff; color: #001C4B; border-radius: 6px; font-size: 0.95rem;' 
                : 'border-radius: 6px; font-size: 0.95rem;';

            return `
                <div class="custom-card-slide">
                    <div class="position-relative overflow-hidden w-100 h-100" style="border-radius: ${outerRadius}; height: 420px;">
                        <img src="assets/img/hero/${card.img}" alt="${card.title}" loading="lazy" class="w-100 h-100 object-fit-cover">
                        <div class="position-absolute bottom-0 w-100 ${paddingClasses}">
                            <div class="p-4 d-flex flex-column justify-content-between" style="${overlayStyles}">
                                <div>
                                    <h5 class="text-white fw-bold mb-2">${card.title}</h5>
                                    <p class="text-white mb-0" style="font-size: ${isPrimary ? '0.95rem' : '0.9rem'}; line-height: 1.3;">${card.text}</p>
                                </div>
                                <button class="${btnClasses}" style="${btnStyles}">${card.btnText}</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
});