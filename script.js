let screenValue = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let auxOperator = 'null'
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
        auxOperator = firstOperator;
        firstNumber = secondNumber;
        secondNumber = null;
        screenValue = '0';
    }
    else if (firstOperator != null) {
        auxOperator = 'null';
        if (secondNumber == null) {
            firstOperator = operator;
            screenValue == '0';
        }
        else if (secondNumber != null) {
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
    if (auxOperator != null) {
        if (secondNumber == null){
            firstOperator = 'null';
            firstNumber = operate(firstNumber, firstNumber, auxOperator);
            screenValue = firstNumber;
            updateScreen();
            screenValue = '0';
        }
    }
    if (firstOperator != null && secondNumber != null){
        firstNumber = operate(firstNumber, secondNumber, firstOperator);
        screenValue = firstNumber;
        updateScreen();
        screenValue = '0';
        result = null;
        secondNumber = null;
        firstOperator = null;
    }
}

function porcentage() {
    if (secondNumber != null){
        secondNumber = operate(secondNumber, '100', '.');
        if (firstNumber != null){
            result = operate(firstNumber, secondNumber, firstOperator);
            console.log(result);
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
        }else {
            screenValue = secondNumber;
            updateScreen();
        }
    }   
}

function turnFloat() {
    if (firstNumber == null){
    screenValue += '.';
    secondNumber = screenValue;
    updateScreen();
    } 
}

function turnNegative() {
    if (firstNumber != null && secondNumber == null ){ 
        secondNumber = firstNumber;
        firstNumber = null;
    } if (secondNumber != null) {
        secondNumber = operate(secondNumber, -1, 'x')
        screenValue = secondNumber;
        updateScreen();
    }
}