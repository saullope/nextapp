import { Table } from 'react-bootstrap';

export default function TablaPedidos( { orders, watchOrders, trashOrders } ) {

    return (
        <div>
            <Table responsive="sm">
                <thead className='table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Cliente</th>
                        <th>Codigo calzado</th>
                        <th>Estilo</th>
                        <th>Fecha de pedido</th>
                        <th>Fecha de entrega</th>
                        <th>Total pares</th>
                        <th>Total precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                        { orders.map((order, index) => (
                            <tr key={index}>
                            <td>{ index + 1 }</td>
                            <td>{ order.client }</td>
                            <td>{ order.code }</td>
                            <td>{ order.style }</td>
                            <td>{ order.orderDate }</td>
                            <td>{ order.deliveryDate }</td>
                            <td>{ order.totalPairs }</td>
                            <td>{ order.totalPrice * order.totalPairs}</td>
                            <td>
                                <button className="btn btn-primary"
                                    onClick={ () => watchOrders(order)}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                                <button className="btn btn-danger"
                                    onClick={ () => trashOrders(order) }
                                >
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                            </tr>
                        )) }
                </tbody>
            </Table>
        </div>
    );
}