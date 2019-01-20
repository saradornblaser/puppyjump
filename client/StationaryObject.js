//stationary object class
import SpriteObject from './SpriteObject'
import { canvas } from './SpriteObject'

class StationaryObject extends SpriteObject {
  constructor(width, height, srcx, srcy, probability) {
    super();
    this.width = width;
    this.height = height;
    this.srcx = srcx;
    this.srcy = srcy;
    this.probability = probability;
  }

  render() {
    this.context.drawImage(
      this.image, //src img
      this.srcx, //src x
      this.srcy, //src y
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
    if (int > 0 && int < this.probability) {
      return true;
    }
  }
}


export default StationaryObject;
