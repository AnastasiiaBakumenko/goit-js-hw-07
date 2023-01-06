import { galleryItems } from './gallery-items.js';
// Change code below this line



const imgContainer = document.querySelector(".gallery");

const imgMarkup = createNewElementImg (galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgMarkup);

function createNewElementImg (items){
    const galleryMarkup = items.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    
    return galleryMarkup.join('');
}

    function simpleLiteBox(){
        let lightBox = new SimpleLightbox('.gallery .gallery__item', {
            captionsData : 'alt',
            captionDelay : 250,
        });
    }
    simpleLiteBox();



