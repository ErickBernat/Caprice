let listaItens = document.getElementById("listaItens");
let listaItensDesc = document.getElementById("listaItensDesc");
let arrayItens = []


function carregaListaItens(){

    fetch('./Model/itens.json')
        .then(response => response.json())
        .then(data => {
            let arrayItens = data.itens;

            arrayItens.forEach(item => {
                listaItens.innerHTML += `
                <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                    <div class="card m-0 " style="width: 100%;">
                        <img src="${item.imagem}" alt="${item.nome}">
                    </div>
                    <div class="card-body border-0 d-flex flex-column gap-2">
                        <h6 class="card-title">${item.nome}</h6>
                        <p class="card-text">R$ ${item.valor.toFixed(2)}</p>
                    </div>
                </div>
                `;
            });

        })
}

function carregaListaItensDesconto(){

    fetch('./Model/itens.json')
        .then(response => response.json())
        .then(data => {
            let arrayItens = data.itens;

            arrayItens.forEach(item => {
                listaItensDesc.innerHTML += `
                <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                    <div class="card m-0 " style="width: 100%;">
                        <img src="${item.imagem}" alt="${item.nome}">
                    </div>
                    <div class="card-body border-0 d-flex flex-column gap-2">
                        <h6 class="card-title">${item.nome}</h6>
                        <p class="card-text">R$ ${item.valor.toFixed(2)}</p>
                    </div>
                </div>
                `;
            });

        })
}