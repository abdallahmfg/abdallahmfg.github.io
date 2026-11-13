// EJERCICIO 1: Función básica sin retorno
// Definimos una función que simplemente imprime un texto en la consola
function printGreet() {
    console.log("Hello, World!");
}
// Llamamos a la función para ejecutar su código (muestra "Hello, World!")printGreet();

// EJERCICIO 2: Función con parámetros y return
// Definimos una función que recibe un parámetro 'name' y devuelve un saludo construido
function printGreet(name) {
    return "Hello, " + name + "!";
}

// Llamamos a la función sin pasarle argumento, por lo que 'name' vale undefined.
// El resultado ("Hello, undefined!") se guarda en la variable 'result'
let result = printGreet();

// Mostramos el contenido de 'result' por consola
console.log(result);

// EJERCICIO 3: Función que devuelve un dato interno
// Definimos una función que crea una variable local y la retorna hacia afuera
function getCopyright() {
    let copyright = "Abdallah - OpenWebinars 2026";
    return copyright;
}

// Ejecutamos la función y guardamos el valor devuelto en 'result'
let result = getCopyright();

// Imprimimos por consola el texto guardado ("Abdallah - OpenWebinars 2026")
console.log(result);
