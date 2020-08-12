import Phaser from 'phaser';
import { getScores } from '../score';

class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.image(450, 100, 'logo');

    this.add.text(450, 190, 'LEADERBOARD', { fontSize: 36 }).setOrigin(0.5);

    this.loading = this.add.text(450, 350, 'Loading...', { fontSize: 26 }).setOrigin(0.5);

    this.retrieveScore();

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.08);
    hoverImage.setVisible(false);

    const menuBtn = this.add.image(150, 550, 'menu').setScale(0.4);

    menuBtn.setInteractive();

    menuBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = menuBtn.x - 100;
      hoverImage.y = menuBtn.y;
    });

    menuBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    menuBtn.on('pointerup', () => {
      this.scene.start('MainMenu');
    });

    const playBtn = this.add.image(750, 550, 'play').setScale(0.4);
    playBtn.setInteractive();

    playBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = playBtn.x - 100;
      hoverImage.y = playBtn.y;
    });

    playBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    playBtn.on('pointerup', () => {
      this.scene.start('MainScene');
    });
  }

  async retrieveScore() {
    const response = await getScores();
    const scores = response.result.sort((x, y) => y.score - x.score);
    if (scores.empty) {
      this.loading.text = 'Scores are not available';
    } else {
      this.displayScores(scores);
    }
  }

  displayScores(info) {
    let spaceY = 0;
    this.loading.text = '';
    for (let i = 1; i <= 10; i += 1) {
      this.add.text(340, 220 + spaceY, `${i}.`, { fontSize: 20 });
      this.add.text(375, 220 + spaceY, `${info[i].user}`, { fontSize: 20 });
      this.add.text(510, 220 + spaceY, `${info[i].score}`, { fontSize: 20 });
      spaceY += 25;
    }
  }
}

export default LeaderBoard;
