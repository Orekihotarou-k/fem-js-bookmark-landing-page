// funtion to toggle menu
const toggleMenuButton = document.querySelector(".nav-toggle--btn")
const primaryNav = document.querySelector(".primary-nav")

function toggleMenu() {
    primaryNav.classList.toggle("active")
    toggleMenuButton.classList.toggle("btn-active")
}

toggleMenuButton.addEventListener("click", toggleMenu)
