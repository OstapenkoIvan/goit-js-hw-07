import { galleryItems } from "./gallery-items.js";
// Change code below this line

let galleryEl = document.querySelector(".gallery");
let largeImage = null;

galleryEl.innerHTML = makeGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", openLightBoxImage);

function makeGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function openLightBoxImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  largeImage = createLargeImage(event.target.dataset.source);
  largeImage.show();

  window.addEventListener("keydown", closeWithEsc, { once: true });
}

function createLargeImage(data) {
  return basicLightbox.create(`
    <img src="${data}" width="800" height="600">
`);
}

function closeWithEsc(event) {
  if (event.keyCode === 27) {
    largeImage.close();
  }
}
