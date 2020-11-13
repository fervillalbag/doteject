
const navigationMenu = document.querySelector('#navigation-menu');
const btnBars = document.querySelector('#btn-bars');

btnBars.addEventListener('click', () => {
   navigationMenu.classList.toggle('active');
})

/* Popup Novedades */

const novedadesBtnPost = document.querySelectorAll('.novedades__link');

const novedadesBtnClose = document.querySelector('#novedadesBtnClose');
const novedadesPopup = document.querySelector('#novedadesPopup');
const novedadesOverlay = document.querySelector('#novedadesOverlay');

novedadesBtnPost.forEach(btnPost => {
   btnPost.addEventListener('click', () => {
      novedadesOverlay.classList.add('active');
      novedadesPopup.classList.add('active');
   });
});

novedadesBtnClose.addEventListener('click', () => {
   novedadesPopup.classList.remove('active');
   novedadesOverlay.classList.remove('active');
});

novedadesOverlay.addEventListener('click', () => {
   novedadesPopup.classList.remove('active');
   novedadesOverlay.classList.remove('active');
})