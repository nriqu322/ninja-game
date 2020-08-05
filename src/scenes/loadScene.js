import Phaser from 'phaser';
// import sky from '../resources/images/sky_bg.png';

class LoadScene extends Phaser.Scene {
  constructor() {
    super('LoadScene');
  }

  preload() {
    this.load.image('background', '../resources/images/static_bg.jpg');
    this.load.image('sky', '../resources/images/sky_bg.png');
    this.load.image('city', '../resources/images/city_mg.png');

    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff,
      },
    });

    this.load.on('progress', (percent) => {
      loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
      console.log(percent);
    });
  }
}

export default LoadScene;
