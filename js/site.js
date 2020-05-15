
// NAV
let positionPrincipal = window.pageYOffset

window.addEventListener('scroll', () => {
    let currentPosition = window.pageYOffset
    if (positionPrincipal >= currentPosition) {
        document.getElementsByTagName('nav')[0].style.top = '0px'
    } else {
        document.getElementsByTagName('nav')[0].style.top = '-100px'
    }
    positionPrincipal = currentPosition;
})

// MENU

let links = document.querySelectorAll('.links')[0]
let links_active = true

document.querySelectorAll('.icon-nav-mobile')[0].addEventListener('click', () => {
    if (links_active){
        document.querySelectorAll('.icon-nav-mobile')[0].style.color = '#fff'
        links_active = false
    }else {
        document.querySelectorAll('.icon-nav-mobile')[0].style.color = '#000'
        links_active = true
    }
    links.classList.toggle('links-complete')
})