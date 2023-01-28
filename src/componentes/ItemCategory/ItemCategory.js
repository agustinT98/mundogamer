import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemCategory = ({ listaProductos }) => {

    const { categoria } = useParams();

    const category = listaProductos.filter((p) => p.categoria === categoria)

    return (
        <>
            {category.map((p) => (
                <Col sm = "auto" className="justify-content-center products-cards" key={p.id}>
                    <Card className="cards">
                        <Card.Img
                            variant="top"
                            src={p.imagen}
                            alt={p.name}
                        />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Link to={`/category/${p.categoria}/item/${p.id}`}><button className="details-button">Ver detalles</button></Link>
                        </Card.Body>
                        <ItemCount />
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default ItemCategory;