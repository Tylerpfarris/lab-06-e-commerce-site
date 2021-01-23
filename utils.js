//this is where ill rite my findID function
export function findById(id, array) {
    for (let item of array) {
        if (item.id === id){
            return item;
        }
    }
    return null;
}

export function calcLineItem(quantity, amount) {
    const total = quantity * amount;
    return total;
}

export function calcOrderTotal(cart, fruits) {
    let total = 0;

    for (const cartItem of cart) {
        let fruitPrice = findById(cartItem.id, fruits).price;
        let cartItemPrice = calcLineItem(cartItem.quantity, fruitPrice);
        total += cartItemPrice;
        
    }  
    return total;
}