class Contact {
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


class ContactList {
    #contacts = [];
    #name;

    constructor(name) {
        this.#name = name;
    }

    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    // add contact to the contacts list and to the UI
    addContact(contact) {
        this.#contacts.push(contact);
        this.#addRow(contact);
    }

    // create cell for contact row
    static #createCell(text) {
        let cell = document.createElement("td");
        cell.textContent = text;
        return cell;
    }

    // add contact in a new row
    #addRow(contact) {
        let row = document.createElement("tr");

        // create and fill up name cell
        let nameCell = ContactList.#createCell(contact.name);
        row.appendChild(nameCell);

        // create and fill up email cell
        let emailCell = ContactList.#createCell(contact.email);
        row.appendChild(emailCell);

        // crate and fill up phone cell
        let phoneCell = ContactList.#createCell(contact.phone);
        row.appendChild(phoneCell);

        let actionCell = document.createElement("td");

        // create edit icon in action cell
        let editIcon = document.createElement("i");
        editIcon.setAttribute("class", "material-icons button edit");
        editIcon.textContent = "edit";
        actionCell.appendChild(editIcon);

        // edit contact row by clicking on edit icon
        editIcon.addEventListener("click", _ => {
            document.getElementById("name").value = contact.name;
            document.getElementById("email").value = contact.email;
            document.getElementById("phone").value = contact.phone;

            this.removeContact(contact.id);
            row.remove();
        });

        // create delete icon in action cell
        let deleteIcon = document.createElement("i");
        deleteIcon.setAttribute("class", "material-icons button delete");
        deleteIcon.textContent = "delete";
        actionCell.appendChild(deleteIcon);

        // delete contact row by clicking on delete icon
        deleteIcon.addEventListener("click", _ => {
            if (!confirm(`Are you sure you want to delete "${contact.name}"`)) {
                return;
            }
            this.removeContact(contact.id);
            row.remove();
        });

        row.appendChild(actionCell);

        document.getElementById("contact_table_body").appendChild(row);
    }

    // remove contact by id
    removeContact(id) {
        this.#contacts = this.#contacts.filter( (contact) => {
            return contact.id !== id;
        });
    }

    // edit contact by id
    editContact(id, newContact) {
        this.#contacts = this.#contacts.map( (contact) => {
            if (contact.id === id) {
                return newContact;
            }
            return contact;
        });
    }

    // get contact by id
    getContact(id) {
        let contact;
        this.#contacts.forEach( (element) => {
            if (element.id === id) {
                contact = element;
            }
        });
        return contact;
    }

    get contacts() {
        return this.#contacts;
    }
}


let contactList = new ContactList("Friends");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", submit);

function submit(event) {
    let nameError = false;
    let emailError = false;
    let phoneError = false;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "") {
        document.getElementById("name-error").style.display = "inline-block";
        nameError = true;
    } else {
        document.getElementById("name-error").style.display = "none";
        nameError = false;
    }

    if (email === "") {
        document.getElementById("email-error").style.display = "inline-block";
        emailError = true;
    } else {
        document.getElementById("email-error").style.display = "none";
        emailError = false;
    }

    if (phone.length !== 11) {
        document.getElementById("phone-error").style.display = "inline-block";
        phoneError = true;
    } else {
        document.getElementById("phone-error").style.display = "none";
        phoneError = false;
    }

    if (!nameError && !phoneError && ! emailError) {
        contactList.addContact(new Contact(name, email, phone));
    }

    event.preventDefault();
}
