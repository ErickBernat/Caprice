import { iniciaMembros } from "./iniciaMembros.js";
import { carrega }  from "./iniciaComponentesAboutUs.js";
import { iniciaAnimacaoCarrosel } from "./iniciaAnimacaoCarroseis.js";



document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        carrega('../Components/welcomeAbout.html', '#welcomeAbout'),
        carrega('../Components/informacoesEmpresa.html', '#informacoesEmpresa'),
        carrega('../Components/ourSkills.html', '#ourSkills'),
        carrega('../Components/containerPessoas.html', '#containerPessoas'),
        carrega('../Components/teamMembers.html', '#teamMembers'),
        carrega('../Components/header.html', '#header'),
        carrega('../Components/carroselMarcas.html', '#carroselMarcas'),
        carrega('../Components/emailInput.html', '#emailInput'),
        carrega('../Components/footer.html','#footer'),
    ]);
    iniciaAnimacaoCarrosel()
    iniciaMembros();
});


