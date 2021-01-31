function generatePin() {
    const random = Math.random() * 10000;
    const pin = (random + "").split(".")[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return generatePin();
    }
}


function generateButton() {
    const pinInput = document.getElementById("generatedPin");
    pinInput.value = generatePin();
}


const buttonWorks = document.getElementById("digits");
buttonWorks.addEventListener("click", function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typed = document.getElementById("typedPin");
            typed.value = " ";
        }
    } else {
        const typed = document.getElementById("typedPin");
        typed.value = typed.value + digit;
    }
})


function matching(correctStatus, incorrectStatus) {
    const correct = document.getElementById("correctPin");
    correct.style.display = correctStatus;
    
    const incorrect = document.getElementById("incorrectPin");
    incorrect.style.display = incorrectStatus;
}


function verifyPin() {
    const pin = document.getElementById("generatedPin").value;
    const typedPin = document.getElementById("typedPin").value;
    if (pin === typedPin) {
        matching("block", "none");
    } else {
        matching('none', 'block')
    }
}