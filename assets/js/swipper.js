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

const swiperWrapper = document.getElementById('swiper-container');

swiperWrapper.innerHTML = bannerData.map(slide => `
  <div class="swiper-slide">
    <div class="position-relative w-100 h-100">
      <img src="${slide.img}" alt="${slide.alt}" class="hero-img">
      <div class="position-absolute top-0 start-0 w-100 h-100 z-1" 
           style="background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%); pointer-events: none;">
      </div>
      <div class="position-absolute top-50 start-0 translate-middle-y text-white z-3" style="padding-left: 10%;">
        <span class="d-block" style="font-size: 4.5rem; font-weight: 900; line-height: 1.1; letter-spacing: -1px;">${slide.title}</span>
        <p class="mt-3 mb-4" style="font-size: 1.15rem;">${slide.text}</p>
        <div class="d-flex gap-3">
          <a href="${slide.link}" class="btn fw-bold text-white px-4 py-2" 
             style="background-color: #001C4B; border-radius: 6px; font-size: 0.95rem;">
             Hazte cliente
          </a>
        </div>
      </div>
    </div>
  </div>
`).join('');

const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  grabCursor: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: { nextEl: '.hero-swiper .swiper-button-next', prevEl: '.hero-swiper .swiper-button-prev' },
  pagination: { el: '.hero-swiper .swiper-pagination', clickable: true },
});

const cardsSwiper = new Swiper('.cards-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: '.cards-swiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  }
});

const businessSwiper = new Swiper('.business-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: '.business-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

const financeSwiper = new Swiper('.finance-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: '.finance-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});