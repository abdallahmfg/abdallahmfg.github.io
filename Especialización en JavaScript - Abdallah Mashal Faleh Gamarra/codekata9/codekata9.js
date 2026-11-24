// BLOQUE 1: Event Listener y Petición HTTP (XHR)

// Seleccionamos el elemento con la clase '.request' y le añadimos un escuchador de eventos 'click'
document.querySelector(".request").addEventListener("click", event => {
    // Al hacer clic, se ejecuta la función que realiza la petición AJAX
    requestActivity();
});

function requestActivity() {
    const url = "https://www.boredapi.com/api/activity/";
    
    // Creamos una instancia de XMLHttpRequest (el método tradicional para hacer peticiones HTTP en JS)
    const http = new XMLHttpRequest();

    // Configuramos la petición como tipo GET hacia la URL de la API
    http.open("GET", url);

    // Definimos el evento que se ejecuta cada vez que cambia el estado de la petición
    http.onreadystatechange = function () {
        // readyState == 4 significa que la operación ha terminado, y status == 200 significa que fue exitosa (OK)
        if (this.readyState == 4 && this.status == 200) {
            console.log("peticion realizada");
            // Llamamos a la función para pintar la respuesta recibida (que viene en formato texto/JSON)
            insertOutputResponse(this.response);
        }
    }

    // Enviamos la petición al servidor
    http.send();
}


// BLOQUE 2: Procesamiento y Manipulación del DOM

function insertOutputResponse(response) {
    // Convertimos el string JSON recibido de la API en un objeto de JavaScript utilizable
    let decodeResponse = JSON.parse(response);
    
    // Seleccionamos el contenedor en el HTML donde mostraremos los datos
    let container = document.querySelector(".activity");

    // Limpiamos el contenido anterior del contenedor para que no se acumulen resultados viejos
    container.innerHTML = "";

    // 1. Creamos un título (h4) para mostrar la descripción de la actividad
    let activity = document.createElement("h4");
    activity.append(decodeResponse.activity);
    container.append(activity);

    // 2. Creamos un enlace (<a>) si la actividad incluye un enlace web asociado
    let link = document.createElement("a");
    link.href = decodeResponse.link;
    link.text = decodeResponse.link; // (Nota: en buenas prácticas modernas se suele preferir link.textContent)
    link.target = "_blank"; // Abre el enlace en una pestaña nueva
    container.append(link);

    // 3. Creamos un párrafo (<p>) para mostrar la categoría o tipo de actividad
    let type = document.createElement("p");
    type.append(decodeResponse.type);
    container.append(type);
}