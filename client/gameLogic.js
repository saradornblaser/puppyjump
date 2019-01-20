//imports
import Puppy from './Puppy'
import { canvas, spriteSheet, ctx } from './SpriteObject'
import JumpingPuppy from './JumpingPuppy';
import StationaryObject from './StationaryObject'
// import FlyingObject from './FlyingObject'

//------------instance declaration------------------//
const walkingPuppy = new Puppy(72, 20, 2, 10);
const leapingPuppy = new JumpingPuppy(36, 24);
const dogHouse = new StationaryObject(40, 34, 3, 63, 0.01);
const fireHydrant = new StationaryObject(9, 16, 76, 6, 0.1)

// let tennisBall = new FlyingObject();

//-----------functions & game logic-----------------//
//defaults
let jumping, doghouse, hydrant = false; //check if valid
let collision = false;
let replayButton = document.getElementById('replay-button');


//runs entire animation
function animate() {
  //clear before rendering
  replayButton.hidden = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //random generations
  if (!doghouse && dogHouse.random()) {
    dogHouse.tickCount = 0;
    doghouse = true;
    setTimeout(() => doghouse = false, 5000);
  }
  if (!hydrant && fireHydrant.random()) {
    fireHydrant.tickCount = 0;
    hydrant = true;
    setTimeout(() => hydrant = false, 5000);
  }


  // rendering
  if (doghouse) {
    dogHouse.render()
    dogHouse.update()
  }
  if (hydrant) {
    fireHydrant.render()
    fireHydrant.update()
  }
  if (jumping) {  //render jumping
    leapingPuppy.render()
    leapingPuppy.update()
  } else {        // or render walking
    walkingPuppy.update();
    walkingPuppy.render();
  }

  //collision logic

  if (canvas.width - dogHouse.frameIndex <= 32 && canvas.width - dogHouse.frameIndex > -32) {
    if (!jumping || leapingPuppy.ycoords[leapingPuppy.frameIndex] + leapingPuppy.height >= 150 - 32) {
      collided()
    }
  }
  if (canvas.width - fireHydrant.frameIndex <= 32 && canvas.width - fireHydrant.frameIndex > -7) {
    if (!jumping || leapingPuppy.ycoords[leapingPuppy.frameIndex] + leapingPuppy.height >= 150 - 16) {
      collided()
    }
  }

  //next frame
  if (!collision) {
    window.requestAnimationFrame(animate);
  }
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
    }, 1505);
  }
}

function collided() {
  if (jumping) console.log(leapingPuppy.ycoords[leapingPuppy.frameIndex])
  collision = true;
  jumping ? leapingPuppy.ouch(leapingPuppy.ycoords[leapingPuppy.frameIndex] - 8) : walkingPuppy.ouch(canvas.height - walkingPuppy.height);
  replayButton.hidden = false;

  replayButton.addEventListener('click', reload);


  function reload() {
    window.location.reload(false);
    // $('#my-canvas').load(document.URL + ' #my-canvas');
  }

  // onclick() = () => {
  //   animate()
  // }
}
