// import functions and grab DOM elements
import { handleSumClick, handleMultiplyClick } from './handlers.js';

const sumButton = document.getElementById('sum-button');
const multiplyButton = document.getElementById('multiply-button');

sumButton.addEventListener('click', handleSumClick);
multiplyButton.addEventListener('click', handleMultiplyClick);
