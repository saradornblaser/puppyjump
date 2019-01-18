//stationary object class
import SpriteObject from './SpriteObject'
import { canvas } from './SpriteObject'

class StationaryObject extends SpriteObject {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  render() {
    this.context.drawImage(
      this.image, //src img
      0, //src x
      61, //src y
      this.width, //src w
      this.height, //src h
      canvas.width - this.frameIndex, //this.width, //dest x  //this.width will be somethig else, calculated
      canvas.height - this.height, //dest y
      this.width, //dest w
      this.height //dest h
    )
  }

  update() {
    this.tickCount++;
    this.frameIndex = Math.floor(this.tickCount * 2);
  }

  random() {
    const int = Math.random();
    if (int < 1 && int > 0.99) {
      return true;
    }
  }
}


export default StationaryObject;
