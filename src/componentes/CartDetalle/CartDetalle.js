import { Card, ListGroup } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
 
 

const CartDetalle = () => {
    const {cart} = useContext(cartContext);
    const {clearCart} = useContext(cartContext);
    const {removeCart} = useContext(cartContext); 
    if (cart.length === 0) {
        return <h2> No hay productos en tu carrito. </h2>
    }
    
  return (
            
    <>
            <Button variant="primary" onClick={() => clearCart()} > Vaciar Carrito </Button>
            {cart.map((p) => (
                <div key={p.id}>
                    <Card className="cards">
                                <Card.Img variant="top" src={p.imagen} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>
                                        {p.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Precio: ${p.price}</ListGroup.Item>
                                    <ListGroup.Item>Stock: {p.stock}</ListGroup.Item>
                                     
                                     
                                   <div className="botonCard">
                                   
                                   <Button variant="primary" onClick={() => removeCart(p.id)}> Eliminar producto</Button>
                                   </div>
                                   
                                    
                                </ListGroup>
                    </Card>
                    
                </div>
            ), [])}
        </>
    
  )
}

export default CartDetalle