// EJERCICIO 1: Tipos de datos primitivos y typeof
// Declaración de variables con distintos tipos de datos
let adress = 'Avenida de dos Carriles, 23'; // Tipo string (texto)
let price = 233;                            // Tipo number (número)
let active = true;                          // Tipo boolean (verdadero/falso)
let sample;                                 // Tipo undefined (variable declarada sin valor)
let sampleNull = null;                      // Tipo object (representa valor nulo o vacío)

// Uso del operador 'typeof' para comprobar el tipo de dato de cada variable
console.log(typeof adress);     // Muestra: "string"
console.log(typeof price);      // Muestra: "number"
console.log(typeof active);     // Muestra: "boolean"
console.log(typeof sample);     // Muestra: "undefined"
console.log(typeof sampleNull); // Muestra: "object"

// EJERCICIO 2: Conversión a Boolean
let adress = 'Avenida de dos Carriles, 23'; 

// Convertimos el string a un valor booleano (como tiene contenido, devuelve true)
let booleanAddress = Boolean(adress); 

// Muestra: true
console.log(booleanAddress);


// EJERCICIO 3: Conversión de String a Number
let adress = '987'; 

// Convertimos el texto '987' a un número real (987) usando Number()
let numberAddress = Number(adress); 

// Muestra: 987
console.log(numberAddress);


// EJERCICIO 4: Conversión con variable no definida
let adress = '987'; 

// Intentamos convertir una variable llamada 'randomNumber' que no ha sido declarada
let numberAddress = Number(randomNumber); 

// Esto lanzará un error porque 'randomNumber' no existe
console.log(numberAddress);


// EJERCICIO 5: Boolean con variable no definida
let adress = '987';

// Intentamos evaluar con Boolean usando de nuevo 'randomNumber' (que tampoco existe aquí)
let BooleanAdress = Boolean(randomNumber); 

// Imprimimos el resultado de la conversión
console.log(booleanAddress);