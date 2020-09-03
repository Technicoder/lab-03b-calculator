# lab-03b-calculator

Outcome
===
- User should be able to add two numbers together
    - There should be two inputs and a button
    - When the button is clicked, the sum of the value in the two inputs shows up on the page

Write HTML
===
1) Two inputs with ids
    - Validate by looking at browser
1) A button with an id
    - Validate by looking at browser
1) A span with an id
    - Validate by looking at browser

Get DOM
===
1) Grab the two inputs
    - Validate by logging them out
1) Grab the sum `span`: the place where we will inject the sum
    - Validate by logging it out
1) Grab the button
    - Validate by logging it out

Event Listener (user interaction)
===
1) We want to have an 'event listener' on the 'click' of the button
    - Validate that the event listener is wired up by logging something ('hello!') out on click
1) When the user clicks the button: (this is what we do in the event listener's "cool zone")
    - Get the values of the two inputs
    - Add together the VALUE of the two inputs
    - Inject the sum into our sum `span`

