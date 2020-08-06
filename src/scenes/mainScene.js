import Phaser from 'phaser';
import ninjaIdle from '../assets/characters/ninja-idle.png';
import ninjaJump from '../assets/characters/ninja-jump.png';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
    this.load.spritesheet('ninjaJump', ninjaJump, { frameWidth: 352, frameHeight: 439 });
  }

  create() {
    const ninjaIdleMove = this.physics.add.sprite(200, 500, 'ninjaIdle');
    ninjaIdleMove.setScale(0.2);
    ninjaIdleMove.setCollideWorldBounds(true);

    const ninjaJumpMove = this.physics.add.sprite(200, 500, 'ninjaJump');
    ninjaJumpMove.setScale(0.2);
    ninjaJumpMove.setCollideWorldBounds(true);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('ninjaIdle', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });

    // ninja.anims.play('idle');

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('ninjaJump', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.up.isDown && ninjaJump.body.touching.down) {
      ninjaJump.anims.play('jump');
    }
  }
}

export default MainScene;
