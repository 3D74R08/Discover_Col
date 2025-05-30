// Inicializar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }
});

// Cambiar fondo de navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Botón scroll to top
document.getElementById('scrollToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Validación y envío de formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const formStatus = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-form');
  if (!name || !email || !subject || !message) {
    formStatus.innerHTML = '<div class="alert alert-danger">Por favor completa todos los campos.</div>';
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.innerHTML = '<div class="alert alert-danger">Por favor ingresa un correo electrónico válido.</div>';
    return;
  }
  submitButton.disabled = true;
  submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
  formStatus.innerHTML = '';
  setTimeout(function() {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Enviar Mensaje';
    formStatus.innerHTML = '<div class="alert alert-success">¡Mensaje enviado con éxito! Te contactaremos pronto.</div>';
    document.getElementById('contact-form').reset();
  }, 2000);
});

// Cambio de idioma (prototipo)

