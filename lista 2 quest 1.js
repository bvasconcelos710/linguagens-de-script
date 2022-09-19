const input = document.querySelector("#input");
const button = document.querySelector("button");

function verificarValores(array) {
    let menor = Math.min(...array);

    let maior = Math.max(...array);

    return { menor, maior };
}

function exibirArray(resultado) {
    let menor = resultado.menor;

    let maior = resultado.maior;

    const menorValor = document.createElement("p");
    menorValor.textContent = `O menor valor é: ${menor}`;

    const maiorValor = document.createElement("p");
    maiorValor.textContent = `O maior valor é: ${maior}`;

    const divResultados = document.querySelector("#resultados");
    divResultados.appendChild(menorValor);
    divResultados.appendChild(maiorValor);
}

button.addEventListener("click", () => {
    let valores = input.value;

    let arrayNumeros = valores.split(",");

    arrayNumeros.map((numero) => {
        numero = parseInt(numero, 10);
        return numero;
    });

    let resultado = verificarValores(arrayNumeros);

    exibirArray(resultado);
});
