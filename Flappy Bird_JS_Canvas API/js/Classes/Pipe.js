export default class Pipe {
  constructor() {
    this.pipeArray = [];

    this.topPipe = {
      imageX: 28,
      imageY: 323,
    };
    this.bottomPipe = {
      imageX: 0,
      imageY: 323,
    };

    this.imageW = 26;
    this.imageH = 160;
    this.w = 48;
    this.h = 446; // 296 + 150
    this.gap = 120;
    this.dx = 2;
    this.dy = -150;
  }

  draw(canvas, ctx) {
    for (let i = 0; i < this.pipeArray.length; i++) {
      let pipe = this.pipeArray[i];
      let topPos = pipe.y;
      let bottomPos = pipe.y + this.h + this.gap;
      let bottomH = canvas.height - bottomPos;

      ctx.drawImage(
        image,
        this.topPipe.imageX,
        this.topPipe.imageY,
        this.imageW,
        this.imageH,
        pipe.x,
        topPos,
        this.w,
        this.h
      );

      ctx.drawImage(
        image,
        this.bottomPipe.imageX,
        this.bottomPipe.imageY,
        this.imageW,
        this.imageH,
        pipe.x,
        bottomPos,
        this.w,
        bottomH
      );
    }
  }

  update(canvas, bird, gameState, score, frames) {
    if (gameState.current !== gameState.playing) return;
    if (frames % 100 === 0) {
      this.pipeArray.push({
        x: canvas.width,
        y: this.dy * (Math.random() + 1),
      });
    }

    this.pipeArray.forEach((p) => {
      let bottomPos = p.y + this.h + this.gap;
      let bottomH = canvas.height - bottomPos;
      // если столкновение с верхней трубой
      if (
        bird.x + bird.radius > p.x &&
        bird.x - bird.radius < p.x + this.w &&
        bird.y + bird.radius > p.y &&
        bird.y - bird.radius < p.y + this.h
      ) {
        gameState.current = gameState.over;
        hitSound.play();
      }
      // если столкновение с нижней трубой
      if (
        bird.x + bird.radius > p.x &&
        bird.x - bird.radius < p.x + this.w &&
        bird.y + bird.radius > bottomPos &&
        bird.y - bird.radius < bottomPos + bottomH
      ) {
        gameState.current = gameState.over;
        hitSound.play();
      }
      p.x -= this.dx;
    });

    this.pipeArray = this.pipeArray.filter((p) => {
      if (p.x + this.w > 0) {
        return true;
      } else {
        score.current += 1;
        score.highscore = Math.max(score.current, score.highscore);
        localStorage.setItem("highscore", score.highscore);
        checkPointSound.play();
        return false;
      }
    });
  }
}