"use client"

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import TablaPedidos from '../components/TablaPedidos';
import HeadTitle from '../components/HeadTitle';
import { set } from 'react-hook-form';

export default function Pedidos() {

  const [respond, setRespond] = useState([]);
  const [ offset, setOffset ] = useState(0);
  const [ pagina, setPagina ] = useState(1);
  const [ recuperando, setRecuperando ] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setRecuperando(true);
      const url = `http://localhost:3000/api/pedidos/${offset}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      setRespond(responseData);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setRecuperando(false);
    }    
  };

    const watchOrders = ( order ) => {
        alert(`ver pedido de: ${order.client}`);
    };

    const searchOrders = () => {
        alert('Buscar pedidos');
    };

    const trashOrders = ( order ) => {
        alert(`eliminar pedido de: ${order.client}`);
    };

    const nextPage = () => {

      if(offset >= 0){
        setOffset(offset + 5);
        fetchData();
        setPagina(pagina + 1);
      }
    };

    const prevPage = () => {
      if( offset >=5 ){
        setOffset(offset - 5);
        fetchData();
        setPagina(pagina - 1);
      } 
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
                                <i className="bi bi-search">Buscar</i>
                            </Button>
                        </Form.Group>
                    </Row><br />
                    <Row>
                        <TablaPedidos 
                            respond={respond}
                            watchOrders={watchOrders}
                            trashOrders={trashOrders}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            pagina={pagina}
                            recuperando={recuperando}
                        />
                    </Row>
            </Container>
        </>
    );
}