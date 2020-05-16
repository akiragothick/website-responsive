document.querySelectorAll('.dark-mode')[0].addEventListener('click', e => {
    document.body.classList.toggle('dark')
    document.querySelectorAll('.dark-mode')[0].classList.toggle('active')
})