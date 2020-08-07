import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.text(450, 200, 'GAME OVER', { fontSize: 60 }).setOrigin(0.5);

    // Recicle this as a function, is used in mainMenu.
    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.1);
    hoverImage.setVisible(false);

    const playBtn = this.add.image(450, 330, 'playAgain').setScale(1);
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

    // Recicle this as a function, is used in Instructions.
    const menuBtn = this.add.image(450, 400, 'menu').setScale(0.7);

    menuBtn.setInteractive();

    menuBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = menuBtn.x - 230;
      hoverImage.y = menuBtn.y;
    });

    menuBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    menuBtn.on('pointerup', () => {
      this.scene.start('MainMenu');
    });

    // Recicle this as a function, is used in mainMenu.
    const leaderBoardBtn = this.add.image(450, 470, 'leaderBoard');
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

export default GameOver;
