//jumping puppy class
import SpriteObject from './SpriteObject'

class JumpingPuppy extends SpriteObject {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.ycoords = [49, 35, 27, 25, 27, 35, 49]
  }
  render() {
    this.context.drawImage(
      this.image, //src img
      0, //src x
      26, //src y
      this.width, //src w
      this.height, //src h
      0, //dest x
      this.ycoords[this.frameIndex], // dest y
      this.width, //dest w
      this.height //dest h
    );
  }

  update() {
    this.tickCount++;
    this.frameIndex = Math.floor(this.tickCount / 13);
  }

  ouch() {
    this.context.drawImage(
      this.image, //src img
      55, //src x
      65, //src y
      20, // src w
      10, //srch
      36, //dest x
      this.ycoords[this.frameIndex] - 8, //dest y
      20, //dest w
      10 //dest h
    );
  }
}

export default JumpingPuppy;
