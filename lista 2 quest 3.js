const botao = document.querySelector("button");
const input = document.querySelector("input");
const filmes = [
    {
        titulo: "Dawn of the Planet of the Apes",
        lancamento: 2014
    },
    {
        titulo: "District 9",
        lancamento: 2009
    },
    {
        titulo: "Transformers: Age of Extinction",
        lancamento: 2014
    },
    {
        titulo: "X-Men: Days of Future Past",
        lancamento: 2014
    },
    {
        titulo: "The Machinist",
        lancamento: 2004
    },
    {
        titulo: "The Last Samurai",
        lancamento: 2003
    },
    {
        titulo: "The Amazing Spider-Man 2",
        lancamento: 2014
    },
    {
        titulo: "Tangled",
        lancamento: 2010
    },
    {
        titulo: "Rush",
        lancamento: 2013
    },
    {
        titulo: "Drag Me to Hell",
        lancamento: 2009
    },
    {
        titulo: "Despicable Me 2",
        lancamento: 2013
    },
    {
        titulo: "Kill Bill: Vol. 1",
        lancamento: 2003
    },
    {
        titulo: "A Bug's Life",
        lancamento: 1998
    },
    {
        titulo: "Life of Brian",
        lancamento: 1972
    },
    {
        titulo: "How to Train Your Dragon",
        lancamento: 2010
    }
];

for (let i = 0; i < filmes.length; i++) {
    const listaFilmes = document.createElement("p");
    listaFilmes.textContent = `Título: ${filmes[i].titulo} , Lançamento: ${filmes[i].lancamento}`;
    const divFilmes = document.querySelector("#divFilmes");
    divFilmes.appendChild(listaFilmes);
}

function exibirFilmesEncontrados(filmesEncontrados) {
    const divFilmes = document.querySelector("#divFilmes");
    divFilmes.textContent = "";

    for (let i = 0; i < filmesEncontrados.length; i++) {
        const listaFiltrada = document.createElement("p");
        listaFiltrada.textContent = `Filme: ${filmesEncontrados[i].titulo}, Lançamento: ${filmesEncontrados[i].lancamento}`;

        divFilmes.appendChild(listaFiltrada);
    }
}

function verificarFilme(filmeInformado) {
    let filmesEncontrados = filmes.filter((filme) => {
        return (
            filme.titulo.toLowerCase().includes(filmeInformado.toLowerCase()) ||
            filme.lancamento.toString().includes(filmeInformado)
        );
    });

    exibirFilmesEncontrados(filmesEncontrados);
}

botao.addEventListener("click", () => {
    const filmeInformado = input.value;

    verificarFilme(filmeInformado);
});