export default (name, score, index) => {
  const listContent = document.getElementById('scores-ul');
  
  const scoreElement = document.createElement('li');
  scoreElement.className = 'score-list';
  scoreElement.id = `user-${index}`;
  
  scoreElement.innerText = `${name} : ${score}`;
  listContent.appendChild(scoreElement);
};
