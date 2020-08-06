import Phaser from 'phaser';
import ninjaIdle from '../assets/characters/ninja-idle.png';
import ninjaJump grom '../assets/characters/ninja-jump.png';

class Ninja extends Phaser.Physics.Arcade.Sprite {
  contructor(scene, x, y, sprite) {
    super(scene, x, y, sprite) {
      this.health = 30;
      this.setScale(0.2);
    }
  }

  // loadBefore() {
  //   this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
  // }

  // createMoves() {
  //   const ninja = this.physics.add.sprite(200, 500, 'ninjaIdle');
  //   ninja.setScale(0.2);
  //   ninja.setCollideWorldBounds(true);

  //   this.anims.create({
  //     key: 'idle',
  //     frames: this.anims.generateFrameNumbers('ninjaIdle', { start: 0, end: 9 }),
  //     frameRate: 10,
  //     repeat: -1,
  //   });

  //   ninja.anims.play('idle');
  // }
}

export default Ninja;
