import Phaser from 'phaser';

class Star extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, image) {
    super(scene, x, y, image);
    this.exist = true;
  }
}

export default Star;
