// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".

import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

feedBackForm.addEventListener('submit', formButtonSubmit);

messageInput();
feedBackForm.addEventListener(
  'input',
  throttle(evt => {
    const { name, value } = evt.target;
    let saveDate = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};
    saveDate[name] = value;

    localStorage.setItem(FORM_KEY, JSON.stringify(saveDate));
  }, 500)
);

//Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.

function messageInput() {
  const savedMassage = localStorage.getItem(FORM_KEY);

  if (savedMassage) {
    Object.entries(JSON.parse(savedMassage)).forEach(([name, value]) => {
      feedBackForm.elements[name].value = value;
    });
  }
}

//Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
//message та їхніми поточними значеннями.

function formButtonSubmit(evt) {
  evt.preventDefault();

  const saveData = localStorage.getItem(FORM_KEY);

  if (!saveData) return;
  console.log(JSON.parse(saveData));

  feedBackForm.reset();

  localStorage.removeItem(FORM_KEY);
}

//Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
