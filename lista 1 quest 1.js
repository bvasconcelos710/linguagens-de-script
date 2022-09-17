const botaoGerar = document.querySelector("button");

botaoGerar.addEventListener("click", () => {
    exibirNumero();
});

const exibirNumero = () => {
    const novoResultado = document.createElement("p");
    let resultado = Math.random();
    novoResultado.textContent = resultado;
    const resultados = document.querySelector("#resultados");
    resultados.appendChild(novoResultado);
};