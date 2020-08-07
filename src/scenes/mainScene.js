import Phaser from 'phaser';
// import Ninja from '../characters/ninja';
// import ninjaIdle from '../assets/characters/ninja-idle.png';
// import ninjaJump from '../assets/characters/ninja-jump.png';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  // preload() {
  //   this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
  //   this.load.spritesheet('ninjaJump', ninjaJump, { frameWidth: 352, frameHeight: 439 });
  // }

  addPlatform(platformWidth, posX) {
    let platform;
    if (this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
    } else {
      platform = this.physics.add.sprite(posX, 450, 'platform');
      platform.setVelocityX(-100);
      platform.setGravityY(-300);
      this.platformGroup.add(platform);
      platform.setImmovable(true);
    }
    platform.displayWidth = platformWidth;
    this.nextPlatformDistance = Phaser.Math.Between(70, 200);
  }

  create() {
    // this.ninjaObj = new Ninja(this, 150, 500, 'ninjaIdle');
    this.add.image(450, 300, 'sky').setScale(3.35);
    this.add.image(450, 300, 'city').setScale(3.35);

    // this.block = this.add.image(30, 400, 'block').setScale(0.8);
    // this.block2 = this.add.image(80, 400, 'block').setScale(0.8);

    this.ninja = this.physics.add.sprite(200, 300, 'ninjaIdle');
    this.ninja.setScale(0.2);
    // this.ninja.setCollideWorldBounds(true);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('ninjaIdle', { start: 0, end: 9 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('ninjaJump', { start: 0, end: 9 }),
      frameRate: 40,
      repeat: -1,
    });

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('ninjaRun', { start: 0, end: 9 }),
      frameRate: 40,
      repeat: -1,
    });

    this.platformGroup = this.add.group({
      // once a platform is removed, it's added to the pool
      removeCallback(platform) {
        platform.scene.platformPool.add(platform);
      },
    });

    this.platformPool = this.add.group({
      // once a platform is removed from the pool, it's added to the active platforms group
      removeCallback(platform) {
        platform.scene.platformGroup.add(platform);
      },
    });

    this.addPlatform(800, 400);
    this.physics.add.collider(this.ninja, this.platformGroup);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.ninja.anims.play('run', true);
      this.ninja.flipX = true;
      this.ninja.setVelocityX(-160);
    } else if (cursors.right.isDown) {
      this.ninja.flipX = false;
      this.ninja.anims.play('run', true);
      this.ninja.setVelocityX(160);
    } else {
      this.ninja.anims.play('idle', true);
      this.ninja.setVelocityX(0);
    }

    if (cursors.up.isDown && this.ninja.body.touching.down) {
      this.ninja.anims.play('jump', true);
      this.ninja.setVelocityY(-250);
    }
  }
}

export default MainScene;
