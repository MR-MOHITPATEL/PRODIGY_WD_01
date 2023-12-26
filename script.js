const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#fff'; // Change background color on scroll
    navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; // Add box shadow
  } else {
    navbar.style.backgroundColor = 'transparent'; // Revert back to transparent background
    navbar.style.boxShadow = 'none'; // Remove box shadow
  }
});
