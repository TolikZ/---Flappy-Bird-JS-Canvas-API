let frames = 0;
// игровые состояния: 0 - игра готова, 1 - играем в игру, 2 - игра окончена
const gameState = {
  current: 0,
  ready: 0,
  playing: 1,
  over: 2,
};

const degree = Math.PI / 180; // 1

// Спрайт

const image = new Image();
image.src = "./../assets/sprite/sprite.png";

// Игровые звуки

const checkPointSound = new Audio();
checkPointSound.src = "./../assets/audio/sfx_point.wav";

const flapSound = new Audio();
flapSound.src = "./../assets/audio/sfx_flap.wav";

const hitSound = new Audio();
hitSound.src = "./../assets/audio/sfx_hit.wav";

const swooshSound = new Audio();
swooshSound.src = "./../assets/audio/sfx_swooshing.wav";

const dieSound = new Audio();
dieSound.src = "./../assets/audio/sfx_die.wav";