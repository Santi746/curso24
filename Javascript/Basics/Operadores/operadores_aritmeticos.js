/* Los operadores aritmeticos son operadores que nos permiten realizar operaciones matematicas */

// Operador de suma (+)
let sum = 3 + 5
console.log("El resultado de la suma es: " + sum)

//concatena dos cadenas de texto
let text1 = "Hola "
let text2 = "Mundo"
let text3 = text1 + text2
console.log("El resultado de la concatenacion es: " + text3)

// Operador de resta (-)
let sub = 10 - 5
console.log("El resultado de la resta es: " + sub)
let rest = -10 - 5
console.log("El resultado de la resta es: " + rest)

// Operador de multiplicacion (*)
let mul = 5 * 3
console.log("El resultado de la multiplicacion es: " + mul)

// Operador de division (/)
let div = 10 / 2
console.log("El resultado de la division es: " + div)

// Operador de modulo (%)
let mod = 10 % 2
console.log("El resultado del modulo es: " + mod)

//Operador de exponenciacion (**)
let exp = 2 ** 3 // 2*2*2
console.log("El resultado de la exponenciacion es: " + exp)

//Operadores de incremento (++) y decremento (--)
let incremento = 5
incremento++ // incremento = incremento + 1
console.log("El resultado del incremento es: " + incremento)

let decremento = 5
decremento-- // decremento = decremento - 1
console.log("El resultado del decremento es: " + decremento)

//Tambien podemos usar los operadores aritmeticos con variables
let a = 10
let b = 5

let resultado = a + b
console.log("El resultado de la suma de a y b es: " + resultado)

//convertir un numero a negativo
let negativo = 10
negativo = -negativo
console.log("El numero negativo es: " + negativo)

//convertir un numero a positivo
let positivo = -10
positivo = -positivo
console.log("El numero positivo es: " + positivo)

//convertir una cadena de texto a numero y sumarle un valor
let numero = "5"
numero = Number(numero) + 5
console.log("El resultado de la suma es: " + numero)