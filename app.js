// import functions and grab DOM elements
import { 
    handleSumClick,
} from './handlers.js';

const sumButton = document.getElementById('sum-button');
// const subtractButton = document.getElementById('subtract-button');
// const multiplyButton = document.getElementById('multiply-button');
// const divideButton = document.getElementById('divide-button');

// set event listeners to update state and DOM
// addEventListener takes two arguments:
//  1) string that describes the event
//  2) another function, to be called on click (callback function)
sumButton.addEventListener('click', handleSumClick);
// subtractButton.addEventListener('click', handleSubtractClick);
// multiplyButton.addEventListener('click', handleMultiplyClick);
// divideButton.addEventListener('click', handleDivideClick);