import { Card, ListGroup } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import {collection, addDoc, getFirestore} from "firebase/firestore";


const CartDetalle = () => {
    const {cart} = useContext(cartContext);
    const {total} = useContext(cartContext);
    const {clearCart} = useContext(cartContext);
    const {removeCart} = useContext(cartContext); 
    const [order, setOrder] = useState({});
    if (cart.length === 0) {
        return <h2> No hay productos en tu carrito. </h2>
    }

    const crearOrder = () => {
        
        const db = getFirestore();
        const querySnapshot = collection (db, 'ordenes');
        setOrder({
            buyer: {
                email: 'at@gmail.com',
                nombre: 'Agustin Toponi',
                telefono: '+54 9 3402 481150'
            },
            item: cart,
            total: total,
        
        });
        addDoc(querySnapshot, order).then((response) => {
            console.log(response);
            alert("Orden creada con exito");
        })
        .catch(error => console.log(error))
    }
    

    
  return (
            
    <>
            
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
                                    <ListGroup.Item>Cantidad: {p.quantity}</ListGroup.Item>
                                    <ListGroup.Item>Total: ${total}</ListGroup.Item>
                                    
                                     
                                     
                                   <div className="botonCard">
                                   
                                   <Button variant="primary" onClick={() => removeCart(p.id)}> Eliminar producto</Button>
                                   </div>
                                   
                                   
                                </ListGroup>
                    </Card>
                   
                </div>
            ), [])}
            <div className="Botones">
            <Button variant="primary" onClick={() => clearCart()} > Vaciar Carrito </Button> 
            
            <Button variant="primary" onClick={() => crearOrder()}> Finalizar compra </Button>
            </div>
        </>
    
  )
}

export default CartDetalle;