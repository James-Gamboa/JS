console.log("hola mundo")

//Tipos de datos en Js
// string : cadena de caracteres. "a" "hola" "hola mundo maravilloso " "chanchito feliz" "a" "hola" "hola mundo"
//boolean: true false.
//Null : nulo.
// number : 1321331231231
//"123" es un string, es distinto a 123 que es un number.
//undefined.
// object: objeto.

//Definicion de variables
// var
// let 
// const

// var miprimeraVariable = "lala"

let miprimeraVariable = "Mi primera variable!"
console.log(miprimeraVariable);

//mutabilidad
miprimeraVariable = "esto ha cambiado"
console.log(miprimeraVariable);

//boolean
let miBoolean = true
let miotroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

console.log(miBoolean , miNumero)

let undef
console.log(undef);

let nulo = null

console.log(nulo);

// objeto
//un objeto es una agrupacacion de datos  que hacen sentido entre si
//objeto vacio
const miPrimerobjeto = {}

// objeto
const miobjeto = {
  unNumero : 12,
  unString : "Esta cadena de caracteres",
  unaCondicion: true ,
}
console.log(miobjeto.unString);

const arrVacio = []
const arr = [1 ,2 , "hola","mundo", miobjeto]

console.log(arrVacio, arr)

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(2)
arrVacio.push(1)
arrVacio.push("hola")
arrVacio.push(miprimeraVariable)

console.log(arrVacio);

const suma = 1 + 2
const restar = 1 -2
const multiplicar = 2 * 3
const division = 9 /3 

console.log(suma , restar , multiplicar , division);

const modulo = 10 % 3
console.log(modulo);

let  num = 5
// cons vs let
// num++
// num++
// num++
// num++
// num++

// num--
// num--
// num--
// num--
// num--

num += 5
num -= 5
num *= 5
num /= 2
console.log(num);

// operadores comparacion 

// @ts-ignore
//igualdad estricta
const resultado1 = 5 === 6
// @ts-ignore
//igualdad no estricta , strings pueden ser iguales a numeros si el valor es el mismo
const resultado2 = 5 == "5"

const resultado3 = 5 < 6
const resultado4 = 5 < 5

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)


//operadores logicos
// or , || , and && , not !

const resultaltado0r = false || true

console.log(resultaltado0r)

const resultaltadoAnd = true && true && true && false
console.log(resultaltadoAnd);

const resultadoNot = !true
console.log(resultadoNot);


// control de flujo 

//control de flujo if

const edad = 5
if (edad > 5  && edad < 18) {
  console.log("el niño puede jugar")
}

// control de flujo: while

let x = 0
while (x < 5){
  console.log(x);
  x++
}

console.log("terminando el loop")