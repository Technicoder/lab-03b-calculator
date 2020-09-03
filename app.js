// import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumSpan = document.getElementById('sum-span');

// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener('click', () => {
    // - Get the values of the two inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    const sum = value1 + value2;

    // - Inject the sum into our sum `span`
    sumSpan.textContent = sum;
});