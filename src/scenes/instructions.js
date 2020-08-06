import Phaser from 'phaser';

class Instructions extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  init(data) {}

  create() {
    this.add.image(300, 250, 'background');
  }
}

export default Instructions;
