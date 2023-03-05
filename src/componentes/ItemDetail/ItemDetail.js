import ItemCount from "../../componentes/ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";
import { useParams} from "react-router-dom";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
const ItemDetail = ({ listaProds }) => {
    const {addToCart} = useContext(cartContext);
    const { id } = useParams();
    const [contador, setContador] = useState(1);
    const prod = listaProds.filter((p) => p.id ===(id))

    return (
        <>
            {prod.map((p) => (
                <div key={p.id}>
                    <Card className="cards">
                                <Card.Img variant="top" src={`${p.imagen}`} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>
                                        {p.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Precio: ${p.precio}</ListGroup.Item>
                                    <ListGroup.Item>Stock: {p.stock}</ListGroup.Item>
                                    
                                    <ItemCount
                                    stockP={p.stock}
                                    contador={contador}
                                    setContador={setContador}  />
                                   <div> <Button variant="primary" onClick={() => addToCart(p, contador)}> Agregar al carrito </Button> </div>
                                    
                                </ListGroup>
                    </Card>
                    
                </div>
            ), [])}
        </>
    )
}

export default ItemDetail