const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

export default class SpriteObject {   //make class object
  constructor() {
    this.context = ctx;
    this.frameIndex = 0;
    this.tickCount = 0;
  }
}
