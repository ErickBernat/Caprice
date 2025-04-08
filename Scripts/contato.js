import { carrega }  from "./iniciaComponentesAboutUs.js";

document.addEventListener('DOMContentLoaded',()=>{
    carrega('../Components/header.html', '#header');
    carrega('../Components/contato.html', '#contato');
    carrega('../Components/iframeMapa.html', '#iframeMapa');
    carrega('../Components/emailInput.html', '#emailInput');
    carrega('../Components/footer.html','#footer');
})


