import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import Link from 'next/link';

export default function Navigation() {

  const routes = [
    {
      name: 'Catalogo',
      path: '/catalogo'
    },
    {
      name: 'Pedidos',
      path: '/pedidos'
    },
    {
      name: 'Clientes',
      path: '/clientes'
    }
  ];


  return (
    <>
      <Navbar bg="light" variant="secondary" fixed="top">
        <Container>
          <Navbar.Brand href="">Panel de Administracion</Navbar.Brand>
          <Nav className="me-auto" >
            { routes.map((route) => (
              <Nav.Link href={route.path} eventKey={route.name} 
              key={route.name}
              >
                {route.name} </Nav.Link>
            )) }
          </Nav>
          <Form>
            <Link href="/">
            <Button variant="outline-danger" >Cerrar Sesion</Button>
            </Link>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}