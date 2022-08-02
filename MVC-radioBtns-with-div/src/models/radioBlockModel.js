import Subject from "../utils/subject.js";

export class RadioBlockModel extends Subject {
    btns = [
        {value: 1, checked: ''},
        {value: 2, checked: ''},
        {value: 3, checked: ''},
        {value: 4, checked: ''},
    ]

    constructor() {
        super()
    }
}