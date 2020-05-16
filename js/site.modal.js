var Modal = {}
Modal = (() => {

    const init = {
        start: (elements, target) => {

            let hasError = false
            elements = elements || init.options.classOpenDefault
            elements = document.querySelectorAll(elements)

            if (elements.length == 0) {
                console.error('Modal elements', undefined)
                hasError = true
            }

            if (target == undefined) {
                elements.forEach(element => {
                    const tg = element.hasAttribute('modal-target') ? element.getAttribute('modal-target') : init.options.classModalDefault
                    if (document.querySelectorAll(tg).length > 1) {
                        console.error(`Modal multiple target ${tg}`)
                        hasError = true
                    } else if (document.querySelectorAll(tg).length == 0) {
                        console.error(`Modal no target ${tg}`)
                        hasError = true
                    }
                })
            }
            if (!hasError)
                init.methods.init(elements, target)
        },
        options: {
            classOpenDefault: '.open-modal',
            classModalDefault: '.modal',
            classCloseDefault: '.modal-close'
        },
        methods: {
            init: (e, t) => {
                e.forEach(element => {
                    let tg = t || element.hasAttribute('modal-target') ? element.getAttribute('modal-target') : init.options.classModalDefault
                    tg = document.querySelectorAll(tg)[0]
                    init.methods.bindClick(element, tg)
                })
            },
            bindClick: (e, t) => {
                e.addEventListener('click', () => {
                    t.style.display = 'block'
                })

                t.querySelectorAll(init.options.classCloseDefault).forEach(close => {
                    close.addEventListener('click', () => {
                        t.style.display = "none"
                    })
                })

                window.onclick = function (event) {
                    if (event.target == t) {
                        t.style.display = "none";
                    }
                }
            }
        }
    }

    return {
        start: init.start
    }

})()

Modal.start()


