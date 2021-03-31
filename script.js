import gallery from './gallery.js'


const galleryList = document.querySelector('.js-gallery')
const galleryMarkup = createGalleryMarkup(gallery);
const modal = document.querySelector('.js-lightbox')
const HiResPic = document.querySelector('.lightbox__image')
const btnCloseModal = document.querySelector('[data-action="close-lightbox"]')



galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', openModal)
btnCloseModal.addEventListener('click',closeModal)



function createGalleryMarkup(gallery) {
  return gallery.map(({ original, preview, description }) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href='${ original }'
  >
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${ original }'
      alt='${description}'
    />
  </a>
</li>
`}).join('')
}

function openModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return
  }
  HiResPic.src = e.target.dataset.source;
  HiResPic.alt = e.target.alt;
  modal.classList.add('is-open')
}

function closeModal() {
  HiResPic.src = '';
  HiResPic.alt = '';
  modal.classList.remove('is-open')

 }