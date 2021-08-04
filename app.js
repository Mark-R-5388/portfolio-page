// NavBar Hamburger Modal
const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links-responsive')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('visible')
})
