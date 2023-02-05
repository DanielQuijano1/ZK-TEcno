import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider(props) {

    const test = () => console.log("test")

    const [cart, setCart] = useState([]);

    function addToCart(item) {
        let newCart = cart.map(item => item);
        
        newCart.push(item)
        setCart(newCart)
    }

    function removeItem(itemInCart) {
        let newCart = cart.filter(elem => elem !== itemInCart)
        setCart(newCart)
    }

    function clear() {
        setCart([])
    }

    function multiplicar(a, b) {
        return a * b
    }
    let total = 0;
    const getTotalItemsInCart = cart.reduce(
        (totalCuenta, i) => totalCuenta + multiplicar(i.precio, i.count),
        total)


    return (
        <cartContext.Provider value={{ cart, test, addToCart, removeItem, clear, getTotalItemsInCart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider };  