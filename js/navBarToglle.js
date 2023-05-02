/* Add JavaScript to make the menu header component interactive */

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', function() {
  navbarNav.classList.toggle('show');
});
