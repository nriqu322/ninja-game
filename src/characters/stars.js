import Phaser from 'phaser';

class Star extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, image) {
    super(scene, x, y, image);
  }
}

export default Star;
