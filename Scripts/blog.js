import { iniciaNoticiasBlog } from "./iniciaNoticiasBlog.js";
import { carrega }  from "./iniciaComponentesAboutUs.js";

document.addEventListener('DOMContentLoaded',()=>{
    carrega('../Components/header.html', '#header');
    iniciaNoticiasBlog()
})
