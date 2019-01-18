//imports
import Puppy from './Puppy'
import { canvas, spriteSheet, ctx } from './SpriteObject'
import JumpingPuppy from './JumpingPuppy';
import StationaryObject from './StationaryObject'
// import FlyingObject from './FlyingObject'

//------------instance declaration------------------//
let walkingPuppy = new Puppy(72, 20, 2, 10);
let leapingPuppy = new JumpingPuppy();
let dogHouse = new StationaryObject(42, 34);
// let tennisBall = new FlyingObject();

//-----------functions & game logic-----------------//
let jumping = false;    //default !jumping
let doghouse = false;

//runs entire animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) //clear before rendering
  if (!doghouse && dogHouse.random()) {
    console.log('random')
    dogHouse.tickCount = 0;
    doghouse = true;
    setTimeout(() => doghouse = false, 5000);
  }
  if (doghouse) {
    dogHouse.render()
    dogHouse.update()
  }
  if (jumping) {  //render jumping
    leapingPuppy.render()
    leapingPuppy.update()
  } else {        // or render walking
    walkingPuppy.update();
    walkingPuppy.render();
  }
  if (canvas.width - dogHouse.frameIndex <= 32 && canvas.width - dogHouse.frameIndex > -34) {
    if (!jumping || leapingPuppy.ycoords[leapingPuppy.frameIndex] < 150 - 34 - leapingPuppy.height) {
      console.log("collision!")
    }
  }

  window.requestAnimationFrame(animate);
}
//onload is a callback function, assign it to be "animate"
spriteSheet.onload = animate;

//jump on spacebar press
window.addEventListener('keypress', jump);
function jump(evt) {

  if (!jumping && evt.keyCode === 32) {
    jumping = true;
    setTimeout(() => {
      jumping = false;
      leapingPuppy.tickCount = 0;
    }, 1500);
  }
}
