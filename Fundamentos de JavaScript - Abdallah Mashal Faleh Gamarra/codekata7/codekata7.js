// EJERCICIO 1: Variable global y función
// Declaramos una variable global llamada 'name' con el valor "Armando"
let name = "Armando";

// Definimos una función que imprime la variable global 'name'
function printName() {
    console.log(name); // Al no tener una variable 'name' local, busca y usa la global
}

// Llamamos a la primera función.
// Muestra por consola: "Armando"
printName();

// EJERCICIO 2: Sobrescritura de función y ámbito (Scope) local
// Definimos OTRA función con exactamente el mismo nombre ('printName').
function printName() {
    let name = "Armando"; // Variable local dentro de esta función
    let surname = "Torres"; // Variable local dentro de esta función

    // Evaluamos una condición estricta: ¿Es la variable local 'name' igual a "Armando"?
    if (name === "Armando") {
        // Como la condición se cumple (true), entra al bloque e imprime 'surname'
        console.log(surname); // Muestra por consola: "Torres"
    }
}

// Llamamos a esta nueva versión de la función
printName();