

class Calculator2 {

    answer() {
        let value = prompt("Dime una Serie de numeros");
        let valueInteger = eval(value);     /*ESTO ES UNA CALCULADORA BASICA */
        let result = parseInt(valueInteger);
        alert(`el resultado es: ${result}`)
        return result;
    }
}

const calc2 = new Calculator2();
calc2.answer();