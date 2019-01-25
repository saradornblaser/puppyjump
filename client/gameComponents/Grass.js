import { ctx, canvas } from './SpriteObject'

export default function drawGrass() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, canvas.height - 2, 400, 2);
}

