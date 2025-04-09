export async function iniciaNoticiasBlog() {
    const listaNoticiasBlog = document.getElementById("containerItensNoticias")
    function carregaNoticiasBlog(){

        fetch('../Data/noticias.json')
            .then(response => response.json())
            .then(data =>{
                let arrayNoticias = data.noticias;
    
                arrayNoticias.forEach(item => {
                    listaNoticiasBlog.innerHTML+=`
                        <div class="itemNoticia">
                            <img src="${item.url}" alt="">
                            <h4>${item.titulo}</h4>
                            <h6>By by John Snow - April 17,2019</h6>
                            <p>Ut tempus leo sed magna hendrerit, non congue libero blandit.
                            Vestibulum libero diam, convallis in arcu ut, semper vulputate
                            dolor. Vestibulum ante ipsum primis in faucibus orci luctus et 
                            ultrices posuere cubilia Curae usce luctus fringilla fermentum…</p>
                            <button>Read More</button>
                            <div class="bordaEspacamento">
    
                            </div>
                        </div>`
                })
                listaNoticiasBlog.innerHTML+=`
                 <div class="mensagem">
                          <p>“Highly customizable. Excellent design. Customer services has exceeded my expectation.
                              They are quick to answer and even when they don’t know the answer right away.
                              They’ll work with you towards a solution”</p>
                            <h6>Michael Franklin</h6>
                        </div>
                        `
    
                        listaNoticiasBlog.innerHTML+=`
            <div class="itemNoticia">
                          <img src="../Assets/Images/Blog/noticia1.avif" alt="">
                          <h4>Always Look On The Bright Side Of Life</h4>
                          <h6>By by John Snow - April 17,2019</h6>
                          <p>Ut tempus leo sed magna hendrerit, non congue libero blandit.
                            Vestibulum libero diam, convallis in arcu ut, semper vulputate
                           dolor. Vestibulum ante ipsum primis in faucibus orci luctus et 
                           ultrices posuere cubilia Curae usce luctus fringilla fermentum…</p>
                           <button>Read More</button>
                           <div class="bordaEspacamento">
    
                           </div>
            `
            })
    }
    carregaNoticiasBlog()
    
}