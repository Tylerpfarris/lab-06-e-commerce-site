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
    return total.toFixed(2);
}

