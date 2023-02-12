
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
 

const CartDetalle = () => {
    const {cart, removeCart } = useContext(cartContext);
    const {clearCart} = useContext(cartContext);
   
    
  return (
    <div style={{padding: '30px'}}>
    
        {cart.map((p) => (
            <div key={p.id}>
                <img alt={p.id} src={p.imagen} width="200px"></img>
                <h4>Nombre del producto: {p.name}</h4>
                <h4>Categoria: {p.category}</h4>
                <h4>Precio: {p.price}</h4>
                <Button variant="dark" onClick={() => removeCart(p.id)} > Eliminar producto</Button>
            </div>
            
           
        ))}
        <Button variant="dark" onClick={() => clearCart()} > Vaciar Carrito </Button>
    </div>
  )
}

export default CartDetalle