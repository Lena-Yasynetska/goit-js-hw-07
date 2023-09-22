import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const ul = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);
function createMarkup(arr) {
    return arr.map(({preview, original, description}) => {
       return `<li data preview = '${preview}' class='gallery__item js gallery__item'>
       <a class = 'gallery__link' href = '${original}'>
       <img class = "gallery__image" 
          src = '${preview}'
          alt = '${description}' />
       </a>
       </li>`
    })
.join(" ");
}
const lightboxModal = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});