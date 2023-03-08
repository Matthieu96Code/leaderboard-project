import './style.css';
import populate from './module/populate';
import store from './module/store';
import getList from './module/getlist';

document.getElementById('submit-btn').addEventListener('click', () => {
  getList().then((list) => {
    list.result.forEach((element) => {
      populate(element.user, element.score);
    });
  });
});