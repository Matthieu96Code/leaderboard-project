import './style.css';
import populate from './module/populate';
import getList from './module/getlist';
import sendList from './module/sendlist';

const callList = () => {
  document.getElementById('scores-ul').innerHTML = '';
  getList().then((list) => {
    list.result.reverse().forEach((element) => {
      populate(element.user, element.score);
    });
  });
};

document.getElementById('refresh-btn').addEventListener('click', () => {
  callList();
});

document.getElementById('submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // console.log('hi');
  const userName = document.getElementById('user-name').value;
  const userScore = document.getElementById('user-score').value;
  sendList(userName, userScore);
});
