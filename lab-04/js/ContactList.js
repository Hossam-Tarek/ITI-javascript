import Contact from "./Contact.js";

export default class ContactList {
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
