"use client"

import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import ProductCatalogo from '../components/ProductCatalogo';
  

export default function Catalogo() {

    const shoes = [
        {
            code: 'W001',
            name: 'Botas de cuero',
            description: 'Botas elegantes de cuero genuino para ocasiones especiales.',
            price: 129.99,
            image: 'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            code: 'W002',
            name: 'Sandalias de verano',
            description: 'Sandalias ligeras y frescas para disfrutar del verano.',
            price: 59.99,
            image: 'https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            code: 'W003',
            name: 'Tacones altos',
            description: 'Zapatos de tacón alto para lucir elegante y estilizada.',
            price: 89.99,
            image: 'https://media.istockphoto.com/id/942926448/es/foto/conjunto-de-zapatos-de-las-mujeres-de-color-sobre-fondo-beige.jpg?b=1&s=612x612&w=0&k=20&c=E27BT325NpR7eX1kaod8nO6ARrdYBfHVQvIggAqOYac='
        },
        {
            code: 'W004',
            name: 'Bailarinas',
            description: 'Zapatos planos y cómodos para el día a día.',
            price: 49.99,
            image: 'https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            code: 'W005',
            name: 'Zapatos de fiesta',
            description: 'Zapatos brillantes y glamorosos para fiestas y eventos.',
            price: 79.99,
            image: 'https://media.istockphoto.com/id/1034457896/es/foto/mujer-elegante-con-zapatos-de-verano-negro-con-suela-de-paja-al-aire-libre-sandalias-c%C3%B3modas.jpg?s=612x612&w=is&k=20&c=BIcnVAb60q-SfgmPowDw-tHJ4xA3Jr7bYdImMRzK1Xw='
        },
        {
            code: 'W006',
            name: 'Botines de moda',
            description: 'Botines modernos y versátiles para combinar con diversos looks.',
            price: 109.99,
            image: 'https://media.istockphoto.com/id/627429942/es/foto/mujer-zapatos.jpg?b=1&s=612x612&w=0&k=20&c=QaXNsBGku-tu4GxQT38BcyWZFYvcvX52Wq8UQZ7wV0o='
        }
    ];


    return (
        <>
            <Navigation /> <br />
            <Container>
                    <Row>
                        <Col sm="12">
                            <br />
                            <p className='display-6'>Catalogo</p>
                        </Col>
                    </Row> <br />
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Buscar por:</Form.Label>
                            <Form.Select>
                                <option value="1">Codigo</option>
                                <option value="2">Precio</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Buscar:</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="auto">
                            <br />
                            <Button variant="primary" type="submit">
                                <i class="bi bi-search">Buscar</i>
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} md="auto">
                            <br />
                            <Button variant="success" type="submit">
                                <i class="bi bi-plus-lg">Agregar estilo</i>
                            </Button>
                        </Form.Group>
                    </Row>
                    <br />
                    {shoes.map((shoe, index) => (
                        <Row key={index}
                            onClick={() => alert(`index: ${index}, shoe selected ${shoe.name}`)}
                        >
                            <ProductCatalogo
                                code={shoe.code}
                                name={shoe.name}
                                description={shoe.description}
                                price={shoe.price}
                                image={shoe.image}
                            />
                        </Row>
                    ))}
            </Container>
        </>
    );
}