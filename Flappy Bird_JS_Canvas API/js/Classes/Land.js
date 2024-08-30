export default class Land {
  constructor(canvas) {
    this.imageX = 293;
    this.imageY = 0;
    this.imageW = 168;
    this.imageH = 56;
    this.x = 0;
    this.y = canvas.height - 140;
    this.w = canvas.width + canvas.width / 2;
    this.h = 140;
    this.dx = 3;
  }

  draw(ctx) {
    ctx.drawImage(
      image,
      this.imageX,
      this.imageY,
      this.imageW,
      this.imageH,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  update(canvas, gameState) {
    if (gameState.current === gameState.playing) {
      this.x = (this.x - this.dx) % (canvas.width / 2);
    }
  }
}