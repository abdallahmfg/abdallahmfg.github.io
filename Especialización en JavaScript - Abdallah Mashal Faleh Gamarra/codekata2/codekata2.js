//EJERCICIO 1
let numberOne = 18;
let numberTwo = 33;
// El operador '%' (módulo) calcula el residuo (resto) de una división.
// 18 dividido entre 2 da 9 exacto, por lo que el residuo es 0.
let result = numberOne % 2;

// Evaluamos si el residuo es igual a 0
if (result == 0) {
    console.log ("Es par"); // Como 18 es par, imprime esto en consola.
} 
// Si el residuo es diferente de 0, se consideraría impar
// (aunque aquí, como el if ya se cumplió, esta parte se omite).
else if (result !== 0) {
    console.log("Es impar");
}

//EJERCICIO 2
let exponent = 3;
let numberStyle = 7;
// El operador '**' calcula la potencia (base ** exponente).
// Aquí eleva el número 2 a la potencia de 2 (2 * 2).
console.log(2 ** 2);
// Nota: Las variables 'exponent' y 'numberStyle' fueron declaradas arriba, pero no se usan en esta operación.

//EJERCICIO 3
let myText = "Un texto cualquiera";
// En JavaScript, cuando usas el operador '+' entre un string (texto) y un número,
// el número se convierte automáticamente en texto y se unen (se concatenan).
console.log(myText + " " + 1234); // Muestra por consola: "Un texto cualquiera 1234"