import Phaser from 'phaser';
import MainScene from './scenes/mainScene';
import MainMenu from './scenes/mainMenu';
import LoadScene from './scenes/loadScene';
import Instructions from './scenes/instructions';
import GameOver from './scenes/gameOver';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 900,
  height: 600,
  scene: [
    LoadScene,
    MainMenu,
    Instructions,
    MainScene,
    GameOver,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
