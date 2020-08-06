import Phaser from 'phaser';

class Instructions extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.text(450, 50, 'Instructions', { fontSize: 36 }).setOrigin(0.5);
    this.add.text(450, 100, 'Is the year 2320, an evil AI has taken the world,', { fontSize: 20 }).setOrigin(0.5);
    this.add.text(450, 140, 'all weapons and technology are in control of the machines.', { fontSize: 20 }).setOrigin(0.5);
    this.add.text(450, 180, 'A ninja tries to survive and give hope.', { fontSize: 20 }).setOrigin(0.5);

    this.add.text(450, 240, 'Mission', { fontSize: 26 }).setOrigin(0.5);
    this.add.text(450, 280, 'Run for your life and kill the enemies', { fontSize: 20 }).setOrigin(0.5);

    this.add.text(450, 340, 'Keyborad controls', { fontSize: 26 }).setOrigin(0.5);
    this.add.text(450, 380, 'Jump over platforms with the up arrow', { fontSize: 20 }).setOrigin(0.5);
    this.add.text(450, 420, 'Throw a knife with space bar', { fontSize: 20 }).setOrigin(0.5);

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.08);
    hoverImage.setVisible(false);

    const playBtn = this.add.image(200, 520, 'play').setScale(0.4);

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

    const menuBtn = this.add.image(700, 520, 'menu').setScale(0.4);

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
  }
}

export default Instructions;
