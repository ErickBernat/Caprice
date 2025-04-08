export async function iniciaSubMenuItem(idItem) {

    function ativaSubMenu(id){
        let  card = document.getElementById(`${id}`);
        let submenu = document.getElementById(`sub${id}`)
        card.addEventListener("mouseenter", () =>{
            submenu.style.display = 'flex ';
            submenu.style.animation = 'slideScale 0.4s ease'
        })
        card.addEventListener("mouseleave", () =>{
              submenu.style.animation = 'slideScaleOut  0.8s ease'
              setTimeout(() => {
                submenu.style.display = 'none ';
              }, 400);
       
          
        })
    }

    ativaSubMenu(idItem);
}