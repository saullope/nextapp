"use client"
// import  NavHome component from components folder
import { useState } from 'react';
import NavHome from './components/NavHome'
import Login from './components/Login'
import {
  Container,
  Row, Col, Card
} from 'react-bootstrap'

export default function Home() {

  const optionsRol = [
    {name: 'Administrador', value: 'admin'},
    {name: 'Cliente', value: 'custoner'},
  ]

  const [ rol, setRol ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleRol = (e) => {
    setRol(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOptionSubmit = (e) => {
    setRol(e.target.value);
  };

  const ShowRol = () => {
    alert(`This your's email: ${email} \n This your's rol: ${rol}`);
  }

  return (
    <div >
      <NavHome />
      <Container>
        <Row>
          <Col sm="8">
            <br /><br />
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Bienvenido a la tienda de zapatos
            </h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </Col>
          <Col sm="4">
            <Card>
              <br /><br />
              <Card.Body>
                <Login 
                  options={optionsRol}
                  handleSelect={handleOptionSubmit}
                  handleEmail={handleEmail}
                  handlePassword={handlePassword}
                  handleSubmit={ShowRol}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
