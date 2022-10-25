import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
console.log(galleryItems);
const bodyEl= document.querySelector('body')
const galleryList =document.querySelector('.gallery')
const markupEl=markupElemGallery(galleryItems)


galleryList.insertAdjacentHTML('beforeend',markupEl)
function markupElemGallery(galleryItems){
    
    return galleryItems.map(({preview,original,description})=>{
    return`
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;   
}).join('');
}
galleryList.insertAdjacentHTML('beforeend',markupEl);
console.log(galleryList)
const linkEl=document.querySelector('.gallery__link');
console.dir(linkEl)
const imgEl=document.querySelectorAll('.gallery__image')
galleryList.addEventListener('click',onDivGalleryClick)

function onDivGalleryClick(event){
    event.preventDefault()
    
   if(event.target.nodeName!=='IMG'){
    return
   }
   console.dir(event.target.nodeName)
   console.dir(event.target)
    console.log(event.currentTarget)
   const largeImg=event.target.dataset.source
   return basicLightbox.create(
    `
    <div class="modal">
        
         <img width='1400'
             height='900' 
             src="${largeImg}"
 
          />
     
     </div>
    `
   ).show()
    
}





// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()









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
