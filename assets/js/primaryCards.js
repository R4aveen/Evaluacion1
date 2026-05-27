const cardsData = [
    {
        img: 'solucion_financiamiento.webp',
        title: 'Conoce las soluciones de financiamiento',
        text: 'Te ayudamos a desarrollar tus proyectos.',
        btnText: 'Conocer opciones'
    },
    {
        img: 'cuenta_corriente.webp',
        title: 'Cuenta Corriente',
        text: 'Haz crecer tu negocio con una cuenta diseñada para ti.',
        btnText: 'Conocer más'
    },
    {
        img: 'comercio_internacional.png', 
        title: 'Comercio internacional con Portal Comex',
        text: 'Gestiona pagos, cobranzas, financiamiento y más.',
        btnText: 'Conocer más'
    },
    {
        img: 'leasing_factoring.webp',
        title: 'Potencia tu negocio con Leasing',
        text: 'Revisa el catálogo Itaú y accede a ofertas exclusivas.',
        btnText: 'Revisar catálogo'
    },
    {
        img: 'factoring_digital.png',
        title: 'Impulsa tu negocio con Factoring digital',
        text: 'Con abono en línea, recibe tus fondos en 10 minutos.',
        btnText: 'Conocer más'
    }
];

const cardsContainer = document.getElementById('cards-swiper-container');

if (cardsContainer) {
    cardsContainer.className = 'd-flex flex-nowrap pb-4 px-3 mx-auto';
    cardsContainer.style.gap = '24px';
    cardsContainer.style.maxWidth = '930px';
    cardsContainer.style.margin = '0 auto';
    
    cardsContainer.innerHTML = cardsData.map(card => {
        const overlayStyles = 'background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,30,30,0.85) 50%, rgba(20,20,20,0.95) 100%); height: 60%;';

        return `
            <div class="custom-card-slide flex-shrink-0" style="width: clamp(250px, 75vw, 294px); height: 400px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                
                <div class="position-relative w-100 h-100 overflow-hidden" style="border-radius: 12px; background-image: url('assets/img/hero/${card.img}'); background-size: cover; background-position: center;">
                    
                    <div class="position-absolute bottom-0 w-100 d-flex flex-column justify-content-end p-3 p-md-4 z-1" style="${overlayStyles}">
                        <div class="mb-3">
                            <h5 class="text-white fw-bold mb-2" style="font-size: 1.1rem; line-height: 1.25;">${card.title}</h5>
                            <p class="text-white mb-0" style="font-size: 0.85rem; line-height: 1.35;">${card.text}</p>
                        </div>
                        <button class="btn bg-white w-100 fw-bold py-2 mt-auto shadow-sm" style="color: #001C4B; border-radius: 6px; font-size: 0.95rem;">${card.btnText}</button>
                    </div>
                    
                </div>
            </div>
        `;
    }).join('');

    let paginationContainer = document.getElementById('cards-pagination');
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'cards-pagination';
        paginationContainer.className = 'd-flex justify-content-center gap-2 mt-2';
        cardsContainer.parentNode.insertBefore(paginationContainer, cardsContainer.nextSibling);
    }
}
