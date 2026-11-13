// Declaramos una variable de tipo string (texto) con el valor "No tengo"
let hasPizza = "No tengo"

// Primera condición: Compara el string "No tengo" con el booleano 'false' usando '=='
// En JavaScript, al usar '==' (igualdad débil), se intenta convertir los tipos,
// pero esta comparación da 'false', por lo que este bloque se salta.
if(hasPizza == false) {
    console.log("No tengo pizza");
} 
// Segunda condición: Compara el string con el booleano 'true'
// Esto también evalúa como 'false', por lo que este bloque también se salta.
else if (hasPizza == true) {
    console.log("Tengo pizza");
} 
// Como ninguna de las condiciones anteriores se cumplió, se ejecuta automáticamente el 'else'.
else {
    // Imprime el valor que tiene guardado la variable 'hasPizza'
    console.log(hasPizza); // Muestra por consola: "No tengo"
}