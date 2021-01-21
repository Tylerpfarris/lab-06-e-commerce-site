import { cart } from './cart-data.js';
import { fruits } from '../data.js';

import { renderTableRow, getFruitTotal } from '../cart/render-table-row.js';
import { findById } from '../utils.js';

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    const fruit = findById(item.id, fruits);

    const totalForThisFruit = getFruitTotal(item, fruits);

    total += totalForThisFruit;
    const tableRowDom = renderTableRow(item, fruit);

    table.append(tableRowDom);

}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

table.append(tr);