//stationary object class
import SpriteObject from './SpriteObject'
import { canvas } from './SpriteObject'

class StationaryObject extends SpriteObject {
  constructor(width, height, srcx, srcy) {
    super();
    this.width = width;
    this.height = height;
    this.srcx = srcx;
    this.srcy = srcy;
    this.destx;
  }

  render() {
    this.context.drawImage(
      this.image, //src img
      this.srcx, //src x
      this.srcy, //src y
      this.width, //src w
      this.height, //src h
      canvas.width - this.destx, //this.width, //dest x  //this.width will be somethig else, calculated
      canvas.height - this.height, //dest y
      this.width, //dest w
      this.height //dest h
    )
  }

  update() {
    this.tickCount++;
    this.destx = Math.floor(this.tickCount * 1.5);
  }
}


export default StationaryObject;
