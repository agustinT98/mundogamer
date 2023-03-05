import { useState } from "react";
import { cartContext } from "./cartContext";


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
  return (
    <cartContext.Provider value={{cart, addToCart, clearCart,removeCart}}> 
        {children}
        </cartContext.Provider>
  )
}

export default CartProvider