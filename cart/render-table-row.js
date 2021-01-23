
export function renderTableRow(cartItem, fruit) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');
    const productTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const lineTotalTd = document.createElement('td');
    // const productImg = document.createElement('img');
    // const productImgTd = document.createElement('td');

    quantityTd.classList.add('quantValue');

    productTd.textContent = fruit.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$` + fruit.price.toFixed(2);
    lineTotalTd.textContent = `$` + getFruitTotal(cartItem, fruit);

    tr.append(productTd, quantityTd, priceTd, lineTotalTd);
    
    if (quantityTd.textContent <= 0) {
        return '';
    } else 
        return tr;  
}

export function getFruitTotal(cartItem, fruit) {
    return cartItem.quantity * fruit.price;
}






