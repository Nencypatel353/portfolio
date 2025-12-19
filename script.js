const navLinks = document.querySelectorAll('.sidebar nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('data-target');

    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
