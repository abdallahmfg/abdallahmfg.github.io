// BLOQUE 1: Estructura HTML y Clase Extractor mejorada

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

class Extractor {
    #value;

    constructor(html, pattern) {
        // Intenta ejecutar la regex directamente. Si no encuentra nada, 'capture' será null.
        let capture = pattern.exec(html);
        this.#value = capture[1]; // ⚠️ Si capture es null, esto lanzará un TypeError
    }

    get value() {
        return this.#value;
    }

    // Método privado auxiliar que tiene un try...catch interno (aunque no se está usando en el constructor actual)
    #extract(html, pattern) {
        try {
            let capture = pattern.exec(html);
            return capture[1];
        } catch (e) {
            return "- not found -";
        }
    }
}


// BLOQUE 2: Clase Product

class Product {
    #title;
    #image;

    constructor(title, image) {
        this.#title = title;
        this.#image = image;
    }

    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
    }
}


// BLOQUE 3: Ejecución controlada con Try...Catch

try {
    // 1. Extrae la imagen correctamente: <img src="beach.jpg"> coincide con la expresión regular.
    let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)">/));
    
    // 2. ERROR INTENCIONADO O FALLO DE BÚSQUEDA: 
    // Buscas `<p class="titles">(.*)<\/p>` (con una "s" al final en titles). 
    // Sin embargo, en el HTML original la clase es `class="title"` (sin "s").
    // Por lo tanto, pattern.exec(html) devuelve 'null', y al intentar hacer `null[1]` dentro del 
    // constructor de Extractor, se lanza un error que interrumpe la ejecución.
    let title = new Extractor(inputHtml, new RegExp(/<p class="titles">(.*)<\/p>/));

    let product = new Product(title, image);

    console.log(product.title.value);
    console.log(product.image.value);

} catch (e) {
    // Como el error del título hace saltar el flujo al catch, se imprime este mensaje por consola:
    console.log("No se puede obtener la información completa para crear el producto");
}