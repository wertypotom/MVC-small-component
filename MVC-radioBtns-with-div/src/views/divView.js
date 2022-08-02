import Observer from "../utils/observer.js";

export class DivView extends Observer{
    controller;

    constructor(controller) {
        super()
        this.controller = controller
        this.controller.model.attach(this)
        this.render()
    }

    render = () => {
        const rootContainer = document.querySelector('#root')
        const div = document.createElement('div')

        div.className = 'someContainer'
        div.textContent = 'Hello I am some container'

        rootContainer.append(div)
    }

    update = () => {
        console.log('I am from Div')
    }
}