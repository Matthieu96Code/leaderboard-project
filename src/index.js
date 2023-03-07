import './style.css';
import populate from './module/populate';
import store from './module/store';

store.forEach((element) => {
  populate(element.userName, element.score, element.index);
});
