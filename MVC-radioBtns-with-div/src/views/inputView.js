import Observer from "../utils/observer.js";

export class InputView extends Observer {
    controller

    constructor(controller) {
        super()
        this.controller = controller
        this.controller.model.attach(this)
        this.render()
    }

    render = () => {
        this.createInputField()
    }

    createInputField = () => {
        const input = document.createElement('input')
        input.type = 'text'

        input.addEventListener('input', (e) => {
            const value = +e.target.value 
            this.controller.selectRadioBtn(value)
        })

        document.querySelector('#root').append(input)
    }

    update = () => {
        console.log('hhfhfh')
    }
}
