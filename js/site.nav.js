(() => {

    const init = {
        start: () => {
            init.methods.init()
        },
        options: {
            positionPrincipal: window.pageYOffset
        },
        methods: {
            init: () => {
                init.methods.changeScroll()
            },
            changeScroll: () => {
                window.addEventListener('scroll', () => {
                    const currentPosition = window.pageYOffset
                    if (init.options.positionPrincipal >= currentPosition) {
                        document.getElementsByTagName('nav')[0].style.top = '0px'
                    } else {
                        document.getElementsByTagName('nav')[0].style.top = '-100px'
                    }
                    init.options.positionPrincipal = currentPosition;
                })
            }
        }
    }

    init.start()

})()

