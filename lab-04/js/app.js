import Contact from "./Contact.js";
import ContactList from "./ContactList.js";

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
