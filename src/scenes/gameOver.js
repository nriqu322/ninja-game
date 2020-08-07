import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.text(450, 100, 'GAME OVER', { fontSize: 50 }).setOrigin(0.5);
  }
}

export default GameOver;
