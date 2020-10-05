const DEFAULT_LIGHT_SOURCE = "images/gray.png";
const GREEN_LIGHT_SOURCE = "images/green.png";
const ORANGE_LIGHT_SOURCE = "images/orange.png";
const RED_LIGHT_SOURCE = "images/red.png";

const DEFAULT_DESCRIPTION = "Traffic light";
const GREEN_DESCRIPTION = "Ready";
const ORANGE_DESCRIPTION = "Steady";
const RED_DESCRIPTION = "Go";

let greenSignal = document.getElementById("green");
let orangeSignal = document.getElementById("orange");
let redSignal = document.getElementById("red");
let description = document.getElementById("description")

function resetTrafficLight() {
    greenSignal.src = DEFAULT_LIGHT_SOURCE;
    orangeSignal.src = DEFAULT_LIGHT_SOURCE;
    redSignal.src = DEFAULT_LIGHT_SOURCE;
    description.textContent = DEFAULT_DESCRIPTION;
    description.style.color = "black";
}

// Change traffic light signals
function trafficLight(num) {
    resetTrafficLight();

    if (num === 1) {
        greenSignal.src = GREEN_LIGHT_SOURCE;
        description.textContent = GREEN_DESCRIPTION;
        description.style.color = "green";
    } else if (num === 2) {
        orangeSignal.src = ORANGE_LIGHT_SOURCE;
        description.textContent = ORANGE_DESCRIPTION;
        description.style.color = "orange";
    } else {
        redSignal.src = RED_LIGHT_SOURCE;
        description.textContent = RED_DESCRIPTION;
        description.style.color = "red";
    }
}
