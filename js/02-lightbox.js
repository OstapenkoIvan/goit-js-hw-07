import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = galleryMarkupGeneration(galleryItems);

function galleryMarkupGeneration(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a>`
    )
    .join("");
}

var gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
