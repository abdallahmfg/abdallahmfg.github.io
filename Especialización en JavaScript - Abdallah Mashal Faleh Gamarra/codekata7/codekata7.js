// BLOQUE 1: Estructura HTML y Clase Extractor

// Definimos un string con código HTML que representa una tarjeta de un producto de viajes
let inputHtml = `<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <p>Web de viajes</p>
        <div class="product">
            <div class="imagen">
                <img src="beach.jpg">
            </div>
            <div class="content">
                <p class="title">vacaciones en la playa</p>
                <p class="desc">para dos personas con pension completa</p>
                <p class="price">165&euro; por noche/persona</p>
            </div>
        </div>
    </body>
</html>`;

// Creamos una clase 'Extractor' para extraer información del HTML usando expresiones regulares
class Extractor {
    #value; // Campo privado (solo accesible dentro de esta clase)

    constructor(html, pattern) {
        // Ejecutamos la expresión regular sobre el HTML recibido
        let capture = pattern.exec(html);
        // Guardamos en el campo privado lo que esté dentro del primer grupo de captura (el paréntesis '.*')
        this.#value = capture[1];
    }

    // Getter para poder leer el valor privado desde fuera de la clase de forma controlada
    get value() {
        return this.#value;
    }
}


// BLOQUE 2: Clase Product (Modelo de Datos)

// Creamos una clase 'Product' que encapsula los datos del producto
class Product {
    #title; // Campo privado para el título
    #image; // Campo privado para la imagen

    constructor(title, image) {
        this.#title = title;
        this.#image = image;
    }

    // Getters para acceder de forma segura a los campos privados
    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
    }
}


// BLOQUE 3: Instanciación, Extracción y Consola

// Creamos un extractor para la imagen buscando la ruta dentro de <img src="...">
let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)">/));

// Creamos un extractor para el título buscando el texto dentro de <p class="title">...</p>
let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));

// Creamos una instancia de Product pasándole los objetos 'title' e 'image' que ya extrajeron los datos
let product = new Product(title, image);

// Muestra el objeto Product completo por consola (sus propiedades privadas se muestran con notación especial o dependiente del entorno)
console.log(product);

// Accedemos a través del getter .title (que es un objeto Extractor) y luego a su getter .value
console.log(product.title.value); // Muestra: "vacaciones en la playa"

// Hacemos lo mismo para obtener la ruta de la imagen extraída
console.log(product.image.value); // Muestra: "beach.jpg"