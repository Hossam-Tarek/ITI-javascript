

function analysis(num) {
    if (typeof num !== "number" || num <= 0) {
        alert("Please enter a numeric value greater than zero.");
        return;
    }

    let dollars = Math.floor(num);

    let change = num - Math.floor(num);
    let quarters = Math.floor(change / 0.25);
    change -= quarters * 0.25;
    let dimes = Math.floor(change / 0.1);
    change -= dimes * 0.1;
    let nickels = Math.floor(change / 0.05);
    change -= nickels * 0.05;
    let cents = change * 100;

    console.log(`${num} is ${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${cents} cents.`);
}
