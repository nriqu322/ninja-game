import Phaser from 'phaser';
// import Ninja from '../characters/ninja';
// import ninjaIdle from '../assets/characters/ninja-idle.png';
// import ninjaJump from '../assets/characters/ninja-jump.png';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.score = 0;
    // this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
    // this.load.spritesheet('ninjaJump', ninjaJump, { frameWidth: 352, frameHeight: 439 });
  }

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
      platform.setScale(0.5);
      platform.setVelocityX(Phaser.Math.Between(-150, -200));
      platform.setGravityY(-500);
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

    this.ninja = this.physics.add.sprite(200, 300, 'ninjaIdle');
    this.ninja.setScale(0.12);
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

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    this.timedEvent = this.time.addEvent({
      delay: 4000,
      callback: this.dropStars,
      callbackScope: this,
      loop: true,
    });

    this.timedEvent2 = this.time.addEvent({
      delay: 10000,
      callback: this.dropKunais,
      callbackScope: this,
      loop: true,
    });

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
      this.ninja.setVelocityY(-200);
    }

    if (this.ninja.y > 600) {
      this.scene.start('GameOver');
    }

    if (this.ninja.x < -50) {
      this.scene.start('GameOver');
    }

    // recycling platforms
    let minDistance = 900;
    let rightmostPlatformHeight = 0;

    this.platformGroup.getChildren().forEach((platform) => {
      const platformDistance = 900 - platform.x - platform.displayWidth / 2;
      if (platformDistance < minDistance) {
        minDistance = platformDistance;
        rightmostPlatformHeight = platform.y;
      }

      if (platform.x < -platform.displayWidth / 2) {
        this.platformGroup.killAndHide(platform);
        this.platformGroup.remove(platform);
      }
    }, this);

    // adding new platforms
    if (minDistance > this.nextPlatformDistance) {
      const nextPlatformWidth = Phaser.Math.Between(50, 250);
      const platformRandomHeight = 10 * Phaser.Math.Between(-40, 40);

      const nextPlatformGap = rightmostPlatformHeight + platformRandomHeight;
      const minPlatformHeight = window.innerHeight * 0.4;
      const maxPlatformHeight = window.innerHeight * 0.8;
      const nextPlatformHeight = Phaser.Math.Clamp(
        nextPlatformGap,
        minPlatformHeight,
        maxPlatformHeight,
      );
      this.addPlatform(nextPlatformWidth, 900 + nextPlatformWidth / 2, nextPlatformHeight);
    }
  }

  collectStars(ninja, star) {
    star.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
  }

  collectKunais(ninja, kunai) {
    kunai.disableBody(true, true);
    this.score += 25;
    this.scoreText.setText(`Score: ${this.score}`);
  }

  dropStars() {
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 4,
      setXY: { x: 150, y: 300, stepX: 170 },
    });
    this.physics.add.collider(this.stars, this.platformGroup);
    this.physics.add.overlap(this.ninja, this.stars, this.collectStars, null, this);
  }

  dropKunais() {
    this.kunais = this.physics.add.group({
      key: 'kunai',
      repeat: 2,
      setXY: { x: 300, y: 250, stepX: 400 },
    });
    this.kunais.children.each((kunai) => {
      kunai.setScale(0.25);
    }, this);
    this.physics.add.collider(this.kunais, this.platformGroup);
    this.physics.add.overlap(this.ninja, this.kunais, this.collectKunais, null, this);
  }
}

export default MainScene;
