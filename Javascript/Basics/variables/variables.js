//Variables

/* Una variable es un contenedor de informacion que nos permite almacenar informacion en memoria */

//En Javascript existen 3 tipos de variables

//var - variable global
//let - variable local
//const - variable constante (No se puede cambiar su valor)


//var - variable global (se puede acceder desde cualquier parte del codigo y se redeclarar)

var myName = "Delvis Sanabria"
/* Vamos a imprimir el valor de la variable */
console.log(myName)
console.log(typeof(myName))

var number = 100
console.log(number)
console.log(typeof(number))

//Reasignando una variable
var myName = "Santiago"
console.log(myName)


//let - variable local (se pueden como variables globales) (se puede acceder desde cualquier parte del codigo y se redeclarar)

let secondName = "David Sanabria"
/* Vamos a imprimir el valor de la variable */
console.log(secondName)
console.log(typeof(secondName))

let numberTwo = 200
console.log(number)
console.log(typeof(number))


//Reasignando una variable
secondName = "Mauricio"
console.log(secondName)

//Utilzaremos prompt para pedir informacion al usuario
secondName = prompt("Ingrese su nombre")
numberTwo = prompt("Ingrese su edad")

/* vamos a imprimir el valor de la variable junto con un texto
 utilizando la concatenacion
*/
console.log("Bienvenido " + secondName + " tu edad es: " + numberTwo)

/* Alert es una ventana que nos permite mostrar un mensaje */
alert("Bienvenido " + secondName + " tu edad es: " + numberTwo)


/* Realizaremos una calculadora usando variables let, prompt y alert */

let num1 = +prompt("Ingrese el primer numero")
let num2 = +prompt("Ingrese el segundo numero")

alert("El resultado de la suma es: " + (num1 + num2))


//const - variable constante (No se puede cambiar su valor)

const EMAIL = "delvis@example.com"
console.log(EMAIL)

/* Probemos que no se puede cambiar el valor de la variable const */

/* EMAIL = "ZMlXh@example.com"
console.log(EMAIL) */

/* Ejercio del iva */

let amount = +prompt("Ingrese el monto de la compra")
const IVA = 0.16
let total = amount + (amount * IVA)
alert("El total de la compra es: " + total)

/* 
    EJERCICIO PARA PRACTICAR
    Realiza un programa que calcule el IMC de una persona. 
*/

// Utilizando prompt, y variables let y constantes.
// Formula del IMC: peso / (altura * altura)

/* 
    + suma
    - resta
    * multiplicacion
    / division
    ** potencia
*/

let weight = +prompt("Ingrese su peso")
let height = +prompt("Ingrese su altura en metros")
const IMC = weight / (height * height)
alert("Su IMC es: " + IMC)