import { Card, ListGroup } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"
 

const CartDetalle = () => {
    const {cart} = useContext(cartContext);
    const {clearCart} = useContext(cartContext);
    const {removeCart} = useContext(cartContext);
    const {addToCart} = useContext(cartContext);
    
    if (cart.length === 0) {
        return <h1> No hay productos en tu carrito. </h1>
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
                                    <ItemCount
                                    stock ={p.stock} />
                                   <div className="botonCard">
                                   <Button variant="primary" onClick={() => addToCart(p, p.stock)}> Agregar al carrito </Button> 
                                   <Button variant="primary" onClick={() => removeCart(p.id)}> Eliminar producto</Button>
                                   </div>
                                   
                                    
                                </ListGroup>
                    </Card>
                    
                </div>
            ), [])}
        </>
   /* <div style={{padding: '30px'}}>
    
        {cart.map((p) => (
            <div key={p.id}>
                <img alt={p.id} src={p.imagen} width="200px"></img>
                <h4>Nombre del producto: {p.name}</h4>
                <h4>Categoria: {p.category}</h4>
                <h4>Precio: {p.price}</h4>
                <Button variant="dark" onClick={() => removeCart(p.id)}> Eliminar producto</Button>
            </div>
            
           
        ))}
        <Button variant="dark" onClick={() => clearCart()} > Vaciar Carrito </Button>
    </div>*/
  )
}

export default CartDetalle