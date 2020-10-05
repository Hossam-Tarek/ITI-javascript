let leftButton = document.getElementById("left");
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let rightButton = document.getElementById("right");
let image = document.getElementById("image");
let currImageIndex = 0;
let timerId = 0;

const IMAGES_SOURCE = ["images/gray.png", "images/green.png", "images/orange.png",
    "images/lemon-juice.png", "images/orange-juice.png"];

leftButton.addEventListener("click", () => {
    image.src = IMAGES_SOURCE[0];
    currImageIndex = 0;
});

rightButton.addEventListener("click", () => {
    image.src = IMAGES_SOURCE[IMAGES_SOURCE.length - 1];
    currImageIndex = IMAGES_SOURCE.length - 1;
});

// Change image source (helper function used in play button).
function nextImage() {
    if (currImageIndex >= IMAGES_SOURCE.length - 1) {
        currImageIndex = -1;
    }
    image.src = IMAGES_SOURCE[++currImageIndex];
}

playButton.addEventListener("click", () => {
    if (timerId != 0) {
        clearInterval(timerId);
        timerId = 0;
        return;
    }
    timerId = setInterval(nextImage, 1000);
});

stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    console.log(timerId);
});