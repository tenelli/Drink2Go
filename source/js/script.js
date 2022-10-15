/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


const map = L.map('map')
  .setView({
    lat: 59.968435975884354,
    lng: 30.317528294049186,
  }, 20);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../../img/main_pin.svg',
    iconSize: [38, 50]
  });

  const marker = L.marker(
    {
      lat: 59.968435975884354,
      lng: 30.317528294049186,
    },

    {
      icon: mainPinIcon,
    }
  )
  .bindPopup("Drink2Go - Интернет магазин кофейных напитков")
  .addTo(map);;

