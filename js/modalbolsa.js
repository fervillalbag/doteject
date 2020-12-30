
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');
const modal4 = document.querySelector('#modal4');
const modal5 = document.querySelector('#modal5');
const modal6 = document.querySelector('#modal6');
const overlay = document.querySelector('.overlay');

button1.addEventListener('click', () => {
   modal1.classList.add('active');
   overlay.classList.add('active');
});

button2.addEventListener('click', () => {
   modal2.classList.add('active');
   overlay.classList.add('active');
});

button3.addEventListener('click', () => {
   modal3.classList.add('active');
   overlay.classList.add('active');
});

button4.addEventListener('click', () => {
   modal4.classList.add('active');
   overlay.classList.add('active');
});

button5.addEventListener('click', () => {
   modal5.classList.add('active');
   overlay.classList.add('active');
});

button6.addEventListener('click', () => {
   modal6.classList.add('active');
   overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
   modal1.classList.remove('active');
   modal2.classList.remove('active');
   modal3.classList.remove('active');
   modal4.classList.remove('active');
   modal5.classList.remove('active');
   modal6.classList.remove('active');
   overlay.classList.remove('active');
})