export async function iniciaListaModelos() {
    const listaModelos = document.getElementById("Carrosel-modelos");
    function carregaListaModelos(){

        fetch('./Data/modelos.json').then(response => response.json()).then(data => {
            let arrayModelos = data.modelos;
    
            arrayModelos.forEach(item =>{
                listaModelos.innerHTML +=`
                <div class="carousel-item-Modelos">
                    <div class="carousel-item-informacoes">
                      <h5>${item.titulo}</h5>
                      <h6>35 products from $35.00</h6>
                      <a href=""> > ${item.links[0]}</a>
                      <a href=""> > ${item.links[1]}</a>
                      <a href=""> > ${item.links[2]}</a>
                      <a href=""> > ${item.links[3]}</a>
                      <button>Shop now</button>
                    </div>
                    <div class=imagem-Modelos>
                      <img src="${item.Url}" alt="">
                    </div>  
                </div>
                
                `
            })
        })
    }
    carregaListaModelos()
}