// funcion anonima autoinvocada
(() => {
    "use strict";

    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    const btnPedir = document.getElementById("btnPedir"),
        btnDetener = document.getElementById("btnDetener"),
        btnNuevo = document.getElementById("btnNuevo");

    const divCartasJugadores = document.querySelectorAll(".divCartas"),
        marcador = document.querySelectorAll("small");

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    };

    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }
        }

        return _.shuffle(deck);
    };

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }
        return deck.pop();
    };

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
    };

    // eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(0, carta);
        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            alert("Lo siento has perdido");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            alert("21, GENIAL!");
        }
    });

    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        marcador[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasJugadores[turno].append(imgCarta);
        imgCarta.classList.add("carta");
    };

    const turnoComputadora = (puntosMinimos) => {
        const puntosJugadorFinal = puntosJugadores.length - 1;

        do {
            const carta = pedirCarta();

            acumularPuntos(puntosJugadorFinal, carta);
            crearCarta(carta, puntosJugadorFinal);
            // const imgCarta = document.createElement("img");
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // divCartasComputadora.append(imgCarta);
            // imgCarta.classList.add("carta");

            if (puntosMinimos >= 21) {
                break;
            }
        } while (puntosJugadorFinal < puntosMinimos && puntosMinimos <= 21);

        setTimeout(() => {
            if (puntosJugadorFinal === puntosMinimos) {
                alert("EMPATE!");
            } else if (puntosMinimos > 21) {
                alert("GANA COMPUTADORA");
            } else if (puntosJugadorFinal >= 21) {
                alert("GANASTE");
            }
        }, 10);
    };

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener("click", () => {
        console.clear();
        inicializarJuego();
        console.log("juego nuevo iniciado");

        // marcador[0].innerText = 0;
        // marcador[1].innerText = 0;

        // divCartasComputadora.innerHTML = "";
        // divCartasJugador.innerHTML = "";

        // btnPedir.disabled = false;
        // btnDetener.disabled = false;
    });
})();
