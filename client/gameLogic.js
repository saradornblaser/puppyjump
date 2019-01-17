//imports
import Puppy from './Puppy'
import { canvas, spriteSheet } from './SpriteObject'
// import FlyingObject from './FlyingObject'

//instance declaration
let walkingPuppy = new Puppy(72, 24, spriteSheet, 2, 10);
// let tennisBall = new FlyingObject();


//------------------------------------------------------------------------------

let jumping = false;
//functions & game logic
function animate() {
  if (jumping) {
    console.log("jumping!")
  }
  walkingPuppy.update();
  walkingPuppy.render();
  window.requestAnimationFrame(animate);
}
//onload is a callback function, assign it to be "animate"
spriteSheet.onload = animate;

window.addEventListener('keypress', jump);

function jump(evt) {
  if (evt.keyCode === 32) {
    console.log("spacebar!")
    jumping = true;
    //need to pause other dog rendering and display jump dog
    //calculate how long
    //will be based on gravity function and will be unchanging
  }
}


