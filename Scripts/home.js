import { iniciaDropDown } from "./iniciaDropDown.js";
import { iniciaItensHome} from "./iniciaItensHome.js";
import { iniciaListaModelos } from "./iniciaListaModelos.js";
import { iniciaAnimacaoCarrosel } from "./iniciaAnimacaoCarroseis.js";
import { carrega }  from "./iniciaComponentesAboutUs.js";

document.addEventListener('DOMContentLoaded',async ()=>{
    await Promise.all([
    carrega('../Components/header.html', '#header'),
    carrega('../Components/carroselPrincipal.html', '#carroselPrincipal'),
    carrega('./Components/informacoesEmpresa.html','#infoEmpresas'),
    carrega('../Components/carroselMarcas.html', '#carroselMarcas'),
    carrega('../Components/containerPessoas.html', '#carroselPessoas'),
    carrega('./Components/carroselModelos.html','#carroselModelos'),
    carrega('../Components/listaItensFiltrados.html', '#listaItensFiltrados'),
    carrega('../Components/techNews.html', '#techNews'),
    carrega('../Components/emailInput.html', '#emailInput'),
    carrega('../Components/footer.html','#footer'),
    ])
    iniciaDropDown()
    iniciaItensHome()
    iniciaListaModelos()
    iniciaAnimacaoCarrosel()
})