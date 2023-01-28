export default function playSounds() {

    const forestSound = new Audio('./assets/audio/Floresta.wav');
    const rainSound = new Audio('./assets/audio/Chuva.wav');
    const coffeeShopSound = new Audio('./assets/audio/Cafeteria.wav');
    const fireplaceSound = new Audio('./assets/audio/Lareira.wav');
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  
  
  function playForestSound() {
    forestSound.play();
    forestSound.loop = true;
  }
  
  function stopForestSound() {
    forestSound.pause();
  }
  
  function playRainSound() {
    rainSound.play();
    rainSound.loop = true;
  }
  
  function stopRainSound() {
    rainSound.pause();
  }
  
  function playCoffeeShopSound() {
    coffeeShopSound.play();
    coffeeShopSound.loop = true;
  }
  
  function stopCoffeeShopSound() {
    coffeeShopSound.pause();
  }
  
  function playFireplaceSound() {
    fireplaceSound.play();
    fireplaceSound.loop = true;
  }
  
  function stopFireplaceSound() {
    fireplaceSound.pause();
  }
  
  function pressButtonSound() {
    buttonPress.play();
  }
  
  function timeEndSound() {
    kitchenTimer.play();
  }

  return {
    playCoffeeShopSound,
    playFireplaceSound,
    playForestSound,
    playRainSound,
    stopCoffeeShopSound,
    stopFireplaceSound,
    stopForestSound,
    stopRainSound,
    pressButtonSound,
    timeEndSound
  }

}



