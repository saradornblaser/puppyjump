


const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)

//takes in options, returns a sprite object
function sprite(options) {
  const spriteObj = { ...options };
  spriteObj.frameIndex = 0;
  spriteObj.tickCount = 0,
    spriteObj.ticksPerFrame = options.ticksPerFrame || 0;
  spriteObj.numberOfFrames = options.numberOfFrames || 1;

  spriteObj.render = () => {
    spriteObj.context.drawImage(spriteObj.image, spriteObj.frameIndex * spriteObj.width / spriteObj.numberOfFrames, 0, spriteObj.width / spriteObj.numberOfFrames, spriteObj.height, 0, 0, spriteObj.width / spriteObj.numberOfFrames, spriteObj.height);
  }

  spriteObj.update = () => {
    spriteObj.tickCount += 1;
    if (spriteObj.tickCount > spriteObj.ticksPerFrame) {
      spriteObj.tickCount = 0;
      if (spriteObj.frameIndex < spriteObj.numberOfFrames) {
        spriteObj.frameIndex += 1
      }
    }
  }
  return spriteObj;
}

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let dog = sprite({
  context: ctx,
  width: 42,
  height: 14,
  image: spriteSheet,
  numberOfFrames: 2,
  ticksPerFrame: 10
});

spriteSheet.onload = () => {
  dog.render();
}


function gameLoop() {

  window.requestAnimationFrame(gameLoop);

  dog.update();
  dog.render();
}

spriteSheet.addEventListener("load", gameLoop);
