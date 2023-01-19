import Card  from "react-bootstrap/Card";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail";
import ItemCount from "../../componentes/ItemCount/ItemCount";
function Accesorios() {
  return (
    <div className='cards'> 
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_2X_732141-MLA49635490017_042022-F.webp" />
  <Card.Body>
    <Card.Title>Lampara Led Gamer</Card.Title>
    <Card.Text>
      Ilumina tu lugar de juego con esta lámpara y dale el cambio estético que necesitas.
      Esta lampara está impresa en 3D mide 30cm de largo e incluye transformador de 12V para las luces LED. No te la pierdas!
    </Card.Text>
    <ItemDetail />
    <ItemCount />
    
  </Card.Body>
</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_785700-MLA48987599718_012022-O.webp" />
<Card.Body>
  <Card.Title>Soporte para Auriculares PACMAN</Card.Title>
  <Card.Text>
  Este soporte es UNIVERSAL y se adapta a los auriculares tipo vincha de cualquier tamaño.
  Realizados en PLA mediante impresión 3D. Cuentan además con un relleno que les proporciona alta resistencia mecánica.
  Conseguilo ahora mismo en MUNDO GAMER.
  </Card.Text>
  <ItemDetail />
  <ItemCount />
  
</Card.Body>
</Card>


</div>
  )
}

export default Accesorios