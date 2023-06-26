import { Navbar, Container, Nav, Form, Button, Dropdown } from "react-bootstrap";
import Link from "next/link";

export default function NavigationClient({ countKart }) {
  const routes = [
    {
      name: "Datos personales",
      path: "/catalogo",
    },
    {
      name: "Mis pedidos",
      path: "/pedidos",
    },
  ];

  return (
    <>
      <Navbar bg="light" variant="secondary" fixed="top">
        <Container>
          <Navbar.Brand href="">Bienvenido</Navbar.Brand>
          <Nav className="me-auto">
            {routes.map((route, index) => (
              <Nav.Link href={route.path} eventKey={route.name} key={index}>
                {route.name}{" "}
              </Nav.Link>
            ))}
          </Nav>
          <div className="me-3">
            <Button variant="outline-primary">
              <i className="bi bi-cart"></i>
              {countKart > 0 ? <span class="position-absolute badge rounded-pill bg-danger">{countKart}</span> : null}
            </Button>
          </div>
          <br />
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
  );
}
