import { iniciaSubMenuItem } from "./iniciaSubMenuItem.js";

export async function iniciaItensHome() {
    const listaItens = document.getElementById("listaItens");
    const listaItensFiltro = document.getElementById("listaItensFiltro");
    function carregaListaItens(){

        fetch('../Data/itens.json')
            .then(response => response.json())
            .then(data => {
                let arrayItens = data.itens;
    
                arrayItens.forEach(item => {
                    listaItens.innerHTML += `
                    <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                        <div class="card m-0 " id="${item.id}" style="width: 100%;">
                            <img src="${item.imagem}" alt="${item.nome}">
                            <div id="sub${item.id}" class="subMenuCard">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-search" viewBox="0 0 16 16">
                                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                                </svg>  
                            </div>
                        </div>
                        <div class="card-body texto-card border-0 d-flex flex-column gap-2">
                            <h6 class="card-title">${item.nome}</h6>
                            <p class="card-text">R$ ${item.valor.toFixed(2)}</p>
                        </div>
                    </div>
                    `;
                });
    
                let arrayItensFiltrados = data.itensFiltrados;
    
                arrayItensFiltrados.forEach(item => {
    
                    listaItensFiltro.innerHTML += `
                    <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                        <div class="card m-0 "id="${item.id}" style="width: 100%;">
                            <img src="${item.imagem}" alt="${item.nome}">
                            <div id="sub${item.id}" class="subMenuCard">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-search" viewBox="0 0 16 16">
                                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                                </svg>  
                            </div>
                        </div>
                        <div class="card-body texto-card border-0 d-flex flex-column gap-2">
                            <h6 class="card-title">${item.nome}</h6>
                            <p class="card-text">R$ ${item.valor.toFixed(2)}</p>
                        </div>
                    </div>
                    `;
                    
                });
    
    
                arrayItensFiltrados.forEach(item => {
                    iniciaSubMenuItem(item.id);
                });
                arrayItens.forEach(item => {
                    iniciaSubMenuItem(item.id);
                });
    
            })
    }
    carregaListaItens()
}