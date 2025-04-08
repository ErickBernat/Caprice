export async function carrega(url, id) {
        const res = await fetch(url);
        const html = await res.text();
        document.querySelector(id).innerHTML = html;
}

    
