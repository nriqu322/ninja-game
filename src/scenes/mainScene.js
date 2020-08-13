import Phaser from 'phaser';
import Hero from '../characters/ninja';
import Helper from '../helper';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    window.score = 0;
    this.add.image(450, 300, 'sky').setScale(3.35);
    this.add.image(450, 300, 'city').setScale(3.35);

    this.ninja = new Hero(this, 200, 300, 'ninjaIdle');

    this.platformGroup = this.add.group({
      removeCallback(platform) {
        platform.scene.platformPool.add(platform);
      },
    });

    this.platformPool = this.add.group({
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
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.left.isDown) {
      this.ninja.move('left');
    } else if (this.cursors.right.isDown) {
      this.ninja.move('right');
    } else {
      this.ninja.idle();
    }

    if (this.cursors.up.isDown && this.ninja.body.touching.down) {
      this.ninja.jump();
    }

    if (this.ninja.y > 600 || this.ninja.x < -50) {
      Helper.ninjaDead(this);
    }

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

  collectStars(ninja, star) {
    star.disableBody(true, true);
    Helper.updateScore(this, 10);
    this.scoreText.setText(`Score: ${window.score}`);
  }

  collectKunais(ninja, kunai) {
    kunai.disableBody(true, true);
    Helper.updateScore(this, 25);
    this.scoreText.setText(`Score: ${window.score}`);
  }

  dropStars() {
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 4,
      setXY: { x: 150, y: 230, stepX: 170 },
    });
    this.physics.add.collider(this.stars, this.platformGroup);
    this.physics.add.overlap(this.ninja, this.stars, this.collectStars, null, this);
  }

  dropKunais() {
    this.kunais = this.physics.add.group({
      key: 'kunai',
      repeat: 2,
      setXY: { x: 300, y: 230, stepX: 400 },
    });
    this.kunais.children.each((kunai) => {
      kunai.setScale(0.25);
    }, this);
    this.physics.add.collider(this.kunais, this.platformGroup);
    this.physics.add.overlap(this.ninja, this.kunais, this.collectKunais, null, this);
  }
}

export default MainScene;
