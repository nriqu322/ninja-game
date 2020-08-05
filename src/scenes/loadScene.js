import Phaser from 'phaser';
// import MainMenu from './mainMenu';
import logo from '../resources/images/ninja-logo.png';
import background from '../resources/images/static_bg.jpg';
import sky from '../resources/images/sky_bg.png';
import city from '../resources/images/city_mg.png';
import play from '../resources/images/play-btn.png';
import instructions from '../resources/images/instructions-btn.png';
import ninjaIcon from '../resources/images/ninja-icon.png';
// import ninja from '../resources/images/ninja.png';
// import ninjaJson from '../resources/images/ninja.json';

class LoadScene extends Phaser.Scene {
  constructor() {
    super('LoadScene');
  }

  preload() {
    this.load.image('background', background);
    this.load.image('sky', sky);
    this.load.image('city', city);
    this.load.image('logo', logo);
    this.load.image('play', play);
    this.load.image('instructions', instructions);
    this.load.image('ninjaIcon', ninjaIcon);
    // this.load.atlas('ninja', ninja, ninjaJson);

    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff,
      },
    });

    this.load.on('progress', (percent) => {
      loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
    });

    this.load.on('complete', () => {
      this.scene.start('MainMenu');
    });
  }
}

export default LoadScene;
