// IMPORT MODULES under test here:
import { renderFruit } from '../products/render-fruits.js';

const test = QUnit.test;

test('should take in a fruit and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const kiwi = {
        id: 1,
        name: 'Kiwi',
        image: 'Kiwi-fruit.png',
        flavor: `Kiwis are sweet, refreshing fruits with a nice tartness that complements their sweetness. The riper the fruit is, the sweeter and less tart it tends to be.`,
        color: `Brown skin with green flesh.`,
        price: 1.00,
        grownIn:`China, Italy and New Zealand`,
    };

    const expected = `<li class="fruitItem"><h3 class="name">Kiwi</h3><img class="image" src="../assets/pictures/Kiwi-fruit.png"><p class="flavor">Kiwis are sweet, refreshing fruits with a nice tartness that complements their sweetness. The riper the fruit is, the sweeter and less tart it tends to be.</p><p class="color">Brown skin with green flesh.</p><p class="price">$1.00</p><p class="grownIn">China, Italy and New Zealand</p><button id="1">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFruit(kiwi);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
