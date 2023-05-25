import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import Link from 'next/link';

export default function NavigationClient(){

    const routes = [
        {
          name: 'Datos personales',
          path: '/catalogo'
        },
        {
          name: 'Mis pedidos',
          path: '/pedidos'
        }
      ];
    
    
      return (
        <>
          <Navbar bg="light" variant="secondary" fixed="top">
            <Container>
              <Navbar.Brand href="">Bienvenido</Navbar.Brand>
              <Nav className="me-auto" >
                { routes.map((route) => (
                  <Nav.Link href={route.path} eventKey={route.name} 
                  key={route.name}
                  >
                    {route.name} </Nav.Link>
                )) }
              </Nav>
              <div>
                    <Button variant="outline-primary"><i class="bi bi-cart"></i></Button>
                </div><br />
              <Form>
                <Link href="/">
                <Button variant="outline-danger" >Cerrar Sesion</Button>
                </Link>
              </Form>
            </Container>
          </Navbar>
        </>
        );
}