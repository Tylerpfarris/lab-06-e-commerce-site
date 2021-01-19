export function renderFruit(fruit) {

// furits have:
// name
// Image
// flavor
// color
// price
// grown in

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
    pColor.textContent = fruit.color;
    li.append(pColor);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = '$' + fruit.price.toFixed(2);
    li.append(pPrice);

    const pGrownIn = document.createElement('p');
    pGrownIn.classList.add('grownIn');
    pGrownIn.textContent = fruit.grownIn;
    li.append(pGrownIn);

    const buttonCart = document.createElement('button');
    buttonCart.id = '1';
    buttonCart.textContent = 'Add to cart';
    li.append(buttonCart);


 

    return li;
}
