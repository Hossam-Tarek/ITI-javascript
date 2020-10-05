
function findLetter(sentence, letter) {
    if (sentence.length <= 0) {
        alert("Please enter a sentence.");
        return;
    }
    if (letter.length <= 0) {
        alert("Please enter a letter.");
        return;
    }

    let index = 0;
    let places = [];

    index = sentence.indexOf(letter, index)
    while (index !== -1) {
        places.push(index)
        index = sentence.indexOf(letter, ++index)
    }

    return places;
}
