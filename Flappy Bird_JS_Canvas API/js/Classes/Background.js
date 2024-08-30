export default class Background {
  constructor(canvas) {
    this.imageX = 0;
    this.imageY = 0;
    this.imageW = 144;
    this.imageH = 256;
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
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
}