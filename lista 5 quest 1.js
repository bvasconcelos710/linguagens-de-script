import { adicionarItem, listarItens } from "./lista.js";
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    const input = document.querySelector("#valor");
    let valorInput = input.value;
    const arrayCompleto = adicionarItem(valorInput);
    console.log(arrayCompleto);

    listarItens(arrayCompleto);
});