export async function iniciaAnimacaoCarrosel() {
    function animacaoMarcas(){
        const carousel = document.querySelector("#carouselExample");
        const bsCarousel = new bootstrap.Carousel(carousel);
        let startX = 0;
        let endX = 0;
        let isDragging = false;
        carousel.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
    
        carousel.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
        });
    
        carousel.addEventListener("touchend", () => {
            let difference = startX - endX;
            if (difference > 50) {
                bsCarousel.next(); 
            } else if (difference < -50) {
                bsCarousel.prev(); 
            }
        });
    }
    
    
    function animacaoPessoas() {
        const carousel = document.querySelector("#carouselPessoas");
        const bsCarousel = new bootstrap.Carousel(carousel);
        let startX = 0;
        let endX = 0;
    
        carousel.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
    
        carousel.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
        });
    
        carousel.addEventListener("touchend", () => {
            let difference = startX - endX;
    
            if (difference > 50) {
                bsCarousel.next(); 
            } else if (difference < -50) {
                bsCarousel.prev(); 
            }
        });
    }
    animacaoMarcas()
    animacaoPessoas()
}