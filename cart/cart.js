import { cart } from './cart-data.js';
import { fruits } from '../data.js';

import { renderTableRow } from '../cart/render-table-row.js';
import { findById, calcOrderTotal } from '../utils.js';

const table = document.querySelector('table');
const orderButton = document.getElementById('place-order');

for (let item of cart) {
    const fruit = findById(item.id, fruits);

    const tableRowDom = renderTableRow(item, fruit);

    table.append(tableRowDom);

}

const totalTr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `$${calcOrderTotal(cart, fruits)}`;

totalTr.append(td1, td2, td3);
// orderButton.addEventListener('click', () => {
    
// });
table.append(totalTr);