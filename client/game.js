


const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)

//takes in options, returns a sprite object
function sprite(options) {
  const spriteObj = { ...options };
  spriteObj.frameIndex = 0;
  spriteObj.tickCount = 0;
  spriteObj.render = () => {
    spriteObj.context.clearRect(0, 0, 21, 14);
    spriteObj.context.drawImage(
      spriteObj.image, // image src
      spriteObj.frameIndex * spriteObj.width / spriteObj.numberOfFrames, // src x-coord
      0, // src y -coord
      spriteObj.width / spriteObj.numberOfFrames, // src width
      spriteObj.height, // src height
      0, // dest x-coord
      0, // dest y-coord
      spriteObj.width / spriteObj.numberOfFrames, // dest width
      spriteObj.height // dest height
    );
  }

  let tickCount = 0;
  spriteObj.update = () => {
    tickCount++;
    spriteObj.frameIndex = Math.floor(tickCount / 10) % spriteObj.numberOfFrames;
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

//onload is a callback function, assign it to be animate
spriteSheet.onload = animate;

function animate() {
  dog.update();
  dog.render();
  window.requestAnimationFrame(animate);
}








