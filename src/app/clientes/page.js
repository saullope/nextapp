"use client"

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Container, Row, Col, Form, Button, Table, Spinner } from 'react-bootstrap';
import HeadTitle from '../components/HeadTitle';

export default function Pedidos() {
    const [clientes, setClientes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pagina, setPagina] = useState(1);
    const [recuperando, setRecuperando] = useState(false);
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        fetchData();
    }, [offset]);

    useEffect(() => {
        fetchName();
    }, [nombre]);

    const fetchData = async () => {
        try {
            setRecuperando(true);
            const url = `http://localhost:3000/api/clientes/${offset}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            setClientes(responseData);
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setRecuperando(false);
        }
    };

    const fetchName = async () => {
        try {
            setRecuperando(true);
            const url = 'http://localhost:3000/api/clientes/0';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nombre }),
            });
            const responseData = await response.json();
            setClientes(responseData);
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setRecuperando(false);
        }
    };

    const handleSearch = (e) => {
        setNombre(e.target.value);
    };

    const nextPage = () => {
        if (offset >= 0) {
            setOffset((prevOffset) => prevOffset + 6);
            setPagina((prevPagina) => prevPagina + 1);
        }
    };

    const prevPage = () => {
        if (offset >= 5) {
            setOffset((prevOffset) => prevOffset - 6);
            setPagina((prevPagina) => prevPagina - 1);
        }
    };

    return (
        <>
            <Navigation />
            <HeadTitle title={"Clientes"} />
            <Container>
                <Row className='mb-3'>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Buscar:</Form.Label>
                        <Form.Control type="text" onChange={handleSearch} />
                    </Form.Group>
                </Row>
                <Row>
                    <Table responsive="sm">
                        <thead className='table-dark'>
                            <tr>
                                <th># Cliente</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                                <th>F. Ingreso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recuperando ? (
                                <tr>
                                    <td colSpan="5">
                                        <Spinner animation="border" variant="primary" />
                                    </td>
                                </tr>
                            ) : (
                                clientes.map((cliente) => (
                                    <tr key={cliente.idCliente}>
                                        <td>{cliente.idCliente}</td>
                                        <td>{cliente.nombre_cliente}</td>
                                        <td>{cliente.direccion_cliente}</td>
                                        <td>{cliente.telefono_cliente}</td>
                                        <td>{cliente.fecha_ingreso}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success' onClick={prevPage} disabled={pagina === 1}>
                            <i className="bi bi-arrow-left"></i>
                        </button>
                        <p className='mx-3'>pag. {pagina}</p>
                        <button className='btn btn-success' onClick={nextPage}>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </Row>
            </Container>
        </>
    );
}
