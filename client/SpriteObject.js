const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)

export default class SpriteObject {   //make class object
  constructor() {
    this.context = ctx;
    this.frameIndex = 0;
    this.tickCount = 0;
  }
}

export { spriteSheet, canvas }

//walking dogs: (1, 1) to (72, 24) (2 frames)
//jumping dog:  (1, 26) to (36, 49)
