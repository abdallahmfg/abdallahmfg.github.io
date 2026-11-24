//EJERCICIO 1
let myFruit = "lemon";

switch (myFruit) {
    case "orange":
    case "lemon":
        // Como 'myFruit' es "lemon", entra aquí e imprime "Citric".
        console.log("Citric");
    case "banana":
        // Se ejecuta también e imprime "Tropical".
        console.log("Tropical");
        break; // Aquí sí hay un break, por lo que el switch termina.
    case "watermelon":
        console.log("Big fruit");
        break;
}
// Resultado en consola: 
// Citric
// Tropical

//EJERCICIO 2
let fruit ="lemon";
// Declaramos un Set con el nombre 'availabreffruits' (con 'ff')
let availablefruits = new Set(["lemon","banana","watermelon"]);
// Como '.has()' es un método, le pasamos 'fruit' ("lemon") entre paréntesis.
// El Set verifica si "lemon" está dentro de sus elementos. Como sí está, devuelve 'true'.
let isAvailable = (availablefruits.has(fruit)) ? "available" : "not available";
// Como la condición fue verdadera, el operador ternario asigna "available".
console.log(isAvailable); // Muestra por consola: "available"

//EJERCICIO 3
let myfavouritefruit = "orange";
let myAvailablefruits = ["lemon", "orange", "banana"];

// El operador 'in' en JavaScript comprueba si un ÍNDICE (posición numérica) existe dentro del array, NO el valor del texto.
// Este array tiene 3 elementos, por lo que sus posiciones (índices) válidas son:
// 0: "lemon"
// 1: "orange"
// 2: "banana"
// Aquí preguntamos si el índice 3 existe en el array. Como solo llega hasta el 2, devuelve false.
console.log (3 in myAvailablefruits); // Muestra por consola: false