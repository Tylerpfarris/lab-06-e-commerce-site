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
        //initialize a cart
        //if there is no cart then and stringify our default empty cart 
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        // then put that empty strigified cart in local storage
        localStorage.setItem(CART, stringyDefaultCart);
        //give the user a cart to play with 
        //then, forget about local storage. just give the user a default empty cart
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
