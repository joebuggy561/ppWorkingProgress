const navigationtoggle = document.getElementsByClassName('navigation_toggle')[0]
const navlist = document.getElementsByClassName('nav__list')[0]


navigationtoggle.addEventListener('click', () => {
    navlist.classList.toggle('active')
})