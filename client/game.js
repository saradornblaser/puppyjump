


const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)

//takes in options, returns a sprite object
function sprite(options) {
  const spriteObj = { ...options };

  spriteObj.render = () => {
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    //image-src, source top-left x&y, width, height, destination top-left x&y, width, height
    spriteObj.context.drawImage(spriteObj.image, 0, 0, spriteObj.width, spriteObj.height, 0, 0, spriteObj.width, spriteObj.height);
  }

  return spriteObj;
}

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let dog = sprite({
  context: ctx,
  width: 21,
  height: 14,
  image: spriteSheet,
  sourceX: 0
});

spriteSheet.onload = () => {
  dog.render();
}

window.dog = dog;
