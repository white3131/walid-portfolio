// MARQUEE CLONE FOR INFINITE SCROLL
const marquee = document.getElementById('marquee');
if (marquee) {
  const clone = marquee.innerHTML;
  marquee.innerHTML += clone + clone; // Triplicate for smooth infinite loop
}

// PARALLAX EFFECT FOR HERO IMAGE
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    // Move the image slightly slower than the scroll speed
    heroImg.style.transform = `translateY(${scrolled * 0.4}px)`;
  });
}
