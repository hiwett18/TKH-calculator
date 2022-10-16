

// create functions for each operations; add,subtract, multiply and divide 
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

// create a function named operate that takes in 3 parameters: 2 numbers and the operation to be performed 

function operate(num1, num2, operator){
    if(operator.toLowerCase() == 'add'){
        return add(num1, num2)
    }
    else if(operator.toLowerCase() == 'subtract'){
        return subtract(num1, num2)
    }

    else if(operator.toLowerCase() == 'multiply'){
        return multiply(num1, num2)
    }

    else if(operator.toLowerCase() == 'divide'){
        return divide(num1, num2)
    }
    else{
        return 'error operator not recognized'
    }
}

// variables to hold values from form inputs
let num1 = 0
let num2 = 0
let operatorButtonVal = ''

// fuction that runs when the equal button is clicked using onclick

function equalsClicked(){
    // saving the number value of the first input to num1 
    // value returns a string
    num1 = document.querySelector('#num1').value
    // parseInt turns a string into a number
    num1 = parseInt(num1)

    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)

    // next steps
    // create a variable num2
    num2 = document.querySelector('#num2').value
    // parseInt turns a string into a number
    num2 = parseInt(num2)

    // check values console.log
    console.log(num1, operatorButtonVal, num2)

    // connect math functions
    if (operatorButtonVal === 'add'){
        result = add(num1, num2)
    }else if (operatorButtonVal === 'subtract'){
        result = subtract(num1, num2)
    }
    else if (operatorButtonVal === 'multiply'){
        result = multiply(num1, num2)
    }
    else if (operatorButtonVal === 'divide'){
        result = divide(num1, num2)
    }
    // display result on the page using DOM methods
    console.log(document.querySelector('#result-num').innerHTML = result) 

}



