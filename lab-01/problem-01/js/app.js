

function fizzBuzz(num) {
    if (typeof num !== "number") {
        alert("Please enter a numeric value.")
        return;
    }

    let description = "";

    if (num % 3 === 0) {
        description += "fizz ";
    }
    if (num % 5 === 0) {
        description += "buzz ";
    }
    if (description === "") {
        description = "none";
    }

    return description;
}
