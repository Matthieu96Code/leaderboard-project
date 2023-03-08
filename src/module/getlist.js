export default async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jj9fXS7AmfvECcMuKra1/scores/');
  const list = await response.json();
  return list;
};
