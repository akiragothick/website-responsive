

document.querySelectorAll('.open-modal-full')[0].addEventListener('click', (e) => {
    let target = e.target.getAttribute('modal-target')
    document.querySelectorAll(target)[0].classList.add('active')

    document.querySelectorAll(target)[0].querySelectorAll('.popup__close')[0].addEventListener('click', () => {
        document.querySelectorAll(target)[0].classList.remove('active')
    })
})

