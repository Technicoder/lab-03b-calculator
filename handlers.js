// import functions and grab DOM elements
import { addTwoNumbers, multiplyTwoNumbers } from './mathUtils.js';

const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');

// define "what happens" on click
// no parameters? Therefore it cannot be a PURE function.
// IMPURE FUNCTIONS are suuuuper hard to test
export function handleSumClick() {
    // - Get the values of the two inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    // function call
    // we have the blueprint, so this is the building:
    // we pass in the ingredients, and the function 'runs', as defined in the declaration
    const sum = addTwoNumbers(value1, value2);

    // - Inject the sum into our sum `span`
    sumSpan.textContent = sum;
}

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const productSpan = document.getElementById('multiply-span');

export function handleMultiplyClick() {
    const value1 = multiplyInput1.valueAsNumber;
    const value2 = multiplyInput2.valueAsNumber;
    const product = multiplyTwoNumbers(value1, value2);

    productSpan.textContent = product;
}