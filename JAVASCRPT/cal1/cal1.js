function answer() {
    let value = prompt("Dime una Serie de numeros");
    let valueInteger = eval(value);     /*ESTO ES UNA CALCULADORA BASICA */
    let result = parseInt(valueInteger);
    alert(`el resultado es: ${result}`)
    return result;
}


let calculateResult = document.createElement("p");
calculateResult.textContent = `El resultado es: ${result}`;
document.body.appendChild(calculateResult);




