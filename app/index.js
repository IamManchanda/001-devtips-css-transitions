/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
const box = document.querySelector('.box');
['mousedown', 'mouseover'].forEach((event) => {
  box.addEventListener(event, function () {
    this.classList.contains('is-active') ? this.classList.remove('is-active') : this.classList.add('is-active');
  });
});
