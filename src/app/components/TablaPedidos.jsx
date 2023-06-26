import { Table, Spinner } from 'react-bootstrap';
import { useState } from 'react';

export default function TablaPedidos({ respond, watchOrders, trashOrders, nextPage, prevPage, pagina, recuperando }) {

    return (
        <div>
            <Table responsive="sm">
                <thead className='table-dark'>
                    <tr>
                        <th># Pedido</th>
                        <th>Cant. Pares</th>
                        <th>Fecha de Entrega</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Cliente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {recuperando
                        ? 
                           <p className='h3'>Cargando..</p>
                        :
                        respond.map((value) => (
                            <tr key={value.idPedido_Calzado}>
                                <td>{value.idPedido_Calzado}</td>
                                <td>{value.cantidad_pares}</td>
                                <td>{value.fecha_entrega}</td>
                                <td>C$ {value.precio_pedido}</td>
                                <td>C$ {value.total_precio}</td>
                                <td>{value.nombre_cliente}</td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => watchOrders(value)}
                                    >
                                        <i className="bi bi-eye"></i>
                                    </button>
                                    <button className="btn btn-danger"
                                        onClick={() => trashOrders(value)}
                                    >
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-success' onClick={prevPage} disabled={pagina === 1}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                {
                    recuperando
                    ? <Spinner animation="border" variant="primary" />
                    : <p className='mx-3'>pag. {pagina}</p>
                }
                <button className='btn btn-success' onClick={nextPage} disabled={ pagina === 2 } >
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}