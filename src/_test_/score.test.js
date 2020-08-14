import 'babel-polyfill';
import getScores from '../_mocks_/score';


test('fetches data name from LeaderBoard API', async () => {
  const scores = await getScores();

  expect(scores.user).toEqual('MyName');
  expect(typeof getScores()).toBe('object');
});

test('fetches data score from LeaderBoard API', async () => {
  const scores = await getScores();

  expect(scores.score).toEqual(130);
  expect(getScores()).not.toBe(undefined);
});