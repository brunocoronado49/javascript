// funcion anonima autoinvocada
(() => {
    "use strict";

    let deck = [];

    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

    let puntosJugador = 0,
        puntosComputadora = 0;

    const btnPedir = document.getElementById("btnPedir"),
        btnDetener = document.getElementById("btnDetener"),
        btnNuevo = document.getElementById("btnNuevo"),
        divCartasJugador = document.getElementById("jugador-cartas"),
        divCartasComputadora = document.getElementById("computadora-cartas"),
        marcador = document.querySelectorAll("small");

    const inicializarJuego = () => {
        deck = crearDeck();
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

    const valor = valorCarta(pedirCarta());

    // eventos
    btnPedir.addEventListener("click", function () {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        marcador[0].innerText = puntosJugador;

        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasJugador.append(imgCarta);
        imgCarta.classList.add("carta");

        if (puntosJugador > 21) {
            alert("Lo siento has perdido");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            alert("21, GENIAL!");
        }
    });

    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            marcador[1].innerText = puntosComputadora;

            const imgCarta = document.createElement("img");
            imgCarta.src = `assets/cartas/${carta}.png`;
            divCartasComputadora.append(imgCarta);
            imgCarta.classList.add("carta");

            if (puntosMinimos >= 21) {
                break;
            }
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("EMPATE!");
            } else if (puntosMinimos > 21) {
                alert("GANA COMPUTADORA");
            } else if (puntosComputadora >= 21) {
                alert("GANASTE");
            }
        }, 10);
    };

    btnDetener.addEventListener("click", function () {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener("click", function () {
        // deck = [];
        // deck = crearDeck();
        inicializarJuego();

        puntosJugador = 0;
        puntosComputadora = 0;
        marcador[0].innerText = 0;
        marcador[1].innerText = 0;

        divCartasComputadora.innerHTML = "";
        divCartasJugador.innerHTML = "";

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    });
})();
