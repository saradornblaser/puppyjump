import Puppy from './Puppy'
const spriteSheet = new Image();
spriteSheet.src = '/sprites.png'; // this is the URL (from client perspective)
const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

global.canvas = canvas;

spriteSheet.onload = () => {
  let jumpingPuppy = new Puppy({
    width: 42,
    height: 14,
    image: spriteSheet,
    nFrames: 2,
    ticksPerFrame: 10,
    context,
    canvas
  });
  function animate() {
    jumpingPuppy.update();
    context.clearRect(0, 0, canvas.width, canvas.height);
    jumpingPuppy.render();  
    window.requestAnimationFrame(animate);
  }
  animate();
}
