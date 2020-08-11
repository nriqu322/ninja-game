const helper = () => {
  const updateScore = (score) => {
    this.scoreText.setText(`Score: ${score}`);
  };

  return updateScore;
};

export default helper;
