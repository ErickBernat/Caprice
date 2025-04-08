export async function iniciaMembros() {
    const listaMembros = document.getElementById("listaMembros");
    function carregaListaMembros(){

        fetch('../Data/membros.json')
            .then(response => response.json())
            .then(data => {
                let arrayItens = data.membros;
    
                arrayItens.forEach(item => {
                    listaMembros.innerHTML += `
                    <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                        <div class="card m-0 " " style="width: 100%;">
                            <img src="${item.imagem}" alt="${item.nome}">
                        <div class="card-body texto-card border-0 d-flex flex-column gap-2">
                            <h6 class="card-title">${item.nome}</h6>
                            <p class="card-text">${item.cargo}</p>
                        </div>
                        </div>
                        
                    </div>
                    `;
                });
            })
    }
    carregaListaMembros()
}