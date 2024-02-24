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
    if(operator == '+') return 'x + y';
    else if(operator == '*') return 'x * y';
    else if (operator == '-') return 'x-y';
    else if(operator == '.'){
        if (y == '0') return 'Erro';
        else return 'x/y';
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
    updateScreen();
}

function callOperator(operator) {
    if (firstOperator == null) {
        firstOperator = operator;
        firstNumber = screenValue;
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
                screenValue = '0';
                firstNumber = null;
                secondNumber = null;
                firstOperator = null;
                secondOperator = null;
                result = null;
            }
            else {
                
            }

        }
    }
}
