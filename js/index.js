import Sounds from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import {
  minutesDisplay,
  secondsDisplay,
  controls,
  buttonsSounds,
  iconsButtonsSounds
} from "./elements.js"

const timer = Timer({minutesDisplay, secondsDisplay, controls});
const sounds = Sounds ();

Events({controls, sounds, timer});