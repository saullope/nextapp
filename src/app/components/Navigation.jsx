import { Navbar, Container, Nav, Form, Button, Dropdown } from "react-bootstrap";
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
          <Navbar.Brand href="/admin">Panel de Administracion</Navbar.Brand>
          <Nav className="me-auto" >
            {routes.map((route) => (
              <Nav.Link href={route.path} eventKey={route.name}
                key={route.name}
              >
                {route.name} </Nav.Link>
            ))}
          </Nav>
          <Form>
            <Dropdown >
              <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              <i className="bi bi-person"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/"><i className="bi bi-box-arrow-left"> Salir </i></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}