import './style.css';
import populate from './module/populate';
import getList from './module/getlist';
import sendList from './module/sendlist';

document.getElementById('refresh-btn').addEventListener('click', () => {
  getList().then((list) => {
    list.result.forEach((element) => {
      document.getElementById('scores-ul').innerHTML = '';
      populate(element.user, element.score);
    });
  });
});
