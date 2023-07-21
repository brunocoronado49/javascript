/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} Imagen de retorno
 */
export const crearCartaHtml = (carta) => {
    if (!carta) throw new Error("La carta es obliigatoria");

    const imgCarta = document.createElement("img");
    imgCarta.src = `../../../public/assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");

    return imgCarta;
};
