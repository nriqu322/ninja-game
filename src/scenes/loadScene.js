import Phaser from 'phaser';
import logo from '../assets/images/ninja-logo.png';
import background from '../assets/images/static_bg.jpg';
import sky from '../assets/images/sky_bg.png';
import city from '../assets/images/city_mg.png';
import play from '../assets/images/play-btn.png';
import playAgain from '../assets/images/play-again-btn.png';
import menu from '../assets/images/menu-btn.png';
import instructions from '../assets/images/instructions-btn.png';
import ninjaIcon from '../assets/images/ninja-icon.png';
import ninjaIdle from '../assets/characters/ninja-idle.png';
import ninjaJump from '../assets/characters/ninja-jump.png';
import ninjaRun from '../assets/characters/ninja-run.png';
import ninjaDead from '../assets/characters/ninja-dead.png';
import block from '../assets/images/block.png';
import leaderBoard from '../assets/images/leaderboard-btn.png';

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
    this.load.image('playAgain', playAgain);
    this.load.image('menu', menu);
    this.load.image('instructions', instructions);
    this.load.image('leaderBoard', leaderBoard);
    this.load.image('ninjaIcon', ninjaIcon);
    this.load.spritesheet('ninjaIdle', ninjaIdle, { frameWidth: 232, frameHeight: 439 });
    this.load.spritesheet('ninjaJump', ninjaJump, { frameWidth: 352, frameHeight: 439 });
    this.load.spritesheet('ninjaRun', ninjaRun, { frameWidth: 348, frameHeight: 439 });
    this.load.spritesheet('ninjaDead', ninjaDead, { frameWidth: 425, frameHeight: 439 });
    this.load.image('platform', block);

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(270, 300, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;

    const loadingText = this.make.text({
      x: width / 2 - 10,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2 - 20,
      y: height / 2 + 25,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(280, 310, 300 * value, 30);
    });

    this.load.on('complete', () => {
      this.scene.start('MainMenu');
    });
  }
}

export default LoadScene;
