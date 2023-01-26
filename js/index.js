import Sounds from "./sounds.js";

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const sounds = Sounds ();
const controls = {
  play: document.querySelector(".play"),
  pause: document.querySelector(".pause"),
  stop: document.querySelector(".stop"),
  SumFiveMinutes: document.querySelector(".sumFiveMinutes"),
  SubFiveMinutes: document.querySelector(".subFiveMinutes"),
}

const buttonsSounds = {
  forest: document.querySelector(".forest"),
  rain: document.querySelector(".rain"),
  coffeeShop: document.querySelector(".coffeeShop"),
  fireplace: document.querySelector(".fireplace"),
}

const iconsButtonsSounds = {
  forest: document.querySelector(".songButtons .forest svg path"),
  rain: document.querySelector(".songButtons .rain svg path"),
  coffeeShop: document.querySelector(".songButtons .coffeeShop svg path"),
  fireplace: document.querySelector(".songButtons .fireplace svg path"),
}

controls.play.addEventListener('click', function () {
  controls.pause.classList.remove('hide');
  controls.play.classList.add('hide');
  sounds.pressButtonSound();
});

controls.pause.addEventListener('click', function () {
  controls.pause.classList.add('hide');
  controls.play.classList.remove('hide');
  sounds.pressButtonSound();
});

controls.stop.addEventListener('click', function () {
  controls.pause.classList.add('hide');
  controls.play.classList.remove('hide');
  sounds.pressButtonSound();
})

buttonsSounds.forest.addEventListener('click', function(){
  if (!buttonsSounds.forest.classList.contains("forestClicked")) {
    buttonsSounds.forest.classList.add('forestClicked');
    buttonsSounds.rain.classList.remove('rainClicked');
    buttonsSounds.coffeeShop.classList.remove('coffeeShopClicked');
    buttonsSounds.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSounds.forest.setAttribute("fill", "#fff");
    ["rain", "coffeeShop", "fireplace"].forEach(attribute => iconsButtonsSounds[attribute].setAttribute("fill", "#323238"));
    sounds.playForestSound();
    sounds.stopFireplaceSound();
    sounds.stopCoffeeShopSound();
    sounds.stopRainSound();
  } else {
    buttonsSounds.forest.classList.remove('forestClicked');
    iconsButtonsSounds.forest.setAttribute("fill", "#323238");
    sounds.stopForestSound();
  }
})

buttonsSounds.rain.addEventListener('click', function(){
  if (!buttonsSounds.rain.classList.contains("rainClicked")) {
    buttonsSounds.rain.classList.add('rainClicked');
    buttonsSounds.forest.classList.remove('forestClicked');
    buttonsSounds.coffeeShop.classList.remove('coffeeShopClicked');
    buttonsSounds.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSounds.rain.setAttribute("fill", "#fff");
    ["forest", "coffeeShop", "fireplace"].forEach(attribute => iconsButtonsSounds[attribute].setAttribute("fill", "#323238"));
    sounds.playRainSound();
    sounds.stopForestSound();
    sounds.stopFireplaceSound();
    sounds.stopCoffeeShopSound();
  } else {
    buttonsSounds.rain.classList.remove('rainClicked');
    iconsButtonsSounds.rain.setAttribute("fill", "#323238");
    sounds.stopRainSound();
  }
})

buttonsSounds.coffeeShop.addEventListener('click', function(){
  if (!buttonsSounds.coffeeShop.classList.contains("coffeeShopClicked")) {
    buttonsSounds.coffeeShop.classList.add('coffeeShopClicked');
    buttonsSounds.rain.classList.remove('rainClicked');
    buttonsSounds.forest.classList.remove('forestClicked');
    buttonsSounds.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSounds.coffeeShop.setAttribute("fill", "#fff");
    ["forest", "rain", "fireplace"].forEach(attribute => iconsButtonsSounds[attribute].setAttribute("fill", "#323238"));
    sounds.stopRainSound();
    sounds.stopForestSound();
    sounds.stopFireplaceSound();
    sounds.playCoffeeShopSound();
  } else {
    buttonsSounds.coffeeShop.classList.remove('coffeeShopClicked');
    iconsButtonsSounds.coffeeShop.setAttribute("fill", "#323238");
    sounds.stopCoffeeShopSound();
  }
})

buttonsSounds.fireplace.addEventListener('click', function(){
  if (!buttonsSounds.fireplace.classList.contains("fireplaceClicked")) {
    buttonsSounds.fireplace.classList.add('fireplaceClicked');
    buttonsSounds.rain.classList.remove('rainClicked');
    buttonsSounds.forest.classList.remove('forestClicked');
    buttonsSounds.coffeeShop.classList.remove('coffeeShopClicked');
    iconsButtonsSounds.fireplace.setAttribute("fill", "#fff");
    ["forest", "rain", "coffeeShop"].forEach(attribute => iconsButtonsSounds[attribute].setAttribute("fill", "#323238"));
    sounds.stopRainSound();
    sounds.stopForestSound();
    sounds.stopCoffeeShopSound();
    sounds.playFireplaceSound();
  } else {
    buttonsSounds.fireplace.classList.remove('fireplaceClicked');
    iconsButtonsSounds.fireplace.setAttribute("fill", "#323238");
    sounds.stopFireplaceSound();
  }
})