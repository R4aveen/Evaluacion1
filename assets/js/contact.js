document.addEventListener("DOMContentLoaded", () => {
    
    const contactHTML = `
    <div class="offcanvas" tabindex="-1" id="contactOffcanvas" aria-labelledby="contactOffcanvasLabel" style="z-index: 1055;">
        <div id="contactViewForm" class="d-flex flex-column h-100">
            <div class="offcanvas-header pb-0 border-0 justify-content-between align-items-start mt-2">
                <div>
                    <h4 class="offcanvas-title fw-bold" style="color: #ec7000; font-size: 1.6rem;">Contáctanos</h4>
                    <p class="text-secondary mb-0 mt-1" style="font-size: 0.95rem;">Ingresa tus datos y déjanos tu mensaje.</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style="filter: brightness(0) saturate(100%) invert(56%) sepia(85%) saturate(3065%) hue-rotate(1deg) brightness(103%) contrast(105%); opacity: 1;"></button>
            </div>
            <div class="offcanvas-body">
                <hr class="text-muted mt-2 mb-4" style="opacity: 0.15;">
                <form id="contactForm" novalidate>
                    <div class="mb-3">
                        <input type="text" class="form-control form-control-sm" id="contactName" placeholder="Nombre *" required>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control form-control-sm" id="contactLastName" placeholder="Apellido paterno *" required>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control form-control-sm" id="contactSurName" placeholder="Apellido materno *" required>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control form-control-sm" id="contactRut" placeholder="RUT *" required>
                        <div class="form-text mt-1" style="font-size: 0.75rem; color: #666;">Ej: 12.345.678-9</div>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control form-control-sm" id="contactAddress" placeholder="Dirección *" required>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>
                    
                    <div class="row gx-2 mb-3">
                        <div class="col-4">
                            <label class="form-label mb-1" style="font-size: 0.8rem; color: #333; font-weight: 500;">Código</label>
                            <select class="form-select form-select-sm bg-light" id="contactPhoneCode">
                                <option value="+56" selected>🇨🇱 +56</option>
                            </select>
                        </div>
                        <div class="col-8">
                            <label class="form-label mb-1 d-block">&nbsp;</label>
                            <input type="tel" class="form-control form-control-sm" id="contactPhone" placeholder="Número *" required>
                            <div class="form-text mt-1" style="font-size: 0.75rem; color: #666;">Ej: 998234566</div>
                            <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                        </div>
                    </div>

                    <div class="mb-3 mt-4">
                        <input type="email" class="form-control form-control-sm" id="contactEmail" placeholder="Email *" required>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>

                    <div class="mb-3">
                        <select class="form-select form-select-sm text-secondary" id="contactReason" required>
                            <option value="" disabled selected>Motivo de contacto *</option>
                            <option value="1" class="text-dark">Consulta general</option>
                            <option value="2" class="text-dark">Soporte técnico</option>
                            <option value="3" class="text-dark">Reclamo</option>
                            <option value="4" class="text-dark">Sugerencia</option>
                        </select>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control form-control-sm" id="contactComments" rows="4" placeholder="Comentarios *" required maxlength="500"></textarea>
                        <div class="form-text mt-1" style="font-size: 0.75rem; color: #999;">Agrega un mensaje de hasta 500 caracteres.</div>
                        <div class="invalid-feedback" style="font-size: 0.75rem;">Completa este campo</div>
                    </div>
                </form>
            </div>
            <div class="offcanvas-footer p-3 border-top d-flex gap-2 mt-auto" style="background-color: #f7f7f7;">
                <button type="button" class="btn flex-fill py-2 fw-bold bg-white" style="border: 1px solid #003698; color: #003698; border-radius: 6px;" data-bs-dismiss="offcanvas">Cancelar</button>
                <button type="submit" form="contactForm" class="btn flex-fill py-2 fw-bold text-white" id="contactSubmitBtn" style="background-color: #e0e0e0; border: none; border-radius: 6px; pointer-events: none; transition: background-color 0.3s;" disabled>Enviar mensaje</button>
            </div>
        </div>

        <div id="contactViewLoading" class="d-none flex-column h-100 align-items-center justify-content-center text-center p-4">
            <div class="d-flex gap-2 justify-content-center mb-4">
                <span class="spinner-grow spinner-grow-sm" style="background-color: #ec7000; animation-delay: 0s;"></span>
                <span class="spinner-grow spinner-grow-sm" style="background-color: #ec7000; animation-delay: 0.2s;"></span>
                <span class="spinner-grow spinner-grow-sm" style="background-color: #ec7000; animation-delay: 0.4s;"></span>
            </div>
            <h5 class="fw-bold mb-2">Enviando tu mensaje...</h5>
            <p class="text-secondary" style="font-size: 0.95rem;">Esto puede tardar algunos segundos.</p>
        </div>

        <div id="contactViewSuccess" class="d-none flex-column h-100 p-4">
            <div class="text-end">
                <button type="button" class="btn-close mt-2" data-bs-dismiss="offcanvas" aria-label="Close" style="filter: brightness(0) saturate(100%) invert(56%) sepia(85%) saturate(3065%) hue-rotate(1deg) brightness(103%) contrast(105%); opacity: 1;"></button>
            </div>
            <div class="flex-fill d-flex flex-column align-items-center justify-content-center text-center mt-n4">
                <div class="rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 40px; height: 40px; background-color: #008744;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h5 class="fw-bold mb-3" style="font-size: 1.25rem;">¡Gracias por escribirnos!</h5>
                <p class="text-secondary mb-3" style="font-size: 0.95rem;">Te enviaremos un email confirmando que<br>recibimos tu mensaje.</p>
                <p class="text-secondary mb-0" style="font-size: 0.95rem;">Responderemos tu solicitud por email o<br>llamada, de<br><strong class="text-dark">lunes a viernes de 9:00 a 18:00.</strong></p>
            </div>
            <div class="mt-auto pt-4 mb-2">
                <button type="button" class="btn w-100 py-2 fw-bold text-white" style="background-color: #ec7000; border-radius: 6px;" data-bs-dismiss="offcanvas">Cerrar</button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', contactHTML);

    const offcanvasEl = document.getElementById('contactOffcanvas');
    
    const adjustOffcanvasPosition = () => {
        if (window.innerWidth < 992) {
            offcanvasEl.classList.remove('offcanvas-end');
            offcanvasEl.classList.add('offcanvas-bottom');
            offcanvasEl.style.height = '90vh';
            offcanvasEl.style.width = '100%';
            offcanvasEl.style.borderTopRightRadius = '16px';
            offcanvasEl.style.borderTopLeftRadius = '16px';
        } else {
            offcanvasEl.classList.remove('offcanvas-bottom');
            offcanvasEl.classList.add('offcanvas-end');
            offcanvasEl.style.height = '100%';
            offcanvasEl.style.width = '420px';
            offcanvasEl.style.borderTopRightRadius = '0';
            offcanvasEl.style.borderTopLeftRadius = '0';
        }
    };

    window.addEventListener('resize', adjustOffcanvasPosition);
    adjustOffcanvasPosition();

    document.querySelectorAll('a[href="#contactOffcanvas"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
            bsOffcanvas.show();
        });
    });

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('contactSubmitBtn');
    
    const contactReason = document.getElementById('contactReason');
    contactReason.addEventListener('change', () => {
        if(contactReason.value) {
            contactReason.classList.remove('text-secondary');
            contactReason.classList.add('text-dark');
        }
    });

    const checkFormValidity = () => {
        if (form.checkValidity()) {
            submitBtn.removeAttribute('disabled');
            submitBtn.style.backgroundColor = '#ec7000';
            submitBtn.style.pointerEvents = 'auto';
        } else {
            submitBtn.setAttribute('disabled', 'true');
            submitBtn.style.backgroundColor = '#e0e0e0';
            submitBtn.style.pointerEvents = 'none';
        }
    };

    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', () => {
            checkFormValidity();
        });
        input.addEventListener('change', checkFormValidity);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (form.checkValidity()) {
            document.getElementById('contactViewForm').classList.remove('d-flex');
            document.getElementById('contactViewForm').classList.add('d-none');
            
            document.getElementById('contactViewLoading').classList.remove('d-none');
            document.getElementById('contactViewLoading').classList.add('d-flex');

            setTimeout(() => {
                document.getElementById('contactViewLoading').classList.remove('d-flex');
                document.getElementById('contactViewLoading').classList.add('d-none');
                
                document.getElementById('contactViewSuccess').classList.remove('d-none');
                document.getElementById('contactViewSuccess').classList.add('d-flex');
            }, 2500);

        } else {
            form.classList.add('was-validated');
        }
    });
    offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
        form.reset();
        form.classList.remove('was-validated');
        contactReason.classList.remove('text-dark');
        contactReason.classList.add('text-secondary');
        checkFormValidity();

        document.getElementById('contactViewForm').classList.add('d-flex');
        document.getElementById('contactViewForm').classList.remove('d-none');
        
        document.getElementById('contactViewLoading').classList.remove('d-flex');
        document.getElementById('contactViewLoading').classList.add('d-none');
        
        document.getElementById('contactViewSuccess').classList.remove('d-flex');
        document.getElementById('contactViewSuccess').classList.add('d-none');
    });

});