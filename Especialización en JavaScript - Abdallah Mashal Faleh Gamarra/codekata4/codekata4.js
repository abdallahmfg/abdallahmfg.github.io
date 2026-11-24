// EJERCICIO 1: Bucle For para rellenar un Array

let enumeration = [];

// Un bucle 'for' que empieza en i = 0 y se repite mientras i < 10 (10 iteraciones en total: de 0 a 9)
for (let i = 0; i < 10; i++) {
    // En cada posición 'i' del array asignamos el valor de 'i + 1'
    // Esto llenará el array con números del 1 al 10.
    enumeration[i] = i + 1;
}

// Imprime el array completo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(enumeration);


// EJERCICIO 2: Bucle Do-While y posible bucle infinito

let limit = 3;

// El bucle 'do...while' ejecuta su bloque AL MENOS una vez antes de evaluar la condición.
do {
    // Imprime el valor actual de 'limit' y luego le resta 1 (post-decremento: limit--)
    console.log(limit--);
} while (limit < 3);

// CUIDADO AQUÍ (Bucle infinito): 
// 'limit' empieza en 3. Al entrar, imprime 3 y baja a 2. Luego pregunta si 2 < 3 (verdadero).
// En la siguiente vuelta imprime 2 y baja a 1 (1 < 3 es verdadero). 
// Esto seguirá restando infinitamente (0, -1, -2, -3...) porque cada vez es más menor que 3.


// EJERCICIO 3: Bucle For...of con Set y condiciones

let fruits = ["orange", "lemon", "grape"];
let myOptions = new Set(["watermelon", "banana"]);

// Recorremos cada elemento del array 'fruits' usando 'for...of'
for (let elem of fruits) {
    // Verificamos si el Set 'myOptions' contiene la fruta actual
    if (myOptions.has(elem)) {
        // Si la encontrara, el 'break' rompería el bucle por completo.
        break;
    } else {
        // Como ninguna de las frutas del array está en el Set ("watermelon" o "banana"),
        // siempre entrará al 'else', imprimirá la fruta y el 'continue' pasará a la siguiente.
        console.log(elem);
        continue; 
    }
}
// Resultado impreso en consola:
// "orange"
// "lemon"
// "grape"