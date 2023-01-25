const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSumFiveMinutes = document.querySelector(".sumFiveMinutes");
const buttonSubFiveMinutes = document.querySelector(".subFiveMinutes");
const buttonForestSong = document.querySelector(".forest");
const iconButtonForestSong = document.querySelector(".songButtons .forest svg path");
const buttonRainSong = document.querySelector(".songButtons .rain");
const iconButtonRainSong = document.querySelector(".songButtons .rain svg path");
const buttonCoffeeShopSong = document.querySelector(".coffeeShop");
const iconButtonCoffeeShopSong = document.querySelector(".songButtons .coffeeShop svg path");
const buttonFireplaceSong = document.querySelector(".fireplace");

buttonPlay.addEventListener('click', function () {
  buttonPause.classList.remove('hide');
  buttonPlay.classList.add('hide');
});

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
});

buttonStop.addEventListener('click', function () {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
})

buttonForestSong.addEventListener('click', function(){
  buttonForestSong.classList.toggle('forestClicked');
  buttonRainSong.classList.remove('rainClicked');
  buttonCoffeeShopSong.classList.remove('coffeeShopClicked');
  buttonFireplaceSong.classList.remove('fireplaceClicked');
})

buttonRainSong.addEventListener('click', function(){
  buttonRainSong.classList.toggle('rainClicked');
  buttonForestSong.classList.remove('forestClicked');
  buttonCoffeeShopSong.classList.remove('coffeeShopClicked');
  buttonFireplaceSong.classList.remove('fireplaceClicked');
})

buttonCoffeeShopSong.addEventListener('click', function(){
  buttonCoffeeShopSong.classList.toggle('coffeeShopClicked');
  buttonRainSong.classList.remove('rainClicked');
  buttonForestSong.classList.remove('forestClicked');
  buttonFireplaceSong.classList.remove('fireplaceClicked');
})

buttonFireplaceSong.addEventListener('click', function(){
  buttonFireplaceSong.classList.toggle('fireplaceClicked');
  buttonCoffeeShopSong.classList.remove('coffeeShopClicked');
  buttonRainSong.classList.remove('rainClicked');
  buttonForestSong.classList.remove('forestClicked');
})