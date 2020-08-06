import Phaser from 'phaser';
import ninjaIdle from '../assets/characters/ninja-idle.png';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
  }

  create() {
    console.log('Ready');
    const ninja = this.physics.add.sprite(200, 500, 'ninjaIdle');
    ninja.setScale(0.2);
    ninja.setCollideWorldBounds(true);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('ninjaIdle', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });

    ninja.anims.play('idle');
  }

  // update() {};
}

export default MainScene;
