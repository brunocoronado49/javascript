import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 *
 * @param {Number} puntosMinimos Puntos que necesita para ganar
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
    puntosMinimos,
    puntosHTML,
    divCartasComputadora,
    deck = []
) => {
    if (!puntosMinimos) throw new Error("Puntos minimos requeridos");
    if (!puntosHTML) throw new Error("puntosHTML requerido");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
            alert("Computadora gana");
        } else if (puntosComputadora > 21) {
            alert("Jugador Gana");
        } else {
            alert("Computadora Gana");
        }
    }, 100);
};
