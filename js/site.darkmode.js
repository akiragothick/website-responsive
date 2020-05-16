(() => {

    const init = {
        start: () => {
            init.methods.init()
        },
        options: {
            buttonClass : 'dark-mode',
            iconClass: 'fas fa-cloud-sun'
        },
        methods: {
            init: () => {
                init.methods.createButton()
                init.methods.activeButton()
            },
            createButton: () => {
                let button = document.createElement('a')
                button.classList.add(init.options.buttonClass)
                let icon = document.createElement('i')
                icon.className = init.options.iconClass
                button.append(icon)
                document.body.append(button)            
            },
            activeButton: () => {
                document.querySelectorAll('.dark-mode')[0].addEventListener('click', e => {
                    document.body.classList.toggle('dark')
                    document.querySelectorAll('.dark-mode')[0].classList.toggle('active')
                })
            }
        }
    }

    init.start()

})()
