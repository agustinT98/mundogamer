
import Card from 'react-bootstrap/Card';
import ItemCount from '../../componentes/ItemCount/ItemCount.jsx';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';


const PC = () => {
  return (
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_799971-MLA31147897175_062019-O.jpg" />
      <Card.Body>
        <Card.Title>PC Gamer Basica</Card.Title>
        <Card.Text>
          Esta es una PC Gamer basica con I3 9na Generacion, 8gb de RAM y una grafica Nvidia 1080 ti <br></br><br></br>
           
          <ItemDetail />
        </Card.Text>
         
        <ItemCount />
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-9303097.jpg" />
    <Card.Body>
      <Card.Title>PC Gamer Media</Card.Title>
      <Card.Text>
        Esta es una PC Gamer Media con I5 9na Generacion, 16gb de RAM y una grafica Nvidia 2080 ti. <br></br>
        <ItemDetail />
      </Card.Text> 
      <ItemCount />
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://s3-sa-east-1.amazonaws.com/saasargentina/7SWj6IJaePxEnxHEXnHi/imagen" />
      <Card.Body>
        <Card.Title>PC Gamer Alta</Card.Title>
        <Card.Text>
          Esta es una PC Gamer Alta con I9  10ma Generacion, 16gb de RAM y una grafica Nvidia 3080 ti. <br></br>
          <ItemDetail />
        </Card.Text>
        <ItemCount /> 
      </Card.Body>
    </Card>
  
    </div>
    

    
  );
}

export default PC;