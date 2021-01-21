// import { findById } from '../utils.js';
// import { fruits } from '../data.js';
// import { calcLineItem } from '../utils.js';
// import { cart } from './cart-data.js';


export function renderTableRow(cartItem, fruit) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');
    const productTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const lineTotalTd = document.createElement('td');
    // const productImg = document.createElement('img');
    // const productImgTd = document.createElement('td');

    productTd.textContent = fruit.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = fruit.price.toFixed(2);
    lineTotalTd.textContent = getFruitTotal(cartItem, fruit);
    
    // lineTotalTd.id = 'totalCostOfFruit';
    // const grandTotal = document.getElementById('totalCostOfFruit');
    // for (let cost of totalCost) {
    //     grandTotal
    // }

    tr.append(productTd, quantityTd, priceTd, lineTotalTd);





    return tr;

}


export function getFruitTotal(cartItem, fruit) {
    return cartItem.quantity * fruit.price;
}



// export function renderTableRow(cartItem) {
   
//     const rowItem = findById(cartItem.id, fruits);
//     const tr = document.createElement('tr');

//     const nameTd = document.createElement('td');
//     nameTd.textContent = fruits.name;
//     tr.append(nameTd);

//     const quantityTd = document.createElement('td');
//     quantityTd.textContent = cart.quantity;
//     tr.append(quantityTd);

    

//     const priceTd = document.createElement('td');
//     priceTd.textContent = `$${calcLineItem(cartItem, rowItem)}`;

    


//     return tr;

// }



