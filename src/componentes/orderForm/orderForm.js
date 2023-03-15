import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const orderForm = () => {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" id='name' />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="Apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
           
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}
  


export default orderForm;