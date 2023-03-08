const addReturn = (obj) => {
  const form = document.getElementById('name-score-form');
  const result = document.createElement('p');
  result.innerText = `${obj.result}`;
  result.style.fontSize = '10px';
  result.style.margin = '0';
  form.appendChild(result);
};

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
    .then((json) => addReturn(json));
};
