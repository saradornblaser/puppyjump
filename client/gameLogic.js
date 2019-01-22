//imports
import Puppy from './Puppy'
import { canvas, spriteSheet, ctx } from './SpriteObject'
import JumpingPuppy from './JumpingPuppy';
import StationaryObject from './StationaryObject'
import drawGrass from './Grass'
import FlyingObject from './FlyingObject'
const replayButton = document.getElementById('replay-button');
let pointDisplay = document.getElementById('points-display');

//------------instance declaration------------------//
const walkingPuppy = new Puppy(72, 20, 2);
const leapingPuppy = new JumpingPuppy(36, 24);
const dogHouse = new StationaryObject(40, 34, 3, 63);
const fireHydrant = new StationaryObject(9, 18, 76, 5)
const fireHydrant2 = new StationaryObject(9, 18, 76, 5)

//-----------functions & game logic-----------------//
//defaults
let jumping = false;
let doghouse = false;
let hydrant = false;
let hydrant2 = false;
let collision = false;
fireHydrant.tickCount = 51
fireHydrant2.tickCount = 51
let bones = [null, null, null, null, null];
let balls = [null, null, null, null, null, null, null, null]
let nextToy = true;
let points = 0;

//runs entire animation
function animate() {
  //clear before rendering
  replayButton.hidden = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "aliceblue"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  //random generations
  if (!doghouse && random(0.01) && fireHydrant.tickCount > 50 && fireHydrant2.tickCount > 50) {
    dogHouse.tickCount = 0;
    doghouse = true;
    setTimeout(() => doghouse = false, 10000);
  }
  if (!hydrant && random(0.05) && dogHouse.tickCount > 100) {
    fireHydrant.tickCount = 0;
    hydrant = true;
    setTimeout(() => hydrant = false, 5000);
  }
  if (!hydrant2 && random(0.005) && dogHouse.tickCount > 100 && fireHydrant.tickCount > 50) {
    fireHydrant2.tickCount = 0;
    hydrant2 = true;
    setTimeout(() => hydrant2 = false, 5000);
  }

  for (let i = 0; i < bones.length; i++) {
    if (bones[i] && bones[i].destx > 409) bones[i] = null;
    if (random(.005) && !bones[i] && nextToy) {  //if bones[i] is null (available)
      bones[i] = new FlyingObject(9, 9, [42, 51, 62, 73], 31, 4);
      nextToy = false;
      setTimeout(() => nextToy = true, 300)
    }
  }
  for (let i = 0; i < balls.length; i++) {
    if (balls[i] && balls[i].destx > 405) balls[i] = null;
    if (random(.005) && !balls[i] && nextToy) {  //if balls[i] is null (available)
      balls[i] = new FlyingObject(5, 5, [5, 12], 54, 2);
      nextToy = false;
      setTimeout(() => nextToy = true, 300)
    }
  }

  // rendering
  if (doghouse) {
    dogHouse.render(), dogHouse.update();
  }
  if (hydrant) {
    fireHydrant.render(), fireHydrant.update();
  }
  if (hydrant2) {
    fireHydrant2.render(), fireHydrant2.update();
  }
  drawGrass();
  if (jumping) {  //render jumping
    leapingPuppy.update(), leapingPuppy.render();
  } else {        // or render walking
    walkingPuppy.update(), walkingPuppy.render();
  }
  for (let i = 0; i < bones.length; i++) {
    if (bones[i]) {
      bones[i].update()
      bones[i].render(25)
    }
  }
  const heights = [40, 50]
  for (let i = 0; i < balls.length; i++) {
    if (balls[i]) {
      balls[i].update()
      balls[i].render(heights[i % 2])
    }
  }

  //collision logic
  if (canvas.width - dogHouse.destx <= 32 && canvas.width - dogHouse.destx > -32) {
    if (!jumping || leapingPuppy.ycoords[leapingPuppy.frameIndex] + leapingPuppy.height >= canvas.height - 32) {
      collided()
    }
  }
  if (canvas.width - fireHydrant.destx <= 32 && canvas.width - fireHydrant.destx > -5) {
    if (!jumping || leapingPuppy.ycoords[leapingPuppy.frameIndex] + leapingPuppy.height >= canvas.height - 20) {
      collided()
    }
  }
  if (canvas.width - fireHydrant2.destx <= 32 && canvas.width - fireHydrant2.destx > -5) {
    if (!jumping || leapingPuppy.ycoords[leapingPuppy.frameIndex] + leapingPuppy.height >= canvas.height - 20) {
      collided()
    }
  }

  //toys and points logic
  if (jumping && leapingPuppy.ycoords[leapingPuppy.frameIndex] < 30) {
    for (let i = 0; i < bones.length; i++) {
      if (bones[i] && canvas.width - bones[i].destx < 30 && canvas.width - bones[i].destx > 10) {
        points += 25;
        pointDisplay.innerHTML = points + ' points';
        bones[i] = null;
      }
    }
  }

  if (jumping && leapingPuppy.ycoords[leapingPuppy.frameIndex] < 50) {
    for (let i = 0; i < balls.length; i++) {
      if (balls[i] && canvas.width - balls[i].destx < leapingPuppy.width && canvas.width - balls[i].destx > 10) {
        points += 10;
        pointDisplay.innerHTML = points + ' points';
        balls[i] = null;
      }
    }
  }

  //next frame
  if (!collision) {
    window.requestAnimationFrame(animate);
  }
}

//onload is a callback function, assign it to be "animate"
spriteSheet.onload = animate;



//------------------Auxiliary functions-----------------------//

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

//called on collisions
function collided() {
  collision = true;
  jumping ? leapingPuppy.ouch() : walkingPuppy.ouch();
  replayButton.hidden = false;
  replayButton.addEventListener('click', reload);
}

//replay button
function reload() {
  window.location.reload(false);
}

//function to calculate when to randomly generate a sprite
function random(probability) {
  const int = Math.random();
  if (int > 0 && int < probability) {
    return true;
  }
}
