import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";

// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createMarkUpEl = createMarkUp(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", createMarkUpEl)

function createMarkUp(images){
    return images.map((item)=>
    `
    <li class="gallery__item">
   <a class="gallery__link" href="${item.preview}" onclick = "event.preventDefault()">
      <img class="gallery__image" src="${item.original}" alt="${item.description}" />
   </a>
    </li>
    `).join("")
}

new SimpleLightbox(".gallery a", {
    captionSelector:"img",
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
})