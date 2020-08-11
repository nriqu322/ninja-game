import 'babel-polyfill';
import { getScores } from './scoreMock';

test('check if data is retrieved from score store api', async () => {
  // expect.assertions(1);
  const data = await getScores();
  const scores = data.result;
  expect(scores[0].user).toEqual('LSS');
  // const scores = scoreMock.getScores();
  // scores.then((data) => {
  //   expect(data[0].user).toBe('LSS');
  // });
});
