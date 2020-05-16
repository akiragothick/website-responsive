(() => {
    
    const init = {
        start: () => {
            init.methods.init()
        },
        options: {
            slideIndex: 1,
            timeSlides: 6,
            intervalSlides: null
        },
        methods: {
            init: () => {
                init.options.intervalSlides = setInterval(init.methods.showSlides, 500)
                init.methods.changeSlides()
                init.methods.changeSlidesCurrent()
            },
            changeSlides: () => {
                const buttons = [...document.querySelectorAll('.prev,.next')]
                buttons.forEach(e => {
                    e.addEventListener('click', () => {
                        init.methods.showSlides(init.options.slideIndex += parseInt(e.dataset.number))
                    })
                })
            },
            changeSlidesCurrent: () => {
                const buttons = [...document.querySelectorAll('.pagination-item')]
                buttons.forEach(e => {
                    e.addEventListener('click', () => {
                        init.methods.showSlides(init.options.slideIndex = parseInt(e.dataset.number))
                    })
                })
            },
            showSlides: n => {
                n = n == undefined ? init.options.slideIndex : n

                clearInterval(init.options.intervalSlides)

                var slides = [...document.getElementsByClassName("item-slide")]
                var dots = [...document.getElementsByClassName("pagination-item")]

                if (n > slides.length) { init.options.slideIndex = 1 }

                if (n < 1) { init.options.slideIndex = slides.length }

                slides.forEach(e => { e.style.display = "none" })
                dots.forEach(e => { e.classList.remove('active') })

                slides[init.options.slideIndex - 1].style.display = "block"
                dots[init.options.slideIndex - 1].classList.add('active')

                init.options.intervalSlides = setInterval(() => {
                    init.options.slideIndex++
                    init.methods.showSlides()
                }, init.options.timeSlides * 1000)
            }
        }
    }

    init.start()

})()

