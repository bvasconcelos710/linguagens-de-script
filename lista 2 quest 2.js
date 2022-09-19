let nome = document.querySelector("#nome");
let salario = document.querySelector("#salario");
const botaoAdicionar = document.querySelector("#botaoAdicionar");
const array = [];

function verificarValores(array) {
    let novoResultado = document.createElement("li");
    novoResultado.textContent = "";
    let resultados = document.querySelector("#resultados");
    resultados.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        novoResultado = document.createElement("li");
        novoResultado.textContent = ` Funcionário ${array[i].nome}, Salário ${array[i].salario}`;

        resultados = document.querySelector("#resultados");
        resultados.appendChild(novoResultado);
    }

    let maiorSalario = getMaiorSalario();

    let somaSalarios = getSomaSalarios();
    const divSegundoResultado = document.querySelector("#segundoResultado");
    divSegundoResultado.textContent = "";

    const segundoResultado = document.createElement("li");
    segundoResultado.textContent = `O maior salário é de ${maiorSalario.nome}, no valor de: R$${maiorSalario.salario} e a soma dos salários é: R$${somaSalarios}`;

    divSegundoResultado.appendChild(segundoResultado);

    console.log(somaSalarios);
}
function getMaiorSalario() {
    let funcionarioMaiorSalario = null;
    let maiorSalario = 0;
    array.forEach((funcionario) => {
        if (funcionario.salario > maiorSalario) {
            funcionarioMaiorSalario = funcionario;
            maiorSalario = funcionario.salario;
        }
    });
    return funcionarioMaiorSalario;
}
function getSomaSalarios() {
    let somaSalarios = array.reduce((sum, funcionario) => {
        return sum + funcionario.salario;
    }, 0);
    return somaSalarios;
}

function inserirArray(objeto) {
    array.push(objeto);
    return array;
}

botaoAdicionar.addEventListener("click", () => {
    const valorNome = nome.value;
    const valorSalario = parseInt(salario.value, 10);

    const objeto = Object.create({
        nome: valorNome,
        salario: valorSalario
    });

    const arrayCompleto = inserirArray(objeto);

    verificarValores(arrayCompleto);
});