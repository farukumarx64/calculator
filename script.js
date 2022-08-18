function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {    
    console.log(a)
    console.log(b)
    console.log(operator)

    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '÷':
        case '/':
            result = divide(a, b);
            break;
        case '×':
        case '*':
            console.log('papapap')
            result = multiply(a, b);
            break;
    
        default:
            break;
    }
    return result;
}

const buttons = document.querySelectorAll('.buttons button');
const display  = document.querySelector('.display p');
const functions  = document.querySelectorAll('.functions button')

let firstInput = "";
let secondInput = "";
let operator = "";
let values = "";
let deletable = true;

buttons.forEach(button => button.addEventListener('click', function () {
    console.log(button.textContent);

    switch (button.textContent) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            deletable = true;
            if (operator.includes('+') || operator.includes('÷') || operator.includes('-') || operator.includes('×')) {
                secondInput = secondInput.concat(button.textContent);
            } else {
                firstInput = firstInput.concat(button.textContent);
            }
            values = values.concat(button.textContent);
            display.textContent = values;
            console.log(firstInput)
            console.log(secondInput)
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            if (operator.includes('+') || operator.includes('÷') || operator.includes('-') || operator.includes('×')) {
                let calc = operate(parseFloat(firstInput), parseFloat(secondInput), operator);
                operator = button.textContent;

                firstInput = calc.toString();
                secondInput = "";

                values = calc.toString();
                values = values.concat(operator);

                console.log('lalalala');
                display.textContent = values;
                deletable = false;
            } else{    
                operator = button.textContent;
                values = values.concat(operator)
                display.textContent = values;
                console.log('man');
            }
            break;
        case '.':
            if (operator.includes('+') || operator.includes('÷') || operator.includes('-') || operator.includes('×')) {
                secondInput = secondInput.concat(button.textContent);
            } else {
                firstInput = firstInput.concat(button.textContent);
            }
            values = values.concat(button.textContent);
            display.textContent = values;
            break;
        case '=':
            let calc = operate(parseFloat(firstInput), parseFloat(secondInput), operator);
            values = calc.toString();
            display.textContent = values;
            deletable = false;
            break;
        default:
            break;
            
    }

    

}));


document.addEventListener('keyup', function (e) {
    console.log(e.key)
    switch (e.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            deletable = true;
        if (operator.includes('+') || operator.includes('/') || operator.includes('-') || operator.includes('*') || operator.includes('÷') || operator.includes('×')) {
                
                secondInput = secondInput.concat(e.key);
            } else {
                firstInput = firstInput.concat(e.key);
            }
            values = values.concat(e.key);
            display.textContent = values;
            
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (operator.includes('+') || operator.includes('/') || operator.includes('-') || operator.includes('*') || operator.includes('÷') || operator.includes('×')) {
                let calc = operate(parseFloat(firstInput), parseFloat(secondInput), operator);
                operator = e.key;

                firstInput = calc.toString();
                secondInput = "";

                values = calc.toString();
                values = values.concat(operator);

                display.textContent = values;
                deletable = false;
            } else{    
                operator = e.key.toString();
                values = values.concat(operator)
                display.textContent = values;
                console.log('man');
            }
            break;
        case '.':
            if (operator.includes('+') || operator.includes('/') || operator.includes('-') || operator.includes('*') || operator.includes('÷') || operator.includes('×')) {
                secondInput = secondInput.concat(e.key);
            } else {
                firstInput = firstInput.concat(e.key);
            }
            values = values.concat(e.key);
            display.textContent = values;
            break;
        case 'e':
            console.log(firstInput)
            console.log(secondInput)
            console.log(operator)

            console.log(e.key);
            let calc = operate(parseFloat(firstInput), parseFloat(secondInput), operator);
            values = calc.toString();
            display.textContent = values;
            deletable = false;
            break;
        case 'Backspace':
            if (deletable){
                if (operator.includes('+') || operator.includes('÷') || operator.includes('-') || operator.includes('×') || operator.includes('/') || operator.includes('*')) {
                secondInput = secondInput.slice(0, -1);
                values = firstInput.concat(operator).concat(secondInput);
                display.textContent = values;
                } else {
                    firstInput = firstInput.slice(0, -1);
                    values = firstInput;
                    display.textContent = values;
                }
            }
            break;
        default:
            break;
            
    }

    
})

functions.forEach(func => func.addEventListener('click', function () {
    switch (func.textContent) {
        case 'CLEAR':
            firstInput = "";
            secondInput = "";
            operator = "";
            values = "";
            deletable = true;
            display.textContent = '_';
            break;
        case 'DELETE':
            if (deletable){
                if (operator.includes('+') || operator.includes('÷') || operator.includes('-') || operator.includes('×')) {
                secondInput = secondInput.slice(0, -1);
                values = firstInput.concat(operator).concat(secondInput);
                display.textContent = values;
                } else {
                    firstInput = firstInput.slice(0, -1);
                    values = firstInput;
                    display.textContent = values;
                }
            }
            break;
        default:
            break;
    }
}))