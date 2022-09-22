const inputNome = document.querySelector("#nome");
const inputDocumento = document.querySelector("#documento");
const inputSaldo = document.querySelector("#saldo");
const button = document.querySelector("button");
const arrayClientes = [];

function criarNovoCliente(nome, documento, saldo) {
    class ClienteBanco {
        constructor(nome, documento, saldo) {
            this.nome = nome;
            this.documento = documento;
            this.saldo = saldo;
        }
        depositar() {
            this.saldo = this.saldo + 100;
        }
        sacar() {
            this.saldo = this.saldo - 100;
        }
    }
    let novoCliente = new ClienteBanco(nome, documento, saldo);
    arrayClientes.push(novoCliente);

    exibirClientes(arrayClientes);
}

const depositar = (cliente, saldo) => {
    cliente.depositar();
    saldo.textContent = `R$: ${cliente.saldo}`;
};

const sacar = (cliente, saldo) => {
    cliente.sacar();
    saldo.textContent = `R$: ${cliente.saldo}`;
};

function exibirClientes(arrayClientes) {
    let divClientes = document.querySelector("#clientes");
    divClientes.innerHTML = "";
    for (let i = 0; i < arrayClientes.length; i++) {
        let novoElementoCliente = document.createElement("p");

        const nomeCliente = document.createElement("span");
        nomeCliente.textContent = `Nome: ${arrayClientes[i].nome} | `;

        const documentoCliente = document.createElement("span");
        documentoCliente.textContent = `Documento: ${arrayClientes[i].documento} | `;

        const saldoCliente = document.createElement("span");
        saldoCliente.textContent = `R$: ${arrayClientes[i].saldo}`;

        novoElementoCliente.replaceChildren(
            nomeCliente,
            documentoCliente,
            saldoCliente
        );

        divClientes.appendChild(novoElementoCliente);

        let botaoDepositar = document.createElement("button");
        botaoDepositar.textContent = "Depositar";
        botaoDepositar.addEventListener("click", () => {
            depositar(arrayClientes[i], saldoCliente);
        });
        divClientes.appendChild(botaoDepositar);

        let botaoSacar = document.createElement("button");
        botaoSacar.textContent = "Sacar";
        botaoSacar.addEventListener("click", () => {
            sacar(arrayClientes[i], saldoCliente);
        });
        divClientes.appendChild(botaoSacar);
    }
}

button.addEventListener("click", () => {
    const valorNome = inputNome.value;
    const valorDocumento = inputDocumento.value;
    const valorSaldo = parseInt(inputSaldo.value);

    criarNovoCliente(valorNome, valorDocumento, valorSaldo);
});