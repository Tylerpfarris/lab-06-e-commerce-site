
import { addToCart, removeFromCart, retrieveQuantity } from '../cart/cart-utils.js';

export function renderFruit(fruit) {
    
    
    const li = document.createElement('li');
    li.classList.add('fruitItem');

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = fruit.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('image');
    li.append(img);
    img.src = `../assets/pictures/${fruit.image}`;

    const pFlavor = document.createElement('p');
    pFlavor.classList.add('flavor');
    pFlavor.textContent = fruit.flavor;
    li.append(pFlavor);

    const pColor = document.createElement('p');
    pColor.classList.add('color');
    pColor.textContent = fruit.name + ' has ' + fruit.color;
    li.append(pColor);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = 'The price is ' + ' $' + fruit.price.toFixed(2) + ' per. lb';
    li.append(pPrice);

    const pGrownIn = document.createElement('p');
    pGrownIn.classList.add('grownIn');
    pGrownIn.textContent = fruit.name + ' is typically grown in ' + fruit.grownIn;
    li.append(pGrownIn);

    const buttonCart = document.createElement('button');
    buttonCart.classList.add('toCart-button');
    buttonCart.id = 1;
    buttonCart.textContent = '🛒';

    const buttonSubtractFromCart = document.createElement('button');
    buttonSubtractFromCart.classList.add('toCart-button');
    buttonSubtractFromCart.id = 1;
    buttonSubtractFromCart.textContent = '🗑️';

    const quantityBox = document.createElement('span');
    li.append(quantityBox);
    
    quantityBox.textContent = retrieveQuantity(fruit);

    // console.log(typeof(quantityBox));

    buttonSubtractFromCart.disabled = true;

    buttonCart.addEventListener('click', () => {
        
        addToCart(fruit.id);
        localStorage.setItem('quantity', quantityBox.textContent++);
        buttonSubtractFromCart.disabled = false;

        
    });
    
    buttonSubtractFromCart.disabled = false;
    buttonSubtractFromCart.addEventListener('click', () => {
        removeFromCart(fruit.id);
        if (quantityBox.textContent === '0'){ 
            buttonSubtractFromCart.disabled = true;
        } else { 
            quantityBox.textContent--;
            
        }
    });
        
    li.append(buttonCart);
    li.append(buttonSubtractFromCart);
    return li;
}