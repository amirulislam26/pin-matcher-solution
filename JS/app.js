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
//...........................//

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successNotify = document.getElementById('notify-success');
    const failNotify = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }
    else {
        successNotify.style.display = 'none';
        failNotify.style.display = 'block';
    }

}