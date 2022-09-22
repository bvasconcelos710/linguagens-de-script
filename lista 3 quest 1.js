const titulo = document.querySelector("#titulo");
const data = document.querySelector("#data");
const botao = document.querySelector("button");
const array = [];

function exibirArray() {
    const divLembrete = document.querySelector("#divLembrete");
    divLembrete.textContent = "";
    for (let i = 0; i < array.length; i++) {
        let lembrete = document.createElement("li");

        lembrete.textContent = `${array[i].titulo}, Data/Hora: ${array[i].data}`;

        divLembrete.appendChild(lembrete);
    }
}

function verificaValores(array) {
    array.sort((a, b) => {
        if (a.data > b.data) {
            return 1;
        }
        if (a.data < b.data) {
            return -1;
        }
        return 0;
    });
    exibirArray(array);

    console.log(array[0].titulo, array[1].titulo);
}

function adicionaArray(objeto) {
    array.push(objeto);
    verificaValores(array);
}

botao.addEventListener("click", () => {
    const valorTitulo = titulo.value;
    const valorData = data.value;

    const objeto = Object.create({
        titulo: valorTitulo,
        data: valorData
    });

    adicionaArray(objeto);
});