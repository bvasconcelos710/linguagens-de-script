const arrayTransacoes = [];
const button = document.querySelector("button");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");

button.addEventListener("click", () => {
    let valDescricao = descricao.value;
    let valValor = parseFloat(valor.value);
    criarNovaTransacao(valDescricao, valValor);
});

function criarNovaTransacao(descricao, valor) {
    class Transacao {
        constructor(descricao, valor) {
            this.descricao = descricao;
            this.valor = valor;
        }
    }
    if (valor !== 0) {
        let novaTransacao = new Transacao(descricao, valor);
        arrayTransacoes.push(novaTransacao);
        adicionarTransacaoTabela(novaTransacao);
        atualizarTotalTabela();
    }
}

function adicionarTransacaoTabela(novaTransacao) {
    const corpoTabela = document.querySelector("tbody");
    const novaLinha = document.createElement("tr");
    const celulaDescricao = document.createElement("td");
    celulaDescricao.textContent = novaTransacao.descricao;

    const celulaValor = document.createElement("td");
    celulaValor.textContent = novaTransacao.valor;
    if (novaTransacao.valor > 0) {
        celulaValor.classList.add("positivo");
    } else celulaValor.classList.add("negativo");

    novaLinha.appendChild(celulaDescricao);
    novaLinha.appendChild(celulaValor);
    corpoTabela.appendChild(novaLinha);
}
const atualizarTotalTabela = () => {
    let valorTotal = arrayTransacoes.reduce((valorAnterior, transacaoAtual) => {
        return valorAnterior + transacaoAtual.valor;
    }, 0);
    const spanTotal = document.querySelector("#total");
    spanTotal.textContent = valorTotal;
};