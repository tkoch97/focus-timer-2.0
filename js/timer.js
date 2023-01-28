import Sounds from "./sounds.js";

export const Timer = ({minutesDisplay, secondsDisplay, controls}) => {
  const sound = Sounds()
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent);
  let numberControl = 1;

  const updateDisplay = (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined? minutes : newMinutes;
    seconds = seconds === undefined? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }
  
  const updateMinute = (minutes) => {minutesDisplay.textContent = String(minutes).padStart(2, "0")};
  
  const secondsCountdown = () => {
    timerTimeOut = setTimeout(function(){
      let newMinutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let finished = newMinutes <=0 && seconds <=0;
  
      if (seconds <= 0) {
        seconds = 10;
        --newMinutes
      }
  
      if (finished) {
        updateDisplay();
        resetControls();
        sound.timeEndSound();
        return
      }
      
      updateDisplay(newMinutes, String(seconds - 1));
      
      secondsCountdown()
    }, 1000)
  
  }
  
  const resetControls = () => {
    controls.pause.classList.add('hide');
    controls.play.classList.remove('hide');
  }
  
  const hold = () => clearTimeout(timerTimeOut);

  return {
    updateDisplay,
    secondsCountdown,
    resetControls,
    hold,
  }

}