import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";



const Item = ({ listaProductos }) => {
    return (
        <>
            {listaProductos.map((p) => (
                <Col sm = "auto" className="justify-content-center products-cards" key={p.id}>
                    <Card className="cards">
                        <Card.Img
                            variant="top"
                            src={`${p.imagen}`}
                            alt={p.name}
                        />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Link to={`item/${p.id}`}><button className="details-button">Ver detalles</button></Link>
                            
                        </Card.Body>
                       
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default Item;
