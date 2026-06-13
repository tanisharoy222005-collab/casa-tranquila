// ======================================
// CASA TRANQUILA
// MAIN JS
// ======================================

// Smooth scroll for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(
      anchor.getAttribute('href')
    );

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 100) {
    navbar.style.background =
      'rgba(255,255,255,0.95)';
    navbar.style.boxShadow =
      '0 5px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.background =
      'rgba(255,255,255,0.05)';
    navbar.style.boxShadow = 'none';
  }

});

// Reveal animation

const reveals =
  document.querySelectorAll(
    'section, .room-card, .gallery-item, .experience-card'
  );

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    });

  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
