const base = document.querySelector("#base");
const expoente = document.querySelector("#expoente");
const botao = document.querySelector("button");

const calcularPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

function exibirResultado(resultado) {
    const novoResultado = document.createElement("p");
    novoResultado.textContent = resultado;
    const resultados = document.querySelector("#resultados");
    resultados.appendChild(novoResultado);
}

botao.addEventListener("click", () => {
    const valorBase = base.value;
    const valorExpoente = expoente.value;
    const resultado = calcularPotencia(valorBase, valorExpoente);
    exibirResultado(resultado);
    base.value = "";
    expoente.value = "";
});