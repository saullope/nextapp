import { Navbar, Container, Nav } from "react-bootstrap"

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
    },
    {
      name: 'Dashboard',
      path: '/dashboard'
    }
  ];

  const aviso = (selectedKey) => {
    alert(`selected ${selectedKey}`);
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">Panel de Administracion</Navbar.Brand>
          <Nav className="me-auto" onSelect={aviso}>
            { routes.map((route) => (
              <Nav.Link href={''} eventKey={route.name}>{route.name}</Nav.Link>
            )) }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}