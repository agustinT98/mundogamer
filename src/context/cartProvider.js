import { useState } from "react";
import { cartContext } from "./cartContext";
import { useEffect } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, quantity) => {
        
        let newCart;
        let p = cart.find((p) => p.id === item.id);
        if (p){
            p.quantity += quantity;
            newCart = [...cart]; 
        }
        else {
            const newProduct = {
                id: item.id, 
                imagen: item.imagen,
                descripcion: item.descripcion,
                name: item.name,
                price: item.precio,
                quantity: quantity,
                category: item.categoria,
                stock: item.stock
                
            };
            newCart = [...cart, newProduct];
        }
        setCart(newCart);
    }
    const removeCart = (pId) => {
            setCart(cart.filter((p) => p.id !== pId));
    };
    
    const clearCart = () => {
        setCart([]);
    };  

    const [total, setTotal] = useState(0)

    const precioTotal = () => {
        setTotal(cart.reduce((price, p) => price + p.price * p.quantity, 0))
    }

    useEffect(() => {
        precioTotal()
    }, [cart])

    const [counter, setCounter] = useState(0)

    const contadorCart = () => {
        setCounter(cart.reduce((quant, p) => quant + p.quantity, 0))
    }

    useEffect(() => {
        contadorCart()
    }, [cart])
  return (
    <cartContext.Provider value={{cart, addToCart, clearCart,removeCart, counter, total}}> 
        {children}
        </cartContext.Provider>
  )
}

export default CartProvider