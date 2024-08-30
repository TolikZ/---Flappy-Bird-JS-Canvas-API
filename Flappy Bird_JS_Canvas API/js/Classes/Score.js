export default class Score {
  constructor() {
    this.highscore = parseInt(localStorage.getItem("highscore")) || 0;
    this.current = 0;
  }

  draw(canvas, ctx, gameState) {
    ctx.fillStyle = "#ffffff";
    if (gameState.current === gameState.playing) {
      ctx.lineWidth = 3;
      ctx.font = "70px myFont";
      ctx.fillText(this.current, canvas.width / 2, 50);
      ctx.strokeText(this.current, canvas.width / 2, 50);
    } else if (gameState.current === gameState.over) {
      ctx.lineWidth = 1.5;
      ctx.font = "38px myFont";

      ctx.fillText(this.current, canvas.width / 2 + 80, 384);
      ctx.strokeText(this.current, canvas.width / 2 + 80, 384);

      ctx.fillText(this.highscore, canvas.width / 2 + 80, 440);
      ctx.strokeText(this.highscore, canvas.width / 2 + 80, 440);
    }
  }
}