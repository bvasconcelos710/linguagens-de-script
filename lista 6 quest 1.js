const arrayTarefas = [];
const tarefa = document.querySelector("#tarefa");
const botao = document.querySelector("button");

const adicionar = async (tarefaInformada) => {
    arrayTarefas.push(tarefaInformada);
    return arrayTarefas;
};

botao.addEventListener("click", () => {
    const divResultados = document.querySelector("#resultado");
    botao.disabled = true;
    botao.textContent = "Processando...";
    setTimeout(() => {
        divResultados.innerHTML = "";
        const tarefaInformada = tarefa.value;

        adicionar(tarefaInformada).then((resultados) => {
            resultados.forEach((resultado) => {
                const itens = document.createElement("li");
                itens.textContent = resultado;
                divResultados.appendChild(itens);
            });
            botao.textContent = "Concluído";
            setTimeout(() => {
                botao.textContent = "Adicionar";
                botao.disabled = false;
            }, 3000);
        });
    }, 3000);
});