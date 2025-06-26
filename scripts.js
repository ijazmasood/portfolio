AOS.init({ duration: 900, once: true });

const cursor = document.querySelector('.cursor-circle');
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  cursor.style.background = 'rgba(255,255,255,0.4)';
});
document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  cursor.style.background = 'rgba(255,255,255,0.2)';
});

// Smooth scroll
$('.sidebar a.nav-link').on('click', function (e) {
  e.preventDefault();
  const target = $($(this).attr('href'));
  $('html, body').animate({ scrollTop: target.offset().top - 60 }, 800);
});
