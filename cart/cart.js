import { fruits } from '../data.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { findById, calcOrderTotal } from '../utils.js';
import { clearCart, getCart } from './cart-utils.js';

const table = document.querySelector('table');

const cart = getCart();
for (let item of cart) {
    const fruit = findById(item.id, fruits);

    const tableRowDom = renderTableRow(item, fruit);

    table.append(tableRowDom);

}

const totalTr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
td4.classList.add('order-total');

td4.textContent = `$${calcOrderTotal(cart, fruits)}`;

totalTr.append(td1, td2, td3, td4);
table.append(totalTr);

const orderButton = document.getElementById('place-order');

if (td4.textContent === '$0') orderButton.disabled = true;

orderButton.addEventListener('click', () => {
    const cart = getCart();
    alert('Thanks for shopping');
    alert(JSON.stringify(cart, true, 2));
    clearCart();
    localStorage.removeItem('CART', null);
    window.location.replace('../index.html'); 
});
