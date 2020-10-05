export default class Contact {
    static #count = 0;
    #id;
    #name;
    #email;
    #phone;

    constructor(name, email, phone) {
        this.#id = Contact.#count++;
        this.#name = name;
        this.#email = email;
        this.#phone = phone;
    }


    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get phone() {
        return this.#phone;
    }

    set phone(phone) {
        this.#phone = phone;
    }
}

Object.defineProperty(Contact, "id", {
    writable: false,
    configurable: false,
    enumerable: false
});
