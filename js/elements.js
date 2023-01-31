const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const controls = {
  play: document.querySelector(".play"),
  pause: document.querySelector(".pause"),
  stop: document.querySelector(".stop"),
  addMinute: document.querySelector(".addMinute"),
  subMinute: document.querySelector(".subMinute"),
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

export {
  minutesDisplay,
  secondsDisplay,
  controls,
  buttonsSounds,
  iconsButtonsSounds
}