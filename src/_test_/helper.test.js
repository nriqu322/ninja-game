import 'jest-canvas-mock';
import Helper from '../helper';

window.score = 0;

test('update score', () => {
  Helper.updateScore('MainScene', 10);
  expect(window.score).toBe(10);
});