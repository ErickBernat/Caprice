import { iniciaDropDown } from "./iniciaDropDown.js";
import { iniciaItensHome} from "./iniciaItensHome.js";
import { iniciaListaModelos } from "./iniciaListaModelos.js";
import { iniciaAnimacaoCarrosel } from "./iniciaAnimacaoCarroseis.js";
import { carrega }  from "./iniciaComponentesAboutUs.js";

document.addEventListener('DOMContentLoaded',()=>{
    carrega('../Components/header.html', '#header');
    carrega('../Components/carroselPrincipal.html', '#carroselPrincipal');
    iniciaDropDown()
    iniciaItensHome()
    iniciaListaModelos()
    iniciaAnimacaoCarrosel()
})