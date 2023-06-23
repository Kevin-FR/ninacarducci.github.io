
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const galleryItems = document.getElementsByClassName("gallery-item");
const filters = document.querySelectorAll(".gallery-filter button");
const extensionLargeImage = "_xl.webp";

function imageLarge(filename) {
    const src =  filename.substring(0, filename.lastIndexOf('.')) || filename;
    return src + extensionLargeImage;
  };

let currentIndex = 0;
// Afficher la modale avec l'image sélectionnée
function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImage.src = imageLarge(galleryItems[index].src);
}

// Fermer la modale
function closeModal() {
    modal.style.display = "none";
}

// Changer l'image affichée
function changeImage(n) {
    currentIndex += n;
    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }
    modalImage.src = imageLarge(galleryItems[currentIndex].src);
}

// Ajouter des événements de clic aux images de la galerie
for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener("click", function (index) {
        return function () {
            openModal(index);
        };
    }(i));
}

function filterItems(nameFilter){
    for (var i = 0; i < galleryItems.length; i++) {
        if(nameFilter === 'Tous'){
            galleryItems[i].classList.remove("hide");
        }else{
            if(galleryItems[i].dataset.galleryTag != nameFilter){
                galleryItems[i].classList.add("hide");
            }else{
                galleryItems[i].classList.remove("hide");
            }
        }
    }
    for(var i = 0; i < filters.length; i++){
        if(filters[i].innerHTML == nameFilter){
            filters[i].classList.add("gallery-filter-active");
        }else{
            filters[i].classList.remove("gallery-filter-active");
        }
    }

}


// Ajouter un événement de clic pour fermer la modale
//modal.addEventListener("click", closeModal);
