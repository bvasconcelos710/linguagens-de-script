const input = document.querySelector("input");

const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    const cep = input.value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    fetch(url)
        .then((resposta) => resposta.json())
        .then((jsonResposta) => {
            console.log(jsonResposta);
            const resultado = jsonResposta.cidade;
            const spanResposta = document.createElement("p");
            spanResposta.textContent = resultado;

            const divResposta = document.querySelector("#div");
            divResposta.appendChild(spanResposta);
        });
});