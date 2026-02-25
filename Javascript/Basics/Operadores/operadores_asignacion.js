/* Como su nombre indica nos sirven para asignar un valor  */

//Asignacion (=) nos sirve para asignar un valor

let asignacion = "Delvis"

//Asignacion y suma (+=)

let numero = 1
let sum = 99
numero += sum
console.log(numero)

//Asignacion y resta (-=)

let toRest = 1 

sum -= toRest
console.log(sum)

// asignar y dividir (/=)

sum /= 2
console.log(sum)

//asignar y sacar resto (%=)

sum %= 2
console.log(sum)

//Operadores especiales

// "..." (operador de propagacion (spreed operator)) Se utiliza para descomponer elementos y para combinar matrices o crear copias de objetos o matrices

//Ejemplo 1

const numbers = [1,2,3,4]
const otherNumbers  = [5,6,7,8]

console.log(...numbers)

//Combinemos arrays en un nuevo array

const totalNumbers = [...numbers, ...otherNumbers]
console.log(totalNumbers)

//Usando el operador de miembro (.) para acceder a las propiedades y metodos de un objeto

const person = {
  name: "Delvis",
  lastName: "Sanabria",
  age: 21
}

console.log(person.name)
console.log(person.lastName)
console.log(person.age)