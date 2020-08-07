import Phaser from 'phaser';
import Ninja from '../characters/ninja';
import sky from '../assets/images/sky_bg.png';
import city from '../assets/images/city_mg.png';
import ninjaIdle from '../assets/characters/ninja-idle.png';
// import ninjaJump from '../assets/characters/ninja-jump.png';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('sky', sky);
    this.load.image('city', city);
    Ninja.loadMoves(this);
    this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
    // this.load.spritesheet('ninjaJump', ninjaJump, { frameWidth: 352, frameHeight: 439 });
  }

  create() {
    this.add.image(450, 300, 'sky').setScale(3.35);
    this.add.image(450, 300, 'city').setScale(3.35);
    // this.player = new Ninja(this, 150, 300, 'ninjaIdle');

    this.ninjaIdleMove = this.physics.add.sprite(200, 500, 'ninjaIdle');
    this.ninjaIdleMove.setScale(0.2);
    this.ninjaIdleMove.setCollideWorldBounds(true);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('ninjaIdle', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    this.ninjaIdleMove.anims.play('idle', true);
  //   this.player.idle();

  //   const cursors = this.input.keyboard.createCursorKeys();
  //   if (cursors.left.isDown) {
  //     this.player.setVelocityX(-160);
  //     this.player.anims.play('left', true);
  //   } else if (cursors.right.isDown) {
  //     this.player.setVelocityX(160);
  //     this.player.anims.play('right', true);
  //   } else {
  //     this.player.setVelocityX(0);
  //     this.player.anims.play('ninjaIdle');
  //   }
  //   if (cursors.up.isDown && ninjaJump.body.touching.down) {
  //     ninjaJump.anims.play('jump');
  //   }
  }
}

export default MainScene;
