import Phaser from 'phaser';

class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.image(450, 100, 'logo');

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.1);
    hoverImage.setVisible(false);

    const playBtn = this.add.image(450, 320, 'play').setScale(0.6);
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

    const instructionsBtn = this.add.image(450, 390, 'instructions');
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

    const leaderBoardBtn = this.add.image(450, 460, 'leaderBoard');
    leaderBoardBtn.setInteractive();

    leaderBoardBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = leaderBoardBtn.x - 230;
      hoverImage.y = leaderBoardBtn.y;
    });

    leaderBoardBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    leaderBoardBtn.on('pointerup', () => {
      this.scene.start('LeaderBoard');
    });
  }
}

export default MainMenu;
