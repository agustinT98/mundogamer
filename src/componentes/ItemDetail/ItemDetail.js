import { useState } from "react";


const ItemDetail= () => {
    const [precio, setPrecio] = useState('$50000');
    const verPrecio = () => {
       
      return(precio);
        
    };
  return (
    <div>
        <span>Precio: {verPrecio()} </span>
    </div>
  )
}

export default ItemDetail