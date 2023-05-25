"use client";

import { useState } from "react";
import NavigationClient from "../components/NavigationClient";
import ProductClientCatalogo from "../components/ProductClientCatalogo";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import HeadTitle from "../components/HeadTitle";

export default function InicioCliente() {
  const shoes = [
    {
      code: "W001",
      name: "Botas de cuero",
      description:
        "Botas elegantes de cuero genuino para ocasiones especiales.",
      price: 129.99,
      image:
        "https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      code: "W002",
      name: "Sandalias de verano",
      description: "Sandalias ligeras y frescas para disfrutar del verano.",
      price: 59.99,
      image:
        "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      code: "W003",
      name: "Tacones altos",
      description: "Zapatos de tacón alto para lucir elegante y estilizada.",
      price: 89.99,
      image:
        "https://media.istockphoto.com/id/942926448/es/foto/conjunto-de-zapatos-de-las-mujeres-de-color-sobre-fondo-beige.jpg?b=1&s=612x612&w=0&k=20&c=E27BT325NpR7eX1kaod8nO6ARrdYBfHVQvIggAqOYac=",
    },
    {
      code: "W004",
      name: "Bailarinas",
      description: "Zapatos planos y cómodos para el día a día.",
      price: 49.99,
      image:
        "https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      code: "W005",
      name: "Zapatos de fiesta",
      description: "Zapatos brillantes y glamorosos para fiestas y eventos.",
      price: 79.99,
      image:
        "https://media.istockphoto.com/id/1034457896/es/foto/mujer-elegante-con-zapatos-de-verano-negro-con-suela-de-paja-al-aire-libre-sandalias-c%C3%B3modas.jpg?s=612x612&w=is&k=20&c=BIcnVAb60q-SfgmPowDw-tHJ4xA3Jr7bYdImMRzK1Xw=",
    },
    {
      code: "W006",
      name: "Botines de moda",
      description:
        "Botines modernos y versátiles para combinar con diversos looks.",
      price: 109.99,
      image:
        "https://media.istockphoto.com/id/627429942/es/foto/mujer-zapatos.jpg?b=1&s=612x612&w=0&k=20&c=QaXNsBGku-tu4GxQT38BcyWZFYvcvX52Wq8UQZ7wV0o=",
    },
  ];

  const [ countKart, setCountKart ] = useState(0);
  const [ show, setShow ] = useState(false);

  const addToKart = () => {
    setCountKart(countKart + 1);
    setShow(true)
    setTimeout(() => { setShow(false) }, 2000);
  };

  return (
    <>
      <NavigationClient countKart={countKart} />
      <Alert variant="success" show={show}>
      <br /><br />
       { '¡ Se agrego al carrito con exito !' }
        </Alert>
      <HeadTitle title={"Estilos Disponibles para tí"} />
      <Container>
      <br />
        <Row>
          {shoes.map((model, index) => (
            <ProductClientCatalogo
              code={model.code}
              name={model.name}
              description={model.description}
              price={model.price}
              image={model.image}
              addToKart={addToKart}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
