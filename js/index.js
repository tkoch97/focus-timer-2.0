const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSumFiveMinutes = document.querySelector(".sumFiveMinutes");
const buttonSubFiveMinutes = document.querySelector(".subFiveMinutes");

const iconsButtonsSongs = {
  forest: document.querySelector(".songButtons .forest svg path"),
  rain: document.querySelector(".songButtons .rain svg path"),
  coffeeShop: document.querySelector(".songButtons .coffeeShop svg path"),
  fireplace: document.querySelector(".songButtons .fireplace svg path"),
}

const buttonsSongs = {
  forest: document.querySelector(".forest"),
  rain: document.querySelector(".rain"),
  coffeeShop: document.querySelector(".coffeeShop"),
  fireplace: document.querySelector(".fireplace"),
}

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

buttonsSongs.forest.addEventListener('click', function(){
  if (!buttonsSongs.forest.classList.contains("forestClicked")) {
    buttonsSongs.forest.classList.add('forestClicked');
    buttonsSongs.rain.classList.remove('rainClicked');
    buttonsSongs.coffeeShop.classList.remove('coffeeShopClicked');
    buttonsSongs.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSongs.forest.setAttribute("fill", "#fff");
    ["rain", "coffeeShop", "fireplace"].forEach(attribute => iconsButtonsSongs[attribute].setAttribute("fill", "#323238"));
  } else {
    buttonsSongs.forest.classList.remove('forestClicked');
    iconsButtonsSongs.forest.setAttribute("fill", "#323238");
  }
})

buttonsSongs.rain.addEventListener('click', function(){
  if (!buttonsSongs.rain.classList.contains("rainClicked")) {
    buttonsSongs.rain.classList.add('rainClicked');
    buttonsSongs.forest.classList.remove('forestClicked');
    buttonsSongs.coffeeShop.classList.remove('coffeeShopClicked');
    buttonsSongs.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSongs.rain.setAttribute("fill", "#fff");
    ["forest", "coffeeShop", "fireplace"].forEach(attribute => iconsButtonsSongs[attribute].setAttribute("fill", "#323238"));
  } else {
    buttonsSongs.rain.classList.remove('rainClicked');
    iconsButtonsSongs.rain.setAttribute("fill", "#323238");
  }
})

buttonsSongs.coffeeShop.addEventListener('click', function(){
  if (!buttonsSongs.coffeeShop.classList.contains("coffeeShopClicked")) {
    buttonsSongs.coffeeShop.classList.add('coffeeShopClicked');
    buttonsSongs.rain.classList.remove('rainClicked');
    buttonsSongs.forest.classList.remove('forestClicked');
    buttonsSongs.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSongs.coffeeShop.setAttribute("fill", "#fff");
    ["forest", "rain", "fireplace"].forEach(attribute => iconsButtonsSongs[attribute].setAttribute("fill", "#323238"));
  } else {
    buttonsSongs.coffeeShop.classList.remove('coffeeShopClicked');
    iconsButtonsSongs.coffeeShop.setAttribute("fill", "#323238");
  }
})

buttonsSongs.fireplace.addEventListener('click', function(){
  if (!buttonsSongs.fireplace.classList.contains("fireplaceClicked")) {
    buttonsSongs.fireplace.classList.add('fireplaceClicked');
    buttonsSongs.rain.classList.remove('rainClicked');
    buttonsSongs.forest.classList.remove('forestClicked');
    buttonsSongs.coffeeShop.classList.remove('coffeeShopClicked');
    iconsButtonsSongs.fireplace.setAttribute("fill", "#fff");
    ["forest", "rain", "coffeeShop"].forEach(attribute => iconsButtonsSongs[attribute].setAttribute("fill", "#323238"));
  } else {
    buttonsSongs.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSongs.fireplace.setAttribute("fill", "#323238");
  }
})