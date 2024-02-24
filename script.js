let screenValue = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const screen = document.querySelector('.screen');
screen.textContent = screenValue;

function updateScreen(){
   screen.textContent = screenValue;
   if (screenValue.length > 9) screen.textContent = screenValue.substring(0, 9); 
}

function operate(x, y, operator){
    let first = Number(x);
    let second = Number(y);
    if(operator == '+') return `${first + second}`;
    else if(operator == 'x') return `${first * second}`;
    else if (operator == '-') return `${first - second}`;
    else if(operator == '.'){
        if (y == '0') return 'Erro';
        else return `${first / second}`;
    }
}

function clearAll() {
    screenValue = '0';
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    updateScreen();
}

function addNumber(number){
    if (screenValue == 'Erro') screenValue = '0';
    if (screenValue == '0')   screenValue = number;
    else screenValue += number;
    secondNumber = screenValue;
    updateScreen();
}

function callOperator(operator) {
    if (firstOperator == null) {
        firstOperator = operator;
        firstNumber = secondNumber;
        secondNumber = null;
        screenValue = '0';
    }
    else if (firstOperator != null) {
        if (secondNumber == null) {
            firstOperator = operator;
            screenValue == '0';
        }
        else if (secondNumber != null){
            secondOperator = operator;
            result = operate(firstNumber, secondNumber, firstOperator);
            if (result == 'Erro'){
                screenValue = 'Erro';
                updateScreen();
                screenValue = '0';
                firstNumber = null;
                secondNumber = null;
                firstOperator = null;
                secondOperator = null;
                result = null;
            }
            else {
                firstNumber = result;
                screenValue = result;
                updateScreen();
                screenValue = '0';
                result = null;
                secondNumber = null;
                firstOperator = secondOperator;
                secondOperator = null;
            }

        }
    }
}

function equals() {

}

function porcentage () {

}

function turnFloat() {

}

function turnNegative() {
    
}