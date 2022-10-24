import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
console.log(galleryItems);

const galleryList =document.querySelector('gallery')

const createElemGallery= galleryItems=>{
galleryItems.map(item=>{
    return 
    const instance = basicLightbox.create(`
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="small-image.jpg"
        data-source="large-image.jpg"
        alt="Image description"
      />
    </a>
    </div>
    `)
    
})


}

// const instance = basicLightbox.create(`
// <div class="gallery__item">
// <a class="gallery__link" href="large-image.jpg">
//   <img
//     class="gallery__image"
//     src="small-image.jpg"
//     data-source="large-image.jpg"
//     alt="Image description"
//   />
// </a>
// </div>
// `)



// instance.show()
// const basicLightbox = require('basiclightbox')
// const visible = basicLightbox.visible()
