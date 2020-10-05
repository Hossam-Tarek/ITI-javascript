
function whoAmI() {
    if (confirm("Do you fly?")) {
        if (confirm("Are you wild?")) {
            console.log("You are Eagle");
        } else {
            console.log("You are Parrot");
        }
    } else {
        if (confirm("Do you live under sea?")) {
            if (confirm("Are your wild?")) {
                console.log("You are Shark");
            } else {
                console.log("You are Dolphin");
            }
        } else {
            if (confirm("Are your wild?")) {
                console.log("You are Lion");
            } else {
                console.log("You are Cat");
            }
        }
    }
}