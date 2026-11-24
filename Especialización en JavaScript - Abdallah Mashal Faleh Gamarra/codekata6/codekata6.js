// EJERCICIO 1: Expresiones regulares con grupos de captura nominales

let html = "<html><body><h1 class=\"h1 font text\"> Formacion tecnica</h1></body></html>";

// Creamos una expresión regular para buscar etiquetas <h1> con atributos class y extraer su contenido.
// Nota: Usar 'new RegExp(/.../)' es válido, aunque también se puede escribir directamente como una barra diagonal '/.../'.
// El fragmento '(?<texto>.*)' define un "grupo de captura con nombre" llamado 'texto'.
let expression = new RegExp(/<h1.*class=".*">(?<texto>.*)<\/h1>/);

// El método .exec() ejecuta la búsqueda sobre el string 'html' y devuelve un array con los resultados y grupos.
let result = expression.exec(html);

// Accedemos al grupo de captura nombrado 'texto' a través de la propiedad '.groups'
console.log(result.groups.texto); // Muestra por consola: " Formacion tecnica"


// EJERCICIO 2: Validación de formato de teléfono con RegExp

// Creamos una expresión regular para validar números de teléfono de España (+34 seguido de 9 dígitos en bloques de 3)
let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})s?/);
// Desglose de la expresión:
// \+34 -> Busca el prefijo internacional "+34" (el '+' se escapa con '\' porque tiene un significado especial en regex).
// \s? -> Espacio en blanco opcional.
// ([0-9]{3}) -> Un grupo que captura exactamente 3 números (del 0 al 9).
// [0-9]{3}s? -> Al final tiene un 's?' suelto, lo que significa que busca de forma opcional la letra "s" al final.

// Probamos si el texto cumple con el patrón usando .exec()
let isValid = phone.exec("+34 600 512 322");

// Comprobamos si la ejecución encontró una coincidencia (si no es null, significa que sí hizo match).
// Como el número cumple con el patrón principal, devuelve true.
console.log(isValid !== null); // Muestra por consola: true