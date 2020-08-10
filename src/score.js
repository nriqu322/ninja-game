const api = {
  key: 'NLwNRR6lDiDhTAfns436',
  baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
};

async function getScores() {
  const response = await fetch(`${api.baseurl}${api.key}/scores/`);
  return response.json();
}

const saveScore = async (user, score) => {
  const object = {
    user,
    score,
  };

  const result = await fetch(`${api.baseurl}${api.key}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  });
  return result.json();
};

export { getScores, saveScore };
