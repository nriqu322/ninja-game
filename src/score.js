import axios from 'axios';

const api = {
  key: 'NLwNRR6lDiDhTAfns436',
  baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
};

const url = `${api.baseurl}${api.key}/scores/`;

const saveScore = (user, score = 0) => {
  const object = {
    user,
    score,
  };

  return axios
    .post(url, object)
    .then(response => response.data);
};

const getScores = () => axios
  .get(url)
  .then(response => response.data.result);

export { getScores, saveScore };
