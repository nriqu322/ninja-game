import helper from './helper';

const Logic = () => {
  const collectStars = (ninja, star) => {
    star.disableBody(true, true);
    window.score += 10;
    // this.scoreText.setText(`Score: ${window.score}`);
    helper.updateScore(window.score);
  };

  return collectStars;
};

export default Logic;