class GetReadyMsg {
  constructor() {
    this.imageX = 295;
    this.imageY = 59;
    this.imageW = 92;
    this.imageH = 25;
    this.x = 100;
    this.y = 150;
    this.w = 300;
    this.h = 90;
  }

  draw(canvas, ctx, gameState) {
    if (gameState.current === gameState.ready) {
      ctx.drawImage(
        image,
        this.imageX,
        this.imageY,
        this.imageW,
        this.imageH,
        canvas.width / 2 - this.w / 2,
        canvas.height / 2 - 200,
        this.w,
        this.h
      );
    }
  }
}

class GetReadyBird {
  constructor() {
    this.imageX = 292;
    this.imageY = 91;
    this.imageW = 57;
    this.imageH = 49;
    this.x = 100;
    this.y = 150;
    this.w = 150;
    this.h = 125;
  }

  draw(canvas, ctx, gameState) {
    if (gameState.current === gameState.ready) {
      ctx.drawImage(
        image,
        this.imageX,
        this.imageY,
        this.imageW,
        this.imageH,
        canvas.width / 2 - this.w / 2,
        canvas.height / 2 - this.h / 2,
        this.w,
        this.h
      );

      ctx.font = "35px myFont";
      ctx.fillStyle = "#d3d3d3";
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.5;
      ctx.fillText(
        "Press Spacebar or Click ",
        canvas.width / 2 - 135,
        canvas.height / 2 + 120
      );
      ctx.strokeText(
        "Press Spacebar or Click ",
        canvas.width / 2 - 135,
        canvas.height / 2 + 120
      );
      ctx.fillText(
        "to start the game",
        canvas.width / 2 - 109,
        canvas.height / 2 + 160
      );
      ctx.strokeText(
        "to start the game",
        canvas.width / 2 - 109,
        canvas.height / 2 + 160
      );
    }
  }
}

class GameOverMsg {
  constructor() {
    this.imageX = 395;
    this.imageY = 59;
    this.imageW = 96;
    this.imageH = 21;
    this.x = 100;
    this.y = 150;
    this.w = 300;
    this.h = 90;
  }

  draw(canvas, ctx, gameState) {
    if (gameState.current === gameState.over) {
      ctx.drawImage(
        image,
        this.imageX,
        this.imageY,
        this.imageW,
        this.imageH,
        canvas.width / 2 - this.w / 2,
        canvas.height / 2 - 200,
        this.w,
        this.h
      );
    }
  }
}

class GameOver {
  constructor() {
    this.imageX = 3;
    this.imageY = 259;
    this.imageW = 113;
    this.imageH = 57;
    this.x = 100;
    this.y = 150;
    this.w = 300;
    this.h = 150;
  }

  draw(canvas, ctx, gameState) {
    if (gameState.current === gameState.over) {
      ctx.drawImage(
        image,
        this.imageX,
        this.imageY,
        this.imageW,
        this.imageH,
        canvas.width / 2 - this.w / 2,
        canvas.height / 2 - this.h / 2,
        this.w,
        this.h
      );
    }
  }
}

export { GetReadyMsg, GetReadyBird, GameOverMsg, GameOver };