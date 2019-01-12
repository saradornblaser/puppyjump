import Puppy from './Puppy'
const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)

let jumpingPuppy = new Puppy(42, 14, spriteSheet, 2, 10);
console.log(jumpingPuppy)

function animate() {
  jumpingPuppy.update();
  jumpingPuppy.render();
  window.requestAnimationFrame(animate);
}
//onload is a callback function, assign it to be "animate"
spriteSheet.onload = animate;




