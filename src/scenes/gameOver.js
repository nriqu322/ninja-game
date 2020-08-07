import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.text(450, 300, 'GAME OVER', { fontSize: 60 }).setOrigin(0.5);
  }
}

export default GameOver;
