export class RaadioBlockController {
    model;

    constructor(model) {
        this.model = model
    }

    selectRadioBtn = (index) => {
        this.model.btns.forEach(btn => {
            if (btn.value === index) {
                btn.checked = 'checked'
            } else {
                btn.checked = ''
            }
        })
        
        this.model.notify()
    }
}