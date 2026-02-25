/* Los datos primarios son la expresion mas pequena que el lenguaje puede entender */

//Number (enteros, decimales)

console.log(typeof(100))
console.log(typeof(100.5))

//String (cadenas de texto)

/* Se utilizan para represntar texto en el lenguaje, puedes usar 
comillas dobles "", comillas simples '' o backticks ``
*/

console.log(typeof("Hola"))
console.log(typeof("35"))
console.log(typeof("console.log(Hola)"))

//Boolean (verdadero o falso)

/* Representan un valor logica 0 y 1 verdadero o falso,  fundamentla para tomar decisiones en el codigo */

console.log(typeof(true))
console.log(typeof(false))

//Arrays (vectores, listas)

/* Es una estructura de datos que nos permite almacenar una coleccion de datos */

console.log(Array.isArray([1,2,3]))
console.log(Array.isArray([1,2,"3"]))
console.log(Array.isArray([1,"dos",3,[1,2,3]]))

//Object (objetos)

/* Es una estructura de datos que nos permite almacenar una coleccion de datos
 en forma de clave valor
*/

console.log(typeof({"nombre": "Delvis", "edad": 23}))



//Undefined (indefinido)

console.log(typeof(delvis))