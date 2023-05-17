import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavHome(){
    return (
        <div>
             <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gaitan Shoes</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
      <br />
        </div>
    )
}