const bannerData = [
  { 
    img: "assets/img/hero/Banners_SP_Vitrina_Empresas_Abril.jpeg", 
    title: "¿Recibiste devolución?<br>Invierte hoy", 
    text: "Contrata online un depósito a plazo y conoce tu<br>rentabilidad desde el inicio.", 
    link: "#", 
    alt: "Inversiones" 
  },
  { 
    img: "assets/img/hero/Bnn_Vitrina_Empresas_Febrero_1920x1080.jpeg", 
    title: "Activa tu pago de impuestos<br>con Itaú", 
    text: "Mantén tu empresa al día desde un solo lugar, 100% digital.", 
    link: "#", 
    alt: "Inversiones" 
  },
  { 
    img: "assets/img/hero/Empresas-01.jpeg", 
    title: "Potencia tu negocio con<br>capital de trabajo", 
    text: "Créditos 100% digital y con la seguridad que nos caracteriza.", 
    link: "#", 
    alt: "Inversiones" 
  },
  { 
    img: "assets/img/hero/02_Vitrina_web_-_Empresas_05_1920x1080_Handshake.jpeg", 
    title: "Potencia tu negocio", 
    text: "Créditos 100% digital para tu empresa.", 
    link: "#", 
    alt: "Capital" 
  }
];

const track = document.getElementById('hero-slider-track');

if (track) {
  track.innerHTML = bannerData.map(slide => `
    <div class="custom-slide">
      <div class="position-relative w-100 h-100">
        <img src="${slide.img}" alt="${slide.alt}" class="hero-img">
        <div class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%); pointer-events: none;"></div>
        <div class="position-absolute top-50 start-0 translate-middle-y text-white z-3" style="padding-left: 8%; padding-right: 5%;">
          <span class="d-block hero-title">${slide.title}</span>
          <p class="mt-3 mb-4 hero-text">${slide.text}</p>
          <a href="${slide.link}" class="btn fw-bold text-white px-4 py-2 shadow-sm" style="background-color: #001C4B; border-radius: 6px;">Hazte cliente</a>
        </div>
      </div>
    </div>
  `).join('');
}

