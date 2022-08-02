export default class Subject {
    #obeservers;

    constructor() {
        this.#obeservers = new Set()
    }

    attach = (observer) => {
        this.#obeservers.add(observer)
    }

    notify = () => {
        this.#obeservers.forEach(observer => {
            observer.update()
        })         
    }
}

