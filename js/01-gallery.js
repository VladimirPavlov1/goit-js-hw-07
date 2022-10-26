import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'

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
const linkEl=document.querySelector('.gallery__link');
const imgEl=document.querySelectorAll('.gallery__image')
galleryList.addEventListener('click',onDivGalleryClick)

let instance=""
function onDivGalleryClick(event){
    event.preventDefault()

   if(event.target.nodeName!=='IMG'){
    return
   }
 
   const largeImg=event.target.dataset.source
     instance =basicLightbox.create(
    `
    <div class="modal">
        
         <img width='1400'
             height='900' 
             src="${largeImg}"
 
          />
     
     </div>
    `
   )
   instance.show()
    
document.addEventListener('keydown',onBackDropClosePressEsc);
   function onBackDropClosePressEsc(event){
    
    if (event.code === "Escape") {
       instance.close()
        document.removeEventListener('keydown', onBackDropClosePressEsc);
   }
}
}



