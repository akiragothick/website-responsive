(() => {

    const init = {
        start: () => {
            init.methods.init()
        },
        options: {
            links_active: true
        },
        methods: {
            init: () => {
                init.methods.openMenu()
            },
            openMenu: () => {
                document.querySelectorAll('.icon-nav-mobile i')[0].addEventListener('click', () => {
                    if (init.options.links_active){
                        document.querySelectorAll('.icon-nav-mobile i')[0].style.color = '#fff'
                        init.options.links_active = false
                    }else {
                        document.querySelectorAll('.icon-nav-mobile i')[0].style.color = '#000'
                        init.options.links_active = true
                    }
                    document.querySelectorAll('.container-menu')[0].classList.toggle('mobile')
                })                
            }
        }
    }

    init.start()

})()

