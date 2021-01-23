const CART = 'CART';
const defaultEmptyCart = [];
import { findById } from '../utils.js';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        //if there is a cart in local storage, parse it
        const parsedCart = JSON.parse(stringyCart);
        //then return it
        return parsedCart;
    } else {

        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

        localStorage.setItem(CART, stringyDefaultCart);

        return defaultEmptyCart;
    }
}


export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id) {
    const cart = getCart();

    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }

    setCart(cart);
}
    
export function removeFromCart(id) {
    const cart = getCart();

    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity--;
    } else {
        return null;
    }
    setCart(cart);
}

export function retrieveQuantity(fruit) {
    const cart = getCart();
    let quantity = 0;
    const itemInCart = findById(fruit.id, cart);
    if (!itemInCart) {
        return quantity;
    } else {
        quantity = itemInCart.quantity;
    }
    return quantity;
}

