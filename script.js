const listaItens = document.getElementById("listaItens");
const listaItensFiltro = document.getElementById("listaItensFiltro");
const listaModelos = document.getElementById("Carrosel-modelos");
let arrayItens = []
let arrayModelos = []
const dropUsd = document.getElementById("dropUsd");
const menuUsd = document.getElementById("menuUsd");
const dropEnglish = document.getElementById("d");
const menuEnglish = document.getElementById("m");

dropUsd.addEventListener(ativaDropDown(dropUsd,menuUsd));
dropEnglish.addEventListener(ativaDropDown(dropEnglish,menuEnglish))



function ativaDropDown(botao,drop){
            botao.addEventListener("mouseenter", function () {
                drop.classList.add("show");
                botao.style.backgroundColor = "transparent";
                drop.style.animation = "slideScale 0.5s ease-out"
                botao.style.color = "#393939"
                botao.style.transition = '2s'
            });
    
            botao.addEventListener("mouseleave", function () {
                drop.style.animation = "slideScaleOut 0.5s ease-out";
                setTimeout(() => {
                    drop.classList.remove("show");;
                  }, "300");
            
            });
}





function carregaListaItens(){

    fetch('./Data/itens.json')
        .then(response => response.json())
        .then(data => {
            let arrayItens = data.itens;

            arrayItens.forEach(item => {
                listaItens.innerHTML += `
                <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                    <div class="card m-0 " style="width: 100%;">
                        <img src="${item.imagem}" alt="${item.nome}">
                    </div>
                    <div class="card-body texto-card border-0 d-flex flex-column gap-2">
                        <h6 class="card-title">${item.nome}</h6>
                        <p class="card-text">R$ ${item.valor.toFixed(2)}</p>
                    </div>
                </div>
                `;
                listaItensFiltro.innerHTML += `
                <div class="col mb-4 gap-2 d-flex flex-column align-itens-start">
                    <div class="card m-0 " style="width: 100%;">
                        <img src="${item.imagem}" alt="${item.nome}">
                    </div>
                    <div class="card-body texto-card border-0 d-flex flex-column gap-2">
                        <h6 class="card-title">${item.nome}</h6>
                        <p class="card-text">R$ ${item.valor.toFixed(2)}</p>
                    </div>
                </div>
                `;
                
            });

        })
}


        

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


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselExample");
    const bsCarousel = new bootstrap.Carousel(carousel);
    let startX = 0;
    let endX = 0;

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    carousel.addEventListener("")

    carousel.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", () => {
        let difference = startX - endX;

        if (difference > 50) {
            bsCarousel.next(); 
        } else if (difference < -50) {
            bsCarousel.prev(); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselPessoas");
    const bsCarousel = new bootstrap.Carousel(carousel);
    let startX = 0;
    let endX = 0;

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", () => {
        let difference = startX - endX;

        if (difference > 50) {
            bsCarousel.next(); 
        } else if (difference < -50) {
            bsCarousel.prev(); 
        }
    });
});