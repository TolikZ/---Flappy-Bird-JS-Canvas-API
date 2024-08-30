export default class Bird {
  constructor() {
    this.state = [
      { imageX: 3, imageY: 491 },
      { imageX: 31, imageY: 491 },
      { imageX: 59, imageY: 491 },
      { imageX: 31, imageY: 491 }
    ];
    this.imageW = 17;
    this.imageH = 12;
    this.x = 100;
    this.y = 280;
    this.w = 34;
    this.h = 24;
    this.frame = 1;
    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4;
    this.rotation = 0;
    this.radius = 20;
  }

  draw(ctx) {
    let birdPos = this.state[this.frame];

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(
      image,
      birdPos.imageX,
      birdPos.imageY,
      this.imageW,
      this.imageH,
      -this.w / 2,
      -this.h / 2,
      this.w,
      this.h
    );
    ctx.restore();
  }

  update(canvas, gameState, land, frames) {
    // Скорость хлопанья птицы
    this.period = gameState.current === gameState.ready ? 10 : 5;
    // Увеличение кадра на 1 в каждом периоде
    this.frame += frames % this.period === 0 ? 1 : 0;
    // Сброс кадра до 0, если кадр > длины состояния
    this.frame = this.frame % this.state.length;

    if (gameState.current === gameState.ready) {
      this.y = 120;
      this.rotation = 0 * degree;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if (this.y + this.h / 2 >= canvas.height - land.h) {
        this.y = canvas.height - land.h - this.h / 2;
        if (gameState.current === gameState.playing) {
          gameState.current = gameState.over;
          dieSound.play();
        }
      }

      if (this.speed > this.jump) {
        this.rotation = 90 * degree;
        this.frame = 1;
      } else {
        this.rotation = -25 * degree;
      }
    }
  }

  flap() {
    this.speed = -this.jump;
  }
}