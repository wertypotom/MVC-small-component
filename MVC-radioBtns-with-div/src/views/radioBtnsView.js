import Observer from "../utils/observer.js";

export class RadioBtnsView extends Observer {
    controller

    constructor(controller) {
        super()
        this.controller = controller
        this.controller.model.attach(this)
        this.render(this.controller.model.btns)
    }

    render = (btns) => {
        this.createRadioBtns(btns)
    }

    createRadioBtns = (btns) => {
        const radioBtnsContainer = document.createElement('div')
        radioBtnsContainer.id = 'radioBtnsContainer'


        btns.forEach(btn => {
            const radioBtn = document.createElement('input')
            radioBtn.type = 'radio'
            radioBtn.name = 'valueForContainer'
            radioBtn.value = btn.value
            radioBtn.checked = btn.checked
  

            radioBtnsContainer.append(radioBtn)
        })

        document.querySelector('#root').prepend(radioBtnsContainer)
    }

    update = () => {
        document.querySelector('#radioBtnsContainer').remove()

        this.createRadioBtns(this.controller.model.btns)
    }
}
