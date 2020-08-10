const storeScore = () => {
  const api = {
    key: 'NLwNRR6lDiDhTAfns436',
    baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  };

  async function getScores() {
    try {
      const response = await fetch(`${api.baseurl}${api.key}/scores/`);
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }

  const saveScore = (username, score) => {
    const object = {
      user: username,
      score,
    };

    return fetch(`${api.baseurl}${api.key}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }).then((result) => result.json());
  };

  return { getScores, saveScore };
};

export default storeScore;
