import ItemCount from "../../componentes/ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams} from "react-router-dom";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
const ItemDetail = ({ listaProds }) => {
    const {addToCart} = useContext(cartContext);
    const { id } = useParams();

    const prod = listaProds.filter((p) => p.id === parseInt(id))

    return (
        <>
            {prod.map((p) => (
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
                                    <ListGroup.Item>Precio: ${p.precio}</ListGroup.Item>
                                    <ListGroup.Item>Stock: {p.stock}</ListGroup.Item>
                                    <ItemCount />
                                   <div> <Button variant="primary" onClick={() => addToCart(p, p.stock)}> Agregar al carrito </Button> </div>
                                    
                                </ListGroup>
                    </Card>
                    
                </div>
            ), [])}
        </>
    )
}

export default ItemDetail