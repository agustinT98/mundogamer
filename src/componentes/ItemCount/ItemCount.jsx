import  Button  from "react-bootstrap/Button";
import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(0);
    const add = () => {
        setContador(contador + 1);
    };
    const res = () => {
        if (contador === 0){
            return;
        }
        setContador(contador - 1);
    };

  return (
    <div className="Contador">
        <Button variant="secondary" onClick={() => res()}> - </Button>
        <span> {contador} </span>
        <Button variant="secondary" onClick={() => add()}> + </Button>
        <Button variant="primary"> Agregar al carrito </Button>
    </div>
    
  )
}

export default ItemCount