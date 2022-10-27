import { galleryItems } from './gallery-items.js';
// Change code below this line


const bodyEl= document.querySelector('body')
const galleryList =document.querySelector('.gallery')
const markupEl=markupElemGallery(galleryItems)

galleryList.insertAdjacentHTML('beforeend',markupEl)

function markupElemGallery(galleryItems){
    
    return galleryItems.map(({preview,original,description})=>{
    return`
    <div class="gallery">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                title="${description}"
            />
        </a>
    </div>`;   
}).join('');
}


// const linkEl=document.querySelector('.gallery__link');
// const imgEl=document.querySelectorAll('.gallery__image')
galleryList.addEventListener('click',onDivGalleryClick)
let gallery = new SimpleLightbox('.gallery__item');
console.log(gallery)
gallery.on('show.simplelightbox', function () {
	console.log()
});

function onDivGalleryClick(event){
    event.preventDefault()


   if(event.target.nodeName!=='IMG'){
    return
   }
   gallery.options.captionDelay=250;
   console.dir(event.target)
}
