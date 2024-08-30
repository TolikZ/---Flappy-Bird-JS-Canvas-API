import Background from "./Background.js";
import Land from "./Land.js";
import Bird from "./Bird.js";
import { GetReadyMsg, GetReadyBird, GameOverMsg, GameOver } from "./Messages.js";
import Pipe from "./Pipe.js";
import Score from "./Score.js";

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.bg = new Background(this.canvas);
    this.land = new Land(this.canvas);
    this.bird = new Bird();
    this.getReadyMsg = new GetReadyMsg();
    this.getReadyBird = new GetReadyBird();
    this.gameOver = new GameOver();
    this.gameOverMsg = new GameOverMsg();
    this.pipes = new Pipe();
    this.score = new Score();

    this.frames = 0;
    // игровые состояния: 0 - игра готова, 1 - играем в игру, 2 - игра окончена
    this.gameState = {
      current: 0,
      ready: 0,
      playing: 1,
      over: 2,
    };
  }

  draw() {
    this.bg.draw(this.ctx);
    this.pipes.draw(this.canvas, this.ctx);
    this.land.draw(this.ctx);
    this.bird.draw(this.ctx);
    this.getReadyBird.draw(this.canvas, this.ctx, this.gameState);
    this.getReadyMsg.draw(this.canvas, this.ctx, this.gameState);
    this.gameOverMsg.draw(this.canvas, this.ctx, this.gameState);
    this.gameOver.draw(this.canvas, this.ctx, this.gameState);
    this.score.draw(this.canvas, this.ctx, this.gameState);
  }

  update() {
    this.bird.update(this.canvas, this.gameState, this.land, this.frames);
    this.land.update(this.canvas, this.gameState);
    this.pipes.update(
      this.canvas,
      this.bird,
      this.gameState,
      this.score,
      this.frames
    );
  }

  animate() {
    this.update();
    this.draw();
    this.frames++;
    requestAnimationFrame(this.animate.bind(this));
  }

  init() {
    ["click", "keyup"].forEach((ev) => {
      this.canvas.addEventListener(ev, (event) => {
        switch (this.gameState.current) {
          case this.gameState.ready:
            if (ev === "keyup" && event.key !== " ") break;
            this.gameState.current = this.gameState.playing;
            swooshSound.play();
            break;

          case this.gameState.playing:
            if (ev === "keyup" && event.key !== " ") break;
            if (this.bird.y - this.bird.radius <= 0) return;
            this.bird.flap();
            flapSound.play();
            break;

          case this.gameState.over:
            if (ev === "keyup" && event.key !== " ") break;
            this.bird.speed = 0;
            this.pipes.pipeArray = [];
            this.score.current = 0;
            this.gameState.current = this.gameState.ready;
            break;

          default:
            break;
        }
      });
    });

    this.animate();
  }
}

const game = new Game();
game.init();