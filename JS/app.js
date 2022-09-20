function getPin() {
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        //console.log("ggggggggggg", pin);
        return getPin();
    }
}


function GeneratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumder = previousNumber + number;

        calcInput.value = newNumder
    }
});