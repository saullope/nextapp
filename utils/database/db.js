const sql = require('mssql');

const config = {
    user: 'Andy', 
    password: 'Tde4529!', 
    server: "proyectoiso.database.windows.net", 
    port: 1433, 
    database: 'proyecto', 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

console.log("Starting connection server...");
connectAndQuery();


// this is a structure of a simple query consum
/*async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        const n = 5;
        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`SELECT * FROM Cliente WHERE idCliente = ${n}`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        console.log(`Resultado: ${JSON.stringify(resultSet.recordset)}`);

        // close connection only when we're certain application is finished
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}*/

module.exports = {
    connectAndQuery,
    config
}