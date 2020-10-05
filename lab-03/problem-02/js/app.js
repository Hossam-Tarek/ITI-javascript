let form = document.getElementById("registration");
let message = document.createElement("p");

function submit(event) {
    let submit = true;
    message.innerHTML = "";
    if (document.getElementById("element_1").value === "") {
        submit = false;
        message.innerHTML += "User name is required";
    }

    if (document.getElementById("element_2").value === "") {
        submit = false;
        message.innerHTML += "<br>Email is required";
    }

    let password = document.getElementById("element_3").value;
    if (password === "" || password.length < 8) {
        submit = false;
        message.innerHTML += "<br>Password must be at least 8 digits";
    }

    if (!document.getElementById("element_4_1").checked &&
        !document.getElementById("element_4_2").checked) {
        submit = false;
        message.innerHTML += "<br>Choose your gender";
    }

    let checkBoxCounter = 0;
    if (document.getElementById("element_5_1").checked) {
        checkBoxCounter++;
    }
    if (document.getElementById("element_5_2").checked) {
        checkBoxCounter++;
    }
    if (document.getElementById("element_5_3").checked) {
        checkBoxCounter++;
    }
    if (document.getElementById("element_5_4").checked) {
        checkBoxCounter++;
    }
    if (document.getElementById("element_5_5").checked) {
        checkBoxCounter++;
    }
    if (checkBoxCounter < 2) {
        submit = false;
        message.innerHTML += "<br>Choose at least Two sport";
    }

    if (document.getElementById("element_6").value === "") {
        submit = false;
        message.innerHTML += "<br>Choose your country";
    }

    if (!submit) {
        event.preventDefault();
        form.insertAdjacentElement("beforeend", message);
    }
}

form.addEventListener("submit", submit);
