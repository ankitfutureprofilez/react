import Left from "./Left";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Admin() {
    return ( 
        <section id="admin">
            <Container>
                <h2>Admin Pannel</h2>
      <Row>
        <Col sm={2}><Left/></Col>
        <Col sm={10}>
        <h2>Admin</h2>
        </Col>
      </Row>
      </Container>
        </section>
     );
}

export default Admin;