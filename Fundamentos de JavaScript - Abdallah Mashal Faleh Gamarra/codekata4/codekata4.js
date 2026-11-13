// EJERCICIO 1: Función con múltiples parámetros
// Definimos una función que recibe dos parámetros ('name' y 'year') y devuelve una cadena combinándolos
function getCopyright(name, year) {
    let copyright = name + " - " + year;
    return copyright;
}

// Llamamos a la función pasándole argumentos de texto y número, y guardamos el resultado en 'result'
let result = getCopyright("Abdallah Mashal", 2026);
// Imprime en la consola: "Abdallah Mashal - 2026"
console.log(result);

// EJERCICIO 2: Parámetro por defecto y error de ejecución
// Definimos una función con un parámetro por defecto ('year = 2026'). Si no le pasas el año, usará 2026 por defecto.
function getCopyright(name, year = 2026) {
    let copyright = name + " - " + year;
    return copyright;
}

// Llamamos a la función y guardamos el texto resultante en 'result' (en este punto, 'result' es un string: "Abdallah Mashal - 2026")
let result = getCopyright("Abdallah Mashal" , 2026);
// ERROR DE EJECUCIÓN (TypeError):
// Estamos intentando tratar la variable 'result' como si fuera una función al escribir 'result("Armando")',
// pero 'result' contiene un texto, no una función. Esto detendría el programa.
console.log(result("Armando"));

// EJERCICIO 3: Funciones como parámetros (Callbacks)
// Declaramos una variable que almacena una función anónima.
// Recibe un nombre, un año y otra función ('formatter') encargada de dar formato al texto.
let result = function(name, year, formatter) {
    let copyright = formatter(name, year);
    return copyright;
}

// Declaramos otra función auxiliar que define cómo se verá el formato final ("Nombre | Año")
let formatter = function(name, year) {
    return name + " | " + year;
}
//Llamará a 'result' pasando los datos y la función 'formatter'.
console.log(result("Armando", 2026, formatter));
// Resultado esperado: "Armando | 2026"