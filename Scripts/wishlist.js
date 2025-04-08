import { carrega }  from "./iniciaComponentesAboutUs.js";

document.addEventListener('DOMContentLoaded',()=>{
    carrega('../Components/header.html', '#header');
    carrega('../Components/emailInput.html', '#emailInput');
    carrega('../Components/footer.html','#footer');
    carrega('../Components/wishlist.html','#wishlist');
})


