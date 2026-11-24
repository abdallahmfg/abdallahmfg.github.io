// SIMULACIÓN DE JUEGO: CPU vs PLAYER (Generadores y Operador Ternario)

// NOTA DE SINTAXIS: Para poder usar la palabra 'yield', la función DEBE ser un 
// "generador", es decir, debe llevar un asterisco después de la palabra function (function*).
// Si se queda como 'function', JavaScript lanzará un SyntaxError.
function* extractNumber(attempts) {
    for(let i = 0; i < attempts; i++) {
        // 'yield' pausa la función y devuelve un valor aleatorio entre 0 y 90 (Math.floor redondea hacia abajo)
        yield Math.floor(Math.random() * 91);
    }
}

let cpu = 0;
let player = 0;

// TIRADAS DE LA CPU 
// Creamos el iterador/generador para la CPU pidiendo 2 intentos
let cpuGenerator = extractNumber(2);
// Obtenemos el primer valor generado y lo sumamos a la CPU
cpu += cpuGenerator.next().value;
// Obtenemos el segundo valor generado y lo acumulamos
cpu += cpuGenerator.next().value;

// TIRADAS DEL JUGADOR 
// Creamos otro generador independiente para el jugador pidiendo 2 intentos
let playerGenerator = extractNumber(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

// Mostramos los totales obtenidos por cada uno en la consola
console.log("CPU: " + cpu);
console.log("PLAYER: " + player);

// OPERADOR TERNARIO PARA EL GANADOR: (condición) ? si_es_verdadero : si_es_falso
// DETALLE LÓGICO: Si la CPU y el jugador obtienen exactamente el mismo número (empate), 
// la condición 'cpu > player' dará 'false', por lo que declarará ganador al "PALYER".
console.log((cpu > player) ? "CPU WIN": "PLAYER WIN");