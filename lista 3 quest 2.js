const botao = document.querySelector("button");
const input = document.querySelector("input");
const filmes = [
    {
        titulo: "Dawn of the Planet of the Apes",
        lancamento: 2014,
        genero: "Science Fiction"
    },
    {
        titulo: "District 9",
        lancamento: 2009,
        genero: "Science Fiction"
    },
    {
        titulo: "Transformers: Age of Extinction",
        lancamento: 2014,
        genero: "Science Fiction"
    },
    {
        titulo: "X-Men: Days of Future Past",
        lancamento: 2014,
        genero: "Aventure"
    },
    {
        titulo: "The Machinist",
        lancamento: 2004,
        genero: "Suspense"
    },
    {
        titulo: "The Last Samurai",
        lancamento: 2003,
        genero: "Action"
    },
    {
        titulo: "The Amazing Spider-Man 2",
        lancamento: 2014,
        genero: "Aventure"
    },
    {
        titulo: "Tangled",
        lancamento: 2010,
        genero: "Animation"
    },
    {
        titulo: "Rush",
        lancamento: 2013,
        genero: "Action"
    },
    {
        titulo: "Drag Me to Hell",
        lancamento: 2009,
        genero: "Horror"
    },
    {
        titulo: "Despicable Me 2",
        lancamento: 2013,
        genero: "Animation"
    },
    {
        titulo: "Kill Bill: Vol. 1",
        lancamento: 2003,
        genero: "Action"
    },
    {
        titulo: "A Bug's Life",
        lancamento: 1998,
        genero: "Animation"
    },
    {
        titulo: "Life of Brian",
        lancamento: 1972,
        genero: "Comedy"
    },
    {
        titulo: "How to Train Your Dragon",
        lancamento: 2010,
        genero: "Animation"
    }
];

botao.addEventListener("click", () => {
    let valorInformado = input.value;

    let arrayCompleto = verificarFilmes(valorInformado);
    console.log(arrayCompleto);

    exibirLista(arrayCompleto);
});

function verificarFilmes(valorInformado) {
    let arrayEncontrados = [];
    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].titulo.toLowerCase().includes(valorInformado.toLowerCase())) {
            arrayEncontrados.push(filmes[i]);
        } else if (
            filmes[i].genero.toLowerCase().includes(valorInformado.toLowerCase())
        ) {
            arrayEncontrados.push(filmes[i]);
        }
    }

    return arrayEncontrados;
}

function exibirLista(arrayCompleto) {
    const divLista = document.querySelector("#divLista");
    divLista.innerHTML = "";

    for (let i = 0; i < arrayCompleto.length; i++) {
        const listaEncontrados = document.createElement("p");
        listaEncontrados.textContent = `Título: ${arrayCompleto[i].titulo}, Gênero: ${arrayCompleto[i].genero}`;

        divLista.appendChild(listaEncontrados);
    }
}