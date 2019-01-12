//puppy class
import SpriteObject from './SpriteObject'
const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)

class Puppy extends SpriteObject {
  constructor(width, height, image, nFrames, ticksPerFrame) {
    super();
    this.width = width;
    this.height = height;
    this.image = image;
    this.nFrames = nFrames;
    this.ticksPerFrame = ticksPerFrame;
  }

  render() {
    console.log('rendering')
    this.context.clearRect(0, 0, spriteSheet.width, spriteSheet.height);
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

