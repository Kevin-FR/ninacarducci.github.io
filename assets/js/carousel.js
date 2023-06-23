const carourelItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelectorAll('.carousel-dots');
let carouselIndex = 0;

console.log(carourelItems[0]);

function carouselChange(a,b){
    carouselIndex += a;
    if (carouselIndex >= carourelItems.length) {
        carouselIndex = 0;
    } else if (carouselIndex < 0) {
        carouselIndex = carourelItems.length - 1;
    }
    
    if(b){
        carouselIndex = b - 1;
    }
    
    for (var ci = 0; ci < carourelItems.length; ci++) {
        if(ci == carouselIndex){
            carourelItems[ci].classList.add("active");
            carouselDots[ci].classList.add("active");
        }else{
            carourelItems[ci].classList.remove("active");
            carouselDots[ci].classList.remove("active");
        }
    }

}


