document.addEventListener('DOMContentLoaded', () => {
    const footerData = {
        categories: [
            {
                id: "Productos",
                title: "Productos",
                items: [
                    "Cuenta Corriente", "Financiamiento", "Cash Management", "Corporate Finance", 
                    "Tarjetas de crédito", "Mesa de Dinero", "Billetera Digital Itaú", "Pago QR Itaú", 
                    "Cuenta Corriente en Dólares", "Pago automático y en línea", "Abono de remuneraciones"
                ]
            },
            {
                id: "Sobre", 
                title: "Sobre Itaú",
                items: [
                    "Documentación normativa", "Institucional", "Trabaja en Itaú", 
                    "Bases legales", "Sostenibilidad", "Términos de uso y políticas de privacidad"
                ]
            },
            {
                id: "Servicio",
                title: "Servicio al cliente",
                items: ["Contáctanos", "Sucursales"]
            },
            {
                id: "Info",
                title: "Infórmate",
                items: [
                    "Venta de bienes", "Investor Relations", "Itaú New York", 
                    "Itaú Miami", "Tarifas y contratos", "Adjudicación Licitación Pública"
                ]
            }
        ],
        help: {
            title: "¿Cómo podemos ayudarte?",
            text: "Si eres cliente del banco no dudes en comunicarte con nosotros:",
            phones: ["+56226860888", "600 686 0888"]
        },
        apps: [
            { img: "app_store.svg", alt: "App-Store" },
            { img: "google_play.svg", alt: "Google-Play" },
            { img: "app_gallery.svg", alt: "App-Gallery" }
        ],
        socials: [
            { name: "facebook", url: "https://es-la.facebook.com/itauchile" },
            { name: "twitter", url: "https://twitter.com/itauchile" },
            { name: "linkedin", url: "https://cl.linkedin.com/company/itauchile" },
            { name: "instagram", url: "https://www.instagram.com/itauchile" },
            { name: "smartphone", url: "https://www.tiktok.com/@itauchile?lang=es" }
        ]
    };

    const mobileContainer = document.getElementById('footer-mobile-container');

    if (mobileContainer) {
        mobileContainer.innerHTML = `
            <div class="accordion accordion-flush" id="accordionFooter">
                ${footerData.categories.map(cat => `
                    <div class="accordion-item" style="background-color: transparent; border-color: #eee;">
                        <h2 class="accordion-header" id="heading${cat.id}">
                            <button class="accordion-button collapsed fw-bold shadow-none" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#collapse${cat.id}" 
                                    aria-expanded="false" aria-controls="collapse${cat.id}" 
                                    style="background-color: transparent; color: #333;">
                                ${cat.title}
                            </button>
                        </h2>
                        <div id="collapse${cat.id}" class="accordion-collapse collapse" 
                             aria-labelledby="heading${cat.id}" data-bs-parent="#accordionFooter">
                            <div class="accordion-body py-2">
                                <ul class="list-unstyled m-0 ps-3">
                                    ${cat.items.map(link => `
                                        <li class="mb-3">
                                            <a class="text-decoration-none" style="color: #666; font-size: 0.9rem;" href="#">${link}</a>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="text-center px-4 mt-5 mb-4">
                <p class="fw-bold mb-2" style="color: #333; font-size: 1rem;">${footerData.help.title}</p>
                <p style="color: #666; font-size: 0.85rem;" class="mb-3">${footerData.help.text}</p>
                <div class="d-flex justify-content-center gap-4">
                    ${footerData.help.phones.map(phone => `
                        <div class="d-flex align-items-center gap-2">
                            <img width="24" height="24" src="assets/img/footerIcons/smartphone.svg" alt="Celular" style="width: 16px; filter: brightness(0) saturate(100%) invert(43%) sepia(99%) saturate(4066%) hue-rotate(9deg) brightness(101%) contrast(106%);">
                            <a class="text-decoration-none fw-bold" style="color: #666; font-size: 0.9rem;" href="tel:${phone}">${phone}</a>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="text-center px-4 mb-4">
                <p class="fw-bold mb-3" style="color: #333; font-size: 0.9rem;">Descarga nuestra aplicación Itaú</p>
                <div class="d-flex justify-content-center gap-2 flex-wrap">
                    ${footerData.apps.map(app => `
                        <a href="https://banco-itau.onelink.me/ndHT/Storeitau">
                            <img width="161" height="48" src="./assets/img/footerIcons/${app.img}" alt="${app.alt}" style="height: 32px;">
                        </a>
                    `).join('')}
                </div>
            </div>

            <hr style="border-color: #ddd;">

            <div class="text-center px-4 mb-4 mt-4">
                <div class="d-flex justify-content-center gap-3 mb-4">
                    ${footerData.socials.map(soc => `
                        <a href="${soc.url}">
                            <img width="24" height="24" src="assets/img/footerIcons/${soc.name}.svg" alt="${soc.name}" style="width: 24px; filter: brightness(0) saturate(100%) invert(43%) sepia(99%) saturate(4066%) hue-rotate(9deg) brightness(101%) contrast(106%);">
                        </a>
                    `).join('')}
                </div>
                <p style="color: #666; font-size: 0.7rem; line-height: 1.4;">
                    Descubre: Plan Cuenta Corriente, Crédito de Consumo, Fondos Mutuos y APV. Infórmese sobre la garantía estatal de los depósitos en su banco o en www.cmfchile.cl © 2024 Banco Itaú Chile. Todos los derechos reservados. Av. Presidente Riesco 5537, Las Condes.
                </p>
            </div>

            <div class="px-3 pb-2 mt-4 d-flex gap-2">
                <button class="btn w-50 fw-bold border" style="color: #003698; border-color: #003698 !important; background-color: white;">Hazte cliente</button>
                <button class="btn w-50 fw-bold text-white" style="background-color: #ec7000;">Acceso clientes</button>
            </div>
        `;
    }
});