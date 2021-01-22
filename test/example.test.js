// IMPORT MODULES under test here:
import { renderFruit } from '../products/render-fruits.js';
import { findById, calcLineItem, calcOrderTotal } from '../utils.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { fruits } from '../data.js';
import { cart } from '../cart/cart-data.js';
import { getCart, setCart, clearCart, addToCart, removeFromCart } from '../cart/cart-utils.js';
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

    const expected = `<li class=\"fruitItem\"><h3 class=\"name\">Kiwi</h3><img class=\"image\" src=\"../assets/pictures/Kiwi-fruit.png\"><p class=\"flavor\">Kiwis are sweet, refreshing fruits with a nice tartness that complements their sweetness. The riper the fruit is, the sweeter and less tart it tends to be.</p><p class=\"color\">Kiwi has Brown skin with green flesh.</p><p class=\"price\">The price is  $1.00 per. lb</p><p class=\"grownIn\">Kiwi is typically grown in China, Italy and New Zealand</p><input><button class=\"toCart-button\" id=\"1\">🛒</button><button class=\"toCart-button\" id=\"1\" disabled=\"\">🗑️</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFruit(kiwi);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('findById function should take in a 6 and the fruits array and return the Lychee object', (expect) => {
    const fruits = [
        {
            id: 1,
            name: 'Kiwi',
            image: 'Kiwi-fruit.png',
            flavor: `Kiwis are sweet, refreshing fruits with a nice tartness that complements their sweetness. The riper the fruit is, the sweeter and less tart it tends to be.`,
            color: `brown skin with green flesh.`,
            price: 3.00,
            grownIn:`China, Italy and New Zealand`,
        
        },
        {
            id: 2,
            name: `Mango`,
            image: `Mango-fruit.png`,
            flavor: `Besides tasting sweet, they have a range of tastes from floral to citrusy depending on the mango. Some have a tropical flower flavor and aroma while others are almost orangy and fairly tart like lemon.`,
            color: `green, orange and red skin- with saffron colored flesh.`,
            price: 5.00,
            grownIn: `India, China and Thailand`,

        },
        {
            id: 3,
            name: `Starfruit`,
            image: `Starfruit.png`,
            flavor: `Star fruit tastes tart and sweet. It’s best described as a cross between a pear, apple, plum, with a hint of citrus added. Unripe star fruits are more on the sour, citrus side while very ripe ones resemble plums and pineapple.`,
            color: `yellow to green skin- with pale yellow flesh`,
            price: 7.00,
            grownIn: `Malaysia, Philippines and India`,
   
        },
        {
            id: 4,
            name: `Passion Fruit`,
            image: `Passion-fruit.png`,
            flavor: `Passion fruit have a fragrantly sweet taste with a pleasantly tart tang and are very juicy. What to akin it to? I don’t know. Let’s see. Maybe kiwi. Maybe pineapple.`,
            color: `purple to yellow kin- with golden flesh and dark seeds.`,
            price: 8.00,
            grownIn: `Malaysia, United States and Kenya`,
   
        },
        {
            id: 5,
            name: `Guava`,
            image: `Guava-fruit.png`,
            flavor: `The general taste of guava is said to be a cross between strawberries and pears, but depending on the variety, the sweet flavor will vary between mild and strong`,
            color: `green, yellow, pink to red skin- with yellow, pink to red flesh`,
            price: 8.50,
            grownIn: `India, China and Thailand`,
   
        },
        {
            id: 6,
            name: `Lychee`,
            image: `Lychee-fruit.png`,
            flavor: `Lychee tastes like a grape, but with a stronger, slightly acidic touch. Some people also swear that it tastes more like a pear or a watermelon. It's a balance of sweet and tart.`,
            color: `red or pink skin, and is covered with small wrinkled protuberances, resembling the strawberry tree fruit. The pulp is white, firm and somewhat hard, carrying a seed inside.`,
            price: 6.00,
            grownIn: `Taiwan, China and Thailand`,
   
        },
    ];
//Arrange
    // Set up your arguments and expectations
    const Lychee = {        
        id: 6,
        name: `Lychee`,
        image: `Lychee-fruit.png`,
        flavor: `Lychee tastes like a grape, but with a stronger, slightly acidic touch. Some people also swear that it tastes more like a pear or a watermelon. It's a balance of sweet and tart.`,
        color: `red or pink skin, and is covered with small wrinkled protuberances, resembling the strawberry tree fruit. The pulp is white, firm and somewhat hard, carrying a seed inside.`,
        price: 6.00,
        grownIn: `Taiwan, China and Thailand`,
      
    };

    const expected = {
        id: 6,
        name: `Lychee`,
        image: `Lychee-fruit.png`,
        flavor: `Lychee tastes like a grape, but with a stronger, slightly acidic touch. Some people also swear that it tastes more like a pear or a watermelon. It's a balance of sweet and tart.`,
        color: `red or pink skin, and is covered with small wrinkled protuberances, resembling the strawberry tree fruit. The pulp is white, firm and somewhat hard, carrying a seed inside.`,
        price: 6.00,
        grownIn: `Taiwan, China and Thailand`,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(6, fruits);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('takes in a TR and replicates it', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: 3,
        quantity: 4
    };
    const passionFruit = 
        {
            name: `Passion Fruit`,
            quantity: 4,
            price: 32.00,
            total: 128  
        }; 

    const expected = `<tr><td>Passion Fruit</td><td>4</td><td>$32.00</td><td>$128</td></tr>`;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem, passionFruit);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should take in the quantity and amount of an item and return a total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const total = 160.00;

    const expected = 160.00;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(20, 8.00);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('takes in the the cart arr and fruit arr and returns the total cost', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const total = 680.5;

    const expected = 680.5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart, fruits) ;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('getCart should get the correct cart from local storage', (expect) => {
    const testCart = [
        {
            id: 3,
            quantity: 4
        },
        {
            id: 6,
            quantity: 2
        },
        {
            id: 1,
            quantity: 12
        },
        {
            id: 2,
            quantity: 9
        },
        {
            id: 4,
            quantity: 20,
        },
        {
            id: 5,
            quantity: 47
        },
    ];

    const stringyCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyCart);
    
    const cart = getCart();

    expect.deepEqual(cart, testCart);
});

test('setCart should stringify an array and set its value to the key CART and send it to localStorage.', (expect) => {
    const testCart = [
        {
            id: 3,
            quantity: 4
        },
        {
            id: 6,
            quantity: 2
        },
        {
            id: 1,
            quantity: 12
        },
        {
            id: 2,
            quantity: 9
        },
        {
            id: 4,
            quantity: 20,
        },
        {
            id: 5,
            quantity: 47
        },
    ];


    const stringyCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyCart);
    
    setCart();
    
    expect.deepEqual(cart, testCart);
});

test('clearCart should clear the cart and then set a new default cart to local storage', (expect) => {
    const testCart = [
        {
            id: 3,
            quantity: 4
        },
        {
            id: 6,
            quantity: 2
        },
        {
            id: 1,
            quantity: 12
        },
        {
            id: 2,
            quantity: 9
        },
        {
            id: 4,
            quantity: 20,
        },
        {
            id: 5,
            quantity: 47
        },
    ];


    const stringyDefaultCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyDefaultCart);
    
    clearCart();
    
    expect.deepEqual(cart, testCart);
});