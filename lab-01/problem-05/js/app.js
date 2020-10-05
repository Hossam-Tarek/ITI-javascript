
function printTriangle(num) {
    let row = "";
    for (let i = 0; i < num; i++) {
        row = "";
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
