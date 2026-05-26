document.addEventListener('DOMContentLoaded', () => {
    const footerData = {
        apps: {
            title: "Descarga nuestra aplicación Itaú",
            links: [
                { url: "https://banco-itau.onelink.me/ndHT/Storeitau", img: "app_store.svg", alt: "App-Store", className: "d-block mb-2" },
                { url: "https://banco-itau.onelink.me/ndHT/Storeitau", img: "google_play.svg", alt: "Google-Play", className: "d-block mb-2" },
                { url: "https://banco-itau.onelink.me/ndHT/Storeitau", img: "app_gallery.svg", alt: "App-Gallery", className: "d-block" }
            ]
        },
        productos: {
            title: "Productos",
            items: [
                "Cuenta Corriente", "Financiamiento", "Cash Management", "Corporate Finance", 
                "Tarjetas de crédito", "Mesa de Dinero", "Billetera Digital Itaú", "Pago QR Itaú", 
                "Cuenta Corriente en Dólares", "Pago automático y en línea", "Abono de remuneraciones"
            ]
        },
        sobreItau: {
            title: "Sobre Itaú",
            items: [
                "Documentación normativa", "Institucional", "Trabaja en Itaú", 
                "Bases legales", "Sostenibilidad", "Términos de uso y políticas de privacidad"
            ]
        },
        servicio: {
            title: "Servicio al cliente",
            items: ["Contáctanos", "Sucursales"]
        },
        informate: {
            title: "Infórmate",
            items: [
                "Venta de bienes", "Investor Relations", "Itaú New York", 
                "Itaú Miami", "Tarifas y contratos", "Adjudicación Licitación Pública"
            ]
        },
        ayuda: {
            title: "¿Cómo podemos ayudarte?",
            text: "Si eres cliente del banco no dudes en comunicarte con nosotros:",
            phones: ["+56226860888", "600 686 0888"]
        }
    };

    const renderLinkList = (items, mbClass = "m-0") => `
        <ul class="list-unstyled ${mbClass}">
            ${items.map(item => `
                <li class="mb-2"><a class="text-decoration-none" style="color: #666; font-size: 0.85rem;" href="#">${item}</a></li>
            `).join('')}
        </ul>
    `;

    const footerContainer = document.getElementById('footer-desktop-container');

    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="col-lg-2">
                <p class="footer-title fw-bold" style="color: #666; font-size: 0.9rem;">${footerData.apps.title}</p>
                ${footerData.apps.links.map(app => `
                    <a href="${app.url}" class="${app.className}">
                        <img src="./assets/img/footerIcons/${app.img}" alt="${app.alt}" class="pepito">
                    </a>
                `).join('')}
            </div>

            <div class="col-lg-2">
                <p class="footer-title fw-bold" style="color: #666; font-size: 0.9rem;">${footerData.productos.title}</p>
                ${renderLinkList(footerData.productos.items)}
            </div>

            <div class="col-lg-3">
                <p class="footer-title fw-bold" style="color: #666; font-size: 0.9rem;">${footerData.sobreItau.title}</p>
                ${renderLinkList(footerData.sobreItau.items, "m-0 mb-4")}
                
                <p class="footer-title fw-bold" style="color: #666; font-size: 0.9rem;">${footerData.servicio.title}</p>
                ${renderLinkList(footerData.servicio.items)}
            </div>

            <div class="col-lg-2">
                <p class="footer-title fw-bold" style="color: #666; font-size: 0.9rem;">${footerData.informate.title}</p>
                ${renderLinkList(footerData.informate.items)}
            </div>

            <div class="col-lg-3">
                <p class="footer-title fw-bold" style="color: #666; font-size: 0.9rem;">${footerData.ayuda.title}</p>
                <p style="color: #666; font-size: 0.85rem;" class="mb-3">${footerData.ayuda.text}</p>
                <ul class="list-unstyled m-0">
                    ${footerData.ayuda.phones.map(phone => `
                        <li class="mb-2 d-flex align-items-center gap-2">
                            <img src="assets/img/footerIcons/smartphone.svg" alt="Celular" style="width: 16px; filter: brightness(0) saturate(100%) invert(43%) sepia(99%) saturate(4066%) hue-rotate(9deg) brightness(101%) contrast(106%);">
                            <a class="text-decoration-none fw-bold" style="color: #666; font-size: 0.9rem;" href="#">${phone}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
});