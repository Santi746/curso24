/* Se conoce como operadores logicos a los simbolos que nos permiten realizar operaciones binarias */

// Operador AND (&&) ambas condiciones deben ser verdaderas para devolver true
console.log(true && true);

let money = 1000;
let desire = true;
desire = false;

console.log(money && desire);
console.log(true && false)
console.log("uno" && "dos");

// Operador OR (||) al menos una condicion debe ser verdadera para devolver true
console.log(true || true);
console.log(true || false);
console.log(false || false);

let money2 = 1000;
let desire2 = false;

console.log(money2 || desire2);
console.log(false || "dos");

console.log((5 > 3) || (5 < 3));

// Operador NOT (!) invierte el valor de una condicion
console.log(!true);
console.log(!false);

// Declaro mi variable con un valor booleano inicial
let switchState = true;

// Utilizo el operador NOT para cambiar su valor
switchState = !switchState;
console.log(switchState);

// (Facil)
let uno = !true || false; //mauricio dice false
let dos = false && !false; //mauricio dice true
let tres = true && !false; //mauricio dice false

//(Medio)
let cuatro = (!true) || (10 === 10)
let cinco = (!0) || (5 < 0)
let seis = (3 > 4) && (!0)  

//Avanzado
let siete = ( ((false || true) && (!false && true) )) || (true && false) //True
let ocho = (6 === 3+3) && (9/3 >= 3) //True
let nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ) //false

//Si quieren practicar

//Hardcore
let diez = !(!true) === !( !( 5 >= 5 ) );
let once = !( true && (!true === !( !(8 === 4*2) )) );

//Ultra-Hardcore
let doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

//Leyenda
let trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));


// Roto
let catorce = !(!(!(1)) && (50 * "0" === 0) !== (false) || !(("20"+24) === (4028/2)));