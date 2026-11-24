//EJERCICIO 1
// Declaramos un array (colección ordenada) que contiene varios elementos de tipo string
let namedCollection = ["Armando", "Alejandro", "David", "Alejandra"];
// Imprime el array completo por la consola
console.log(namedCollection);
// Imprime el elemento que está en el índice 3 (los arrays empiezan a contar desde el 0)
// 0: "Armando", 1: "Alejandro", 2: "David", 3: "Alejandra"
console.log(namedCollection[3]); // Muestra: "Alejandra"


//EJERCICIO 2
// Creamos un Set utilizando el constructor 'new Set()'.
// Un Set almacena valores únicos de cualquier tipo (aquí mezcla números, booleanos y textos)
let enumu = new Set([1, 7, true, "Hola"]);
// Añadimos un nuevo elemento ("Adios") al Set mediante el método .add()
enumu.add("Adios");
// Imprime el Set completo (muestra todos sus elementos actuales)
console.log(enumu);

//EJERCICIO 3
// Creamos un Map usando 'new Map()'. Almacena pares de [clave, valor].
// Nota: La clave "1" es un string y la clave 2 es un número. Las claves distinguen tipos de datos.
let mapeo = new Map([
    ["1", "Armando"],
    [2, "Alumno"]
]);

// Añadimos o actualizamos un valor. Aquí usamos el número 1 como clave.
// Como antes solo existía el string "1", esto añade una NUEVA clave numérica (1) distinta a la de texto ("1").
mapeo.set(1, "OpenWebinars");
// Buscamos y obtenemos el valor asociado a la clave de tipo string "1"
console.log(mapeo.get("1"));

//EJERCICIO 4
// Creamos un objeto literal con propiedades (name y surname)
let objeto = {
    name: "Armando",
    surname: "Torres"
};
// Intentamos acceder a una propiedad llamada 'surnames'.
// Como el objeto solo tiene definida la propiedad 'surname',
// JavaScript no la encontrará y devolverá 'undefined'.
console.log(objeto.surnames);

//EJERCICIO 5
// Creamos una instancia de Date que captura la fecha y hora actual exacta del sistema
let currentDate = new Date();
// Imprime el objeto de fecha actual (formato de fecha y hora ISO/local)
console.log(currentDate);
// Creamos una segunda instancia de Date en el momento actual
let secondCurrentDate = new Date();
// Imprime la segunda fecha (será prácticamente idéntica a la anterior, con milisegundos de diferencia)
console.log(secondCurrentDate);
