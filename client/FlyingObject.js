//flying object class
import SpriteObject from './SpriteObject'
import { canvas } from './SpriteObject'

export default class FlyingObject extends SpriteObject {
  constructor(width, height, xcoords, srcy, nFrames) {
    super();
    this.width = width;
    this.height = height;
    this.xcoords = xcoords;
    this.srcy = srcy;
    this.nFrames = nFrames;
    this.destx;
  }

  render(desty) {
    this.context.drawImage(
      this.image, //src img
      this.xcoords[this.frameIndex],
      this.srcy, //src y
      this.width, // src w
      this.height, //srch
      canvas.width - this.destx, //dest x
      desty, //dest y
      this.width, //dest w
      this.height //dest h
    )
  }

  update() {
    this.tickCount++;
    this.frameIndex = Math.floor(this.tickCount / 10) % this.nFrames;
    this.destx = Math.floor(this.tickCount * 2)
  }

  // random(probability) {
  //   const int = Math.random();
  //   if (int > 0 && int < probability) {
  //     return true;
  //     }
  // }
}
