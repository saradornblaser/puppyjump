//puppy class
import SpriteObject from './SpriteObject'

class Puppy extends SpriteObject {
  constructor(opts) {
    super(opts);
    const { width, height, image, nFrames, ticksPerFrame, } = opts;
    this.width = width;
    this.height = height;
    this.image = image;
    this.numberOfFrames = nFrames;
    this.ticksPerFrame = ticksPerFrame;
  }

  render() {
    debugger;
    console.log('rendering')
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
    console.log('update')
  }
}

export default Puppy;

