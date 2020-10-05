function makeStylish(tag, obj) {
    let elements = document.getElementsByTagName(tag);

    for (let element of elements) {
        for (let key in obj) {
            element.style[key] = obj[key];
        }
    }
}
