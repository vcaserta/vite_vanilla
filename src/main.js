import './index.scss';

import './js/header';
import './js/home';
import './js/edit1';
import './js/edit4';
import './js/edit2';
import './js/edit5';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  const newVh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${newVh}px`);
});
