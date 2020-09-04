// IMPORT MODULES under test here:
import { addTwoNumbers, multiplyTwoNumbers } from '../mathUtils.js';

const test = QUnit.test;

test('addTwoNumbers should return 7 if passed 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const firstNumber = 3;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplyTwoNumbers should return 12 if passed 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    const firstNumber = 3;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplyTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
// My code isn't working?
// I expected ___ to happen, but instead, ___ happened. Can you help me figure out why?