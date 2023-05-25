"use client"

import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import TablaPedidos from '../components/TablaPedidos';
import HeadTitle from '../components/HeadTitle';

export default function Pedidos() {

    const orders = [
        {
          client: 'Juan Perez',
          code: 'W001',
          style: 'Botas de cuero',
          orderDate: '2023-05-20',
          deliveryDate: '2023-06-05',
          totalPairs: 2,
          totalPrice: 259.98
        },
        {
          client: 'María Lopez',
          code: 'W002',
          style: 'Sandalias de verano',
          orderDate: '2023-05-21',
          deliveryDate: '2023-06-10',
          totalPairs: 1,
          totalPrice: 59.99
        },
        {
          client: 'Carlos Ramirez',
          code: 'W003',
          style: 'Tacones altos',
          orderDate: '2023-05-22',
          deliveryDate: '2023-06-12',
          totalPairs: 2,
          totalPrice: 179.98
        },
        {
          client: 'Ana Torres',
          code: 'W004',
          style: 'Bailarinas',
          orderDate: '2023-05-23',
          deliveryDate: '2023-06-07',
          totalPairs: 1,
          totalPrice: 49.99
        },
        {
          client: 'Pedro Sanchez',
          code: 'W005',
          style: 'Zapatos de fiesta',
          orderDate: '2023-05-24',
          deliveryDate: '2023-06-09',
          totalPairs: 2,
          totalPrice: 159.98
        },
        {
          client: 'Laura Morales',
          code: 'W006',
          style: 'Botines de moda',
          orderDate: '2023-05-25',
          deliveryDate: '2023-06-15',
          totalPairs: 1,
          totalPrice: 109.99
        },
        {
          client: 'Roberto Fernandez',
          code: 'W001',
          style: 'Botas de cuero',
          orderDate: '2023-05-26',
          deliveryDate: '2023-06-08',
          totalPairs: 2,
          totalPrice: 259.98
        },
        {
          client: 'Sara Navarro',
          code: 'W002',
          style: 'Sandalias de verano',
          orderDate: '2023-05-27',
          deliveryDate: '2023-06-11',
          totalPairs: 1,
          totalPrice: 59.99
        }
    ];

    const watchOrders = ( order ) => {
        alert(`ver pedido de: ${order.client}`);
    };

    const searchOrders = () => {
        alert('Buscar pedidos');
    };

    const trashOrders = ( order ) => {
        alert(`eliminar pedido de: ${order.client}`);
    };


    return (
        <>
            <Navigation />
            <HeadTitle title={"Pedidos"} />
            <Container>
                <Row className='mb-3'>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Buscar por:</Form.Label>
                            <Form.Select>
                                <option value="1">Cliente</option>
                                <option value="2">Fecha de pedido</option>
                                <option value="2">Entregados</option>
                                <option value="2">Sin entregar</option>
                                <option value="2">Cancelados</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Buscar:</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="auto">
                            <br />
                            <Button variant="primary" type="submit" onClick={searchOrders}>
                                <i class="bi bi-search">Buscar</i>
                            </Button>
                        </Form.Group>
                    </Row><br />
                    <Row>
                        <TablaPedidos 
                            orders={orders}
                            watchOrders={watchOrders}
                            trashOrders={trashOrders}    
                        />
                    </Row>
            </Container>
        </>
    );
}