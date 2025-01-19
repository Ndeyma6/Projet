// Révéler les sections avec animation
const sections = document.querySelectorAll('section');
const revealSection = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', revealSection);

// Ouvrir une image en plein écran
const openImage = (src) => {
  const overlay = document.getElementById('imageOverlay');
  const overlayImage = document.getElementById('overlayImage');
  overlayImage.src = src;
  overlay.classList.add('active');
};

// Fermer l'image plein écran
const closeImage = () => {
  const overlay = document.getElementById('imageOverlay');
  overlay.classList.remove('active');
};

// Bouton retour en haut
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});