import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createNewElementImg (galleryItems);
imgContainer.insertAdjacentHTML('beforeend', imgMarkup);


function createNewElementImg (items){
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    }).join('');
}

imgContainer.addEventListener("click", onClickGalleryElement);
function onClickGalleryElement(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(
  `
    <img src="${event.target.dataset.source}" width="900" height="600">`,
)

instance.show() ;

imgContainer.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
})
};
    
// console.log(galleryItems);
