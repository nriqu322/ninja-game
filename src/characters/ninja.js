import Phaser from 'phaser';
import ninjaIdleP from '../assets/characters/ninja-idle.png';
import ninjaJumpP from '../assets/characters/ninja-jump.png';
import ninjaRunP from '../assets/characters/ninja-run.png';
import ninjaDeadP from '../assets/characters/ninja-dead.png';
import ninjaThrowP from '../assets/characters/ninja-throw.png';

class Ninja extends Phaser.Physics.Arcade.Sprite {
  constructor(some, x, y, sprite) {
    super(some, x, y, sprite);
    this.scene = some;
    this.health = 30;
    this.alive = true;
    this.setScale(0.2);
    this.createMoves();
  }

  static loadMoves(scene) {
    scene.load.spritesheet('ninjaIdle', ninjaIdleP, { frameWidth: 232, frameHeight: 439 });
    scene.load.spritesheet('ninjaJump', ninjaJumpP, { frameWidth: 352, frameHeight: 439 });
    scene.load.spritesheet('ninjaRun', ninjaRunP, { frameWidth: 348, frameHeight: 439 });
    scene.load.spritesheet('ninjaDead', ninjaDeadP, { frameWidth: 425, frameHeight: 439 });
    scene.load.spritesheet('ninjaThrow', ninjaThrowP, { frameWidth: 377, frameHeight: 439 });
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
      repeat: -1,
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
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'throw',
      frames: this.scene.anims.generateFrameNumbers('ninjaThrow', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: -1,
    });
  }
}

export default Ninja;
