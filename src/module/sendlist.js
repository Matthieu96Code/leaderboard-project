export default (userName, userScore) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jj9fXS7AmfvECcMuKra1/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};