"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import { Container, Row, Col, Form } from "react-bootstrap";
import GraphicDash from "../components/GraphicDash";
import HeadTitle from "../components/HeadTitle";

export default function Admin() {
  return (
    <>
      <Navigation />
      <HeadTitle title={"Panel de Administración"} />
      <Container>
        <br />
      </Container>
      <Row>
          <Col sm="1"></Col>
          <Col sm="8">
            <GraphicDash />
          </Col>
          <Col sm="3">
            <br /><br />
            <Form.Group as={Col} md="4">
              <Form.Label>Cliente del mes:</Form.Label>
              <Form.Label>Mayor pedido del mes:</Form.Label>
              <Form.Label>Promedio del mes:</Form.Label>
            </Form.Group>
          </Col>
        </Row>
    </>
  );
}
