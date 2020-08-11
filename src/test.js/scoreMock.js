const api = {
  key: 'NLwNRR6lDiDhTAfns436',
  baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
};

const url = `${api.baseurl}${api.key}/scores/`;

const getScores = () => new Promise((resolve) => {
  fetch(url).then((response) => resolve(response.json()));
});

const saveScore = (user, score) => {
  const object = {
    user,
    score,
  };

  return new Promise((resolve) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }).then((response) => resolve(response.json()));
  });
};

export { getScores, saveScore };
