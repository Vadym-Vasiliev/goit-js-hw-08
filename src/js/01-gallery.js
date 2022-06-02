// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// // Описаний в документації

import SimpleLightbox from 'simplelightbox';
// console.log(galleryItems);
import { galleryItems } from './gallery-items';

// Change code below this line

const gallContainer = document.querySelector('.gallery');
const pictureMarkup = creatGallMarkup(galleryItems);

gallContainer.insertAdjacentHTML('afterbegin', pictureMarkup);
//  1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//      Використовуй готовий код з першого завдання.

/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */

function creatGallMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}"
</a>
</div>`;
    })
    .join('');
}

// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
//      Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

// +

// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
//      Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

let galleryBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
//      Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

// +
