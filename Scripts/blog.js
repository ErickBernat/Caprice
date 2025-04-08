import { iniciaNoticiasBlog } from "./iniciaNoticiasBlog.js";
import { carrega }  from "./iniciaComponentesAboutUs.js";

document.addEventListener('DOMContentLoaded',()=>{
    carrega('../Components/header.html', '#header');
    carrega('../Components/blog.html', '#blog');
    carrega('../Components/emailInput.html', '#emailInput');
    carrega('../Components/footer.html','#footer');
    iniciaNoticiasBlog()
})
