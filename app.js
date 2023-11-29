const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btnEl = document.getElementById('plus')
const btn2El = document.getElementById('minus')
const btn3El = document.getElementById('umnoj')
const btn4El = document.getElementById('delit')
const sumEl = document.getElementById('sum')
const resultEl = document.getElementById('result')
let action 

function printResult(result){
    if(result > 0){
        resultEl.style.color = 'green'
    } else {
        resultEl.style.color = 'red'
    }

    resultEl.textContent = result
}

btnEl.onclick = function(){
    action = '+'
}

btn2El.onclick = function(){
    action = '-'
}

btn3El.onclick = function(){
    action = '*'
}

btn4El.onclick = function(){
    action = '/'
}

sumEl.onclick = function(){
    if (action == '+') {
        const sum = Number(num1.value) + Number(num2.value)
        printResult(sum)
    } 
    
    if(action == '-') {
        const sum = Number(num1.value) - Number(num2.value)
        printResult(sum)
    } 
    
    if(action == '*') {
        const sum = Number(num1.value) * Number(num2.value)
        printResult(sum)
    } 
    
    if(action == '/') {
        const sum = Number(num1.value) / Number(num2.value)
        printResult(sum)
    }


}