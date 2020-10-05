function countMe(tag, obj) {
    let elements = document.getElementsByTagName(tag);
    let classCount = 0;
    let id = false;
    let nameCount = 0;

    for (let element of elements) {
        if (element.hasAttribute("class") &&
            element.getAttribute("class").includes(obj["className"])) {
            classCount++;
        }

        if (element.hasAttribute("id") &&
            element.getAttribute("id").includes(obj["id"])) {
            id = true;
        }

        if (element.hasAttribute("name") &&
            element.getAttribute("name").includes(obj["name"])) {
            nameCount++;
        }
    }

    return {
        all: elements.length,
        className: classCount,
        id: id,
        name: nameCount
    };
}
