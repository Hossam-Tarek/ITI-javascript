
function randomNames(names) {
    if (names.length < 2) {
        alert("Please enter two names or more.");
        return;
    }

    let firstIndex = Math.floor(Math.random() * names.length);
    let secondIndex = Math.floor(Math.random() * names.length);

    while (firstIndex === secondIndex) {
        secondIndex = Math.floor(Math.random() * names.length);
    }

    return [names[firstIndex], names[secondIndex]];
}
