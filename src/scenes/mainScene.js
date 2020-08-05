import Phaser from 'phaser';
// import ninja from '../ninja.png';
// import ninjaJason from '../ninja.json';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.atlas('ninja', 'ninja.png', 'ninja.json');
  }

  create() {
    console.log('Ready');
    this.ninja = this.add.sprite(200, 200, 'ninja');
    // hero = this.physics.add.sprite(200, 200, 'ninja');
    // hero.setCollideWorldBounds(true);
    // hero.setScale(1);

  //   this.anims.create({
  //     key: 'idle',
  //     frames: this.anims.generateFrameNumbers('ninja', { start: 0, end: 9 }),
  //     frameRate: 10,
  //     repeat: -1,
  //   });
  }

  // update() {};
}

export default MainScene;
