import './style.css';
import populate from './module/populate';
import getList from './module/getlist';
import sendList from './module/sendlist';

document.getElementById('refresh-btn').addEventListener('click', () => {
  getList().then((list) => {
    list.result.forEach((element) => {
      populate(element.user, element.score);
    });
  });
});