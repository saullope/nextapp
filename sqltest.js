const sql = require('mssql');

const config = {
    user: process.env.NEXT_PUBLIC_DB_USER, 
    password: process.env.NEXT_PUBLIC_DB_PASSWORD, 
    server: process.env.NEXT_PUBLIC_DB_SERVER, 
    port: process.env.NEXT_PUBLIC_DB_PORT, 
    database: process.env.NEXT_PUBLIC_DB_DATABASE, 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

/*
    //Use Azure VM Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-vm'
        },
        options: {
            encrypt: true
        }
    }

    //Use Azure App Service Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-app-service'
        },
        options: {
            encrypt: true
        }
    }
*/

console.log("Starting...");
console.log(config);
connectAndQuery();

async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`SELECT * FROM Cliente`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        console.log(`Resultado: ${JSON.stringify(resultSet.recordset)}`);

        // close connection only when we're certain application is finished
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}