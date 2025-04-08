export async function carrega(caminho, id) {
        const resposta = await fetch(caminho);
        const html = await resposta.text();
        document.querySelector(id).innerHTML += html;


}

    