function initSwiperLite(containerSelector, nextBtnSelector = null, prevBtnSelector = null, paginationSelector = null) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.style.userSelect = 'none';
    container.style.webkitUserSelect = 'none';
    container.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
    container.querySelectorAll('a, button').forEach(el => el.setAttribute('draggable', 'false'));

    container.style.display = 'flex';
    container.style.flexWrap = 'nowrap';
    container.style.overflowX = 'auto';
    container.style.scrollBehavior = 'smooth';
    container.style.scrollbarWidth = 'none'; 
    container.style.msOverflowStyle = 'none'; 
    
    const originalChildren = Array.from(container.querySelectorAll(':scope > div'));
    const totalOriginals = originalChildren.length;
    originalChildren.forEach(child => child.style.flex = '0 0 auto');

    if (container.scrollWidth <= container.clientWidth + 10) {
        container.style.overflowX = 'hidden';
        container.style.cursor = 'default';
        if (paginationSelector) {
            const pag = document.querySelector(paginationSelector);
            if (pag) pag.style.display = 'none';
        }
        return; 
    }

    if (totalOriginals > 1) {
        originalChildren.forEach(child => container.appendChild(child.cloneNode(true)));
        originalChildren.slice().reverse().forEach(child => container.prepend(child.cloneNode(true)));
    }

    const allChildren = Array.from(container.querySelectorAll(':scope > div'));
    allChildren.forEach(child => child.style.flex = '0 0 auto');

    const getStepSize = () => {
        if (originalChildren.length === 0) return 0;
        const cardWidth = originalChildren[0].offsetWidth;
        const gap = parseFloat(window.getComputedStyle(container).gap) || 0;
        return cardWidth + gap;
    };

    setTimeout(() => {
        if (totalOriginals > 1) {
            container.style.scrollBehavior = 'auto'; 
            container.scrollLeft = getStepSize() * totalOriginals; 
            container.style.scrollBehavior = 'smooth'; 
        }
    }, 50);

    let scrollTimeout;
    container.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (totalOriginals <= 1) return;
            const stepSize = getStepSize();
            if (!stepSize) return;
            
            const currentIdx = Math.round(container.scrollLeft / stepSize);
            
            if (currentIdx >= totalOriginals * 2) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = (currentIdx - totalOriginals) * stepSize;
                container.offsetHeight; 
                container.style.scrollBehavior = 'smooth';
            } 
            else if (currentIdx < totalOriginals) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = (currentIdx + totalOriginals) * stepSize;
                container.offsetHeight; 
                container.style.scrollBehavior = 'smooth';
            }
        }, 150); 
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
        isDown = true;
        container.style.scrollBehavior = 'auto';
        container.style.cursor = 'grabbing';
        startX = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    };

    const move = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
        const walk = (x - startX) * 1; 
        container.scrollLeft = scrollLeft - walk;
    };

    const end = () => {
        if (!isDown) return;
        isDown = false;
        container.style.cursor = 'default';
        container.style.scrollBehavior = 'smooth';
        
        const stepSize = getStepSize();
        if (stepSize) {
            const currentScroll = container.scrollLeft;
            const nearestIndex = Math.round(currentScroll / stepSize);
            container.scrollTo({ left: nearestIndex * stepSize, behavior: 'smooth' });
        }
    };

    container.addEventListener('mousedown', start);
    container.addEventListener('mousemove', move);
    
    container.addEventListener('mouseup', end);
    container.addEventListener('mouseleave', end);
    
    container.addEventListener('touchstart', start, { passive: true });
    container.addEventListener('touchmove', move, { passive: false });
    container.addEventListener('touchend', end);

    if (nextBtnSelector) {
        const nextBtn = document.querySelector(nextBtnSelector);
        if (nextBtn) nextBtn.addEventListener('click', () => container.scrollBy({ left: getStepSize(), behavior: 'smooth' }));
    }
    if (prevBtnSelector) {
        const prevBtn = document.querySelector(prevBtnSelector);
        if (prevBtn) prevBtn.addEventListener('click', () => container.scrollBy({ left: -getStepSize(), behavior: 'smooth' }));
    }

    let autoplayInterval;
    const startAutoplay = () => {
        if (totalOriginals > 1) {
            autoplayInterval = setInterval(() => {
                container.scrollBy({ left: getStepSize(), behavior: 'smooth' });
            }, 5000);
        }
    };
    const stopAutoplay = () => clearInterval(autoplayInterval);

    startAutoplay(); 

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
    container.addEventListener('touchstart', stopAutoplay, { passive: true });
    container.addEventListener('touchend', startAutoplay);

    if (paginationSelector && totalOriginals > 1) {
        const pagContainer = document.querySelector(paginationSelector);
        if (pagContainer) {
            pagContainer.innerHTML = '';
            originalChildren.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.style.cursor = 'pointer';
                dot.style.transition = 'all 0.3s ease';
                dot.style.height = '10px';
                if (i === 0) {
                    dot.style.width = '28px';
                    dot.style.backgroundColor = '#ec7000';
                    dot.style.borderRadius = '8px';
                } else {
                    dot.style.width = '10px';
                    dot.style.backgroundColor = '#d1d1d1';
                    dot.style.borderRadius = '50%';
                }
                dot.addEventListener('click', () => {
                    container.scrollTo({ left: (totalOriginals + i) * getStepSize(), behavior: 'smooth' });
                });
                pagContainer.appendChild(dot);
            });

            container.addEventListener('scroll', () => {
                const stepSize = getStepSize();
                if (!stepSize) return;
                
                let rawIndex = Math.round(container.scrollLeft / stepSize);
                let realIndex = (rawIndex - totalOriginals) % totalOriginals;
                if (realIndex < 0) realIndex += totalOriginals;

                const dots = pagContainer.querySelectorAll('span');
                dots.forEach((dot, i) => {
                    if (i === realIndex) {
                        dot.style.width = '28px';
                        dot.style.backgroundColor = '#ec7000';
                        dot.style.borderRadius = '8px';
                    } else {
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#d1d1d1';
                        dot.style.borderRadius = '50%';
                    }
                });
            });
        }
    }
}

window.addEventListener('load', () => {
    initSwiperLite('#hero-slider-track', '#next-slide', '#prev-slide');
    initSwiperLite('#business-slider', null, null, '#business-pagination');
    initSwiperLite('#finance-slider', null, null, '#finance-pagination');
    initSwiperLite('#cards-swiper-container', null, null, '#cards-pagination');
});


// const heroSwiper = new Swiper('.hero-swiper', {
//   loop: true,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   },
//   grabCursor: true,
//   speed: 800,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   navigation: { nextEl: '.hero-swiper .swiper-button-next', prevEl: '.hero-swiper .swiper-button-prev' },
//   pagination: { el: '.hero-swiper .swiper-pagination', clickable: true },
// });

// const cardsSwiper = new Swiper('.cards-swiper', {
//   slidesPerView: 1.15,
//   spaceBetween: 16,
//   grabCursor: true,
//   pagination: {
//     el: '.cards-swiper .swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2.2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3.2,
//       spaceBetween: 20,
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 25,
//     },
//     1200: {
//       slidesPerView: 5,
//       spaceBetween: 30,
//     }
//   }
// });

// const businessSwiper = new Swiper('.business-swiper', {
//   slidesPerView: 1.15,
//   spaceBetween: 16,
//   grabCursor: true,
//   pagination: {
//     el: '.business-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2.2,
//       spaceBetween: 20,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     }
//   }
// });

// const financeSwiper = new Swiper('.finance-swiper', {
//   slidesPerView: 1.15,
//   spaceBetween: 16,
//   grabCursor: true,
//   pagination: {
//     el: '.finance-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2.2,
//       spaceBetween: 20,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     }
//   }
// });