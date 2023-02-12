
//IMPORTACIONES DE USESTATE Y CARTCONTEXT 

import { useState } from "react";
import { cartContext } from "./cartContext";

// CREAMOS UNA VARIABLE QUE CONTIENE AL APP.JS COMO CHILDREN PARA PODER ENCAPSULAR LA APP ENTERA.
const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, quantity) => {
        const newProduct = {
            id: item.id, 
            imagen: item.imagen,
            name: item.name,
            price: item.precio,
            quantity: quantity,
            category: item.categoria,
            
        };
        setCart([...cart, newProduct]);
        console.log(cart);
    }
    const removeCart = (pId) => {
            setCart(cart.filter((p) => p.id !== pId));
    };
    const clearCart = () => {
        setCart([]);
    };  
  return (
    <cartContext.Provider value={{cart, addToCart, clearCart,removeCart}}> 
        {children}
        </cartContext.Provider>
  )
}

export default CartProvider