import Phaser from 'phaser';

class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  init(data) {}

  create() {
    this.add.image(300, 250, 'background');
    this.add.image(450, 150, 'logo');
    const playBtn = this.add.image(450, 350, 'play').setScale(0.6);
    const instructionsBtn = this.add.image(450, 420, 'instructions');

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.1);
    hoverImage.setVisible(false);

    playBtn.setInteractive();

    playBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = playBtn.x - 230;
      hoverImage.y = playBtn.y;
    });

    playBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    playBtn.on('pointerup', () => {
      this.scene.start('MainScene');
    });

    instructionsBtn.setInteractive();

    instructionsBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = instructionsBtn.x - 230;
      hoverImage.y = instructionsBtn.y;
    });

    instructionsBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    instructionsBtn.on('pointerup', () => {
      this.scene.start('Instructions');
    });
  }
}

export default MainMenu;
