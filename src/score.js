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

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  }).then((response) => response.json());
};

const getScores = () => fetch(url)
  .then((response) => response.json())
  .catch((error) => error);
// const response = await fetch(`${api.baseurl}${api.key}/scores/`);
// return response.json();

export { getScores, saveScore };
