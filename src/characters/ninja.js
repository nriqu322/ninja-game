import Phaser from 'phaser';

class Hero extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.alive = true;
    this.setScale(0.12);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.createMoves();
  }

  createMoves() {
    this.scene.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNumbers('ninjaIdle', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'jump',
      frames: this.scene.anims.generateFrameNumbers('ninjaJump', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: 0,
    });

    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNumbers('ninjaRun', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'dead',
      frames: this.scene.anims.generateFrameNumbers('ninjaDead', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: 0,
    });

    this.scene.anims.create({
      key: 'throw',
      frames: this.scene.anims.generateFrameNumbers('ninjaThrow', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: -1,
    });
  }

  idle() {
    this.anims.play('idle', true);
    this.setVelocityX(0);
  }

  move(side) {
    switch (side) {
      case 'right': {
        this.flipX = false;
        this.anims.play('run', true);
        this.setVelocityX(160);
        break;
      }
      case 'left': {
        this.flipX = true;
        this.anims.play('run', true);
        this.setVelocityX(-160);
        break;
      }
      default: { break; }
    }
  }

  jump() {
    this.anims.play('jump', true);
    this.setVelocityY(-200);
  }
}

export default Hero;
