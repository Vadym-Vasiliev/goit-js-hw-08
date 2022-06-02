// Ознайомся з документацією бібліотеки Vimeo плеєра.

//Додай бібліотеку як залежність проекту через npm.

//Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player,
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.

//Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.

//Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".'
import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const VIDEO_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(currentTime => {
    const valueTime = currentTime.seconds;

    localStorage.setItem(VIDEO_KEY, JSON.stringify(valueTime));
  }, 1000)
);

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

player.setCurrentTime(JSON.parse(localStorage.getItem(VIDEO_KEY)));

//Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
