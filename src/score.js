const api = {
  key: 'NLwNRR6lDiDhTAfns436',
  baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
};

const url = `${api.baseurl}${api.key}/scores/`;

const getScores = () => fetch(url).then((response) => response.json());
// const response = await fetch(`${api.baseurl}${api.key}/scores/`);
// return response.json();

const saveScore = (user, score) => {
  const object = {
    user,
    score,
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  }).then((response) => response.json());
};

export { getScores, saveScore };
