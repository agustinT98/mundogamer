import  Button  from "react-bootstrap/Button";
 

 
const ItemCount = ({stockP, contador, setContador}) => {
    const stock = stockP
    
    const add = () => {
        if (stock > contador){
            setContador(contador + 1);
        }
        
    };
    const res = () => {
        if (contador > 1){
            setContador(contador - 1);
        }
        
    };

  return (
    <div className="Contador">
        <Button variant="secondary" onClick={() => res()}> - </Button>
        <span> {contador} </span>
        <Button variant="secondary" onClick={() => add()}> + </Button>
        
    </div>
    
  )
}

export default ItemCount