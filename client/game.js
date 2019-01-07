
const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)


//--------------------NEW----------------------
class SpriteObject {   //make class object
  constructor(options) {
    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.numberOfFrames = options.numberOfFrames;
    this.ticksPerFrame = options.ticksPerFrame;


    // const entries = Object.entries(options);
    // entries.forEach(e => {    // flexible properties
    //   this[e[0]] = e[1];
    // })
    this.frameIndex = 0;
    this.tickCount = 0;
  }

  render() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(
      this.image, // image src
      this.frameIndex * this.width / this.numberOfFrames, // src x-coord
      0, // src y -coord
      this.width / this.numberOfFrames, // src width
      this.height, // src height
      0, // dest x-coord
      0, // dest y-coord
      this.width / this.numberOfFrames, // dest width
      this.height // dest height
    );
  }
  update() {
    this.tickCount++;
    this.frameIndex = Math.floor(this.tickCount / 10) % this.numberOfFrames;
  }
}

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let dog = new SpriteObject({
  context: ctx,
  width: 42,
  height: 14,
  image: spriteSheet,
  numberOfFrames: 2,
  ticksPerFrame: 10
});


//--------------------NEW----------------------







//takes in options, returns a sprite object
// function sprite(options) {
//   const spriteObj = { ...options };
//   spriteObj.frameIndex = 0;
//   spriteObj.tickCount = 0;
//   spriteObj.render = () => {
//     spriteObj.context.clearRect(0, 0, 21, 14);
//     spriteObj.context.drawImage(
//       spriteObj.image, // image src
//       spriteObj.frameIndex * spriteObj.width / spriteObj.numberOfFrames, // src x-coord
//       0, // src y -coord
//       spriteObj.width / spriteObj.numberOfFrames, // src width
//       spriteObj.height, // src height
//       0, // dest x-coord
//       0, // dest y-coord
//       spriteObj.width / spriteObj.numberOfFrames, // dest width
//       spriteObj.height // dest height
//     );
//   }

//   let tickCount = 0;
//   spriteObj.update = () => {
//     tickCount++;
//     spriteObj.frameIndex = Math.floor(tickCount / 10) % spriteObj.numberOfFrames;
//   }
//   return spriteObj;
// }

// const canvas = document.getElementById('my-canvas');
// const ctx = canvas.getContext('2d');

// let dog = sprite({
//   context: ctx,
//   width: 42,
//   height: 14,
//   image: spriteSheet,
//   numberOfFrames: 2,
//   ticksPerFrame: 10
// });

//onload is a callback function, assign it to be "animate"
spriteSheet.onload = animate;

function animate() {
  dog.update();
  dog.render();
  window.requestAnimationFrame(animate);
}








