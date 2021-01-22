// import functions and grab DOM elements
import { renderFruit } from '../products/render-fruits.js';
import { fruits } from '../data.js';
// initialize state

const fruitList = document.getElementById('list');
// set event listeners to update state and DOM

for (const fruit of fruits) {
    const fruitElement = renderFruit(fruit);

    fruitList.append(fruitElement);
}