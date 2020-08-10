import Phaser from 'phaser';
import { saveScore } from '../score';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.text(450, 100, 'GAME OVER', { fontSize: 60 }).setOrigin(0.5);

    this.add.text(450, 200, `Your score is: ${window.score}`, { fontSize: 36 }).setOrigin(0.5);

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'user-name';
    inputName.classList.add('input-name');
    inputName.placeholder = 'Type a max of 12 char.';
    document.getElementById('game-container').appendChild(inputName);

    // Recicle this as a function, is used in mainMenu.
    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.1);
    hoverImage.setVisible(false);

    const submitBtn = this.add.image(450, 350, 'submitBtn');
    submitBtn.setScale(0.2);
    submitBtn.setInteractive();

    submitBtn.on('pointerup', () => {
      this.getName();
    });

    // Recicle this as a function, is used in mainMenu.
    const playBtn = this.add.image(450, 450, 'playAgain').setScale(0.8);
    playBtn.setInteractive();

    playBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = playBtn.x - 200;
      hoverImage.y = playBtn.y;
    });

    playBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    playBtn.on('pointerup', () => {
      this.scene.start('MainScene');
    });
  }

  callLeaderBoard() {
    document.getElementById('user-name').remove();
    this.scene.start('LeaderBoard');
  }

  getName() {
    this.name = document.getElementById('user-name').value;
    if (this.name.length < 13) {
      saveScore(this.name, window.score);
      this.callLeaderBoard();
    }
  }
}

export default GameOver;
