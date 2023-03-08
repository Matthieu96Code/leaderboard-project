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
}

document.getElementById('refresh-btn').addEventListener('click', () => {
  callList()
});

