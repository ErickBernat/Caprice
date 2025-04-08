export async function iniciaDropDown() {
const dropUsd = document.getElementById("dropUsd");
const menuUsd = document.getElementById("menuUsd");
const dropEnglish = document.getElementById("d");
const menuEnglish = document.getElementById("m");
ativaDropDown(dropUsd,menuUsd);
ativaDropDown(dropEnglish,menuEnglish);


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
}

