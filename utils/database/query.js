
const LOGIN_QUERY = (rol, email, password) => {

    if (rol == "Administrador") {
        return `SELECT * FROM Administrador WHERE usuario = '${email}' AND clave = '${password}'`
    }
    else {
        return `
            SELECT c.* FROM Cliente c
            INNER JOIN CredencialesCliente cc ON c.idCliente = cc.idCliente
            WHERE correo = '${email}' AND clave = '${password}'
        `
    }

};

const GET_PEDIDOS = (offset) => {
    return `SELECT pc.idPedido_Calzado, 
	pc.cantidad_pares, 
	pc.fecha_entrega, 
	pc.precio_pedido, 
	pc.total_precio, 
	c.nombre_cliente 
    FROM pedido_calzado pc 
	INNER JOIN Cliente c ON pc.fk_idCliente = c.idCliente 
    ORDER BY pc.idPedido_Calzado
	OFFSET CAST(${offset} AS INT) ROWS FETCH NEXT 5 ROWS ONLY`
};

const GET_CLIENTES = (offset) => {
    return `SELECT * FROM Cliente
    ORDER BY idCliente
    OFFSET ${offset} ROWS FETCH NEXT 6 ROWS ONLY`;
};

const GET_NAME_CLIENTE = (name) => {
    return `SELECT * FROM Cliente
    WHERE LOWER(nombre_cliente) LIKE LOWER('%${name}%')
    ORDER BY idCliente
    `;
}
export default {
    LOGIN_QUERY,
    GET_PEDIDOS,
    GET_CLIENTES,
    GET_NAME_CLIENTE
};