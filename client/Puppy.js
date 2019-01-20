//puppy class
import SpriteObject from './SpriteObject'

class Puppy extends SpriteObject {
  constructor(width, height, nFrames, ticksPerFrame) {
    super();
    this.width = width;
    this.height = height;
    this.nFrames = nFrames;
    this.ticksPerFrame = ticksPerFrame;
  }

  render() {
    this.context.drawImage(
      this.image, //src img
      this.frameIndex * this.width / this.nFrames, //src x
      2, //src y
      this.width / this.nFrames, // src w
      this.height, //srch
      0, //dest x
      150 - 22, //dest y
      this.width / this.nFrames, //dest w
      this.height //dest h
    );
  }

  update() {
    this.tickCount++;
    this.frameIndex = Math.floor(this.tickCount / 10) % this.nFrames;
  }

  ouch(dogY) {
    console.log("ouch")
    this.context.drawImage(
      this.image, //src img
      55, //src x
      65, //src y
      20, // src w
      10, //srch
      36, //dest x
      dogY - 8, //dest y
      20, //dest w
      10 //dest h
    );
  }
}

export default Puppy;

