//jumping puppy class
import SpriteObject from './SpriteObject'

class JumpingPuppy extends SpriteObject {

  render() {
    const ycoords = [99, 85, 77, 75, 75, 77, 85, 99]
    this.context.drawImage(
      this.image, //src img
      0, //src x
      26, //src y
      36, //src w
      24, //src h
      0, //dest x
      ycoords[this.frameIndex], // dest y
      36, //dest w
      24 //dest h
    );
  }

  update() {
    this.tickCount++;
    this.frameIndex = Math.floor(this.tickCount / 12);
  }
}

export default JumpingPuppy;
