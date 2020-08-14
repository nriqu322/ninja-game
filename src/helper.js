class Helper {
  static ninjaDead(callScene) {
    callScene.scene.start('GameOver');
    return true;
  }

  static updateScore(scene, points) {
    window.score += points;
    return window.score;
  }
}

export default Helper;