import Card  from "react-bootstrap/Card";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail";
function Consola() {
  return (
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$1600px--t$" />
      <Card.Body>
        <Card.Title>PlayStation 5 DIGITAL </Card.Title>
        <Card.Text>
          La nueva consola de PlayStation, la PlayStation 5 llegó a MundoGamer!
          La PS5 edición digital es una versión completamente digital de la consola PS5 que no trae unidad de disco.
        </Card.Text>
        <ItemDetail />
        <ItemCount />
        
      </Card.Body>
    </Card>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://assets.xboxservices.com/assets/d2/d4/d2d49e15-65ea-4e87-9d35-66123e183423.jpg?n=Cyberpunk-2077_Feature-0_XSX_1600x1600.jpg" />
    <Card.Body>
      <Card.Title>XBOX SERIES X/S</Card.Title>
      <Card.Text>
        Las últimas novedades de Xbox están aterrizando y como no, MundoGamer te acompaña para que emprendas una aventura con estas dos grandes consolas. 

      </Card.Text>
      <ItemDetail />
      <ItemCount />
      
    </Card.Body>
  </Card>

    </div>
  )
}

export default Consola