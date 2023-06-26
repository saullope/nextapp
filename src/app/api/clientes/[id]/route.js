const sql = require('mssql');
import { config } from '../../../../../utils/database/db';
import consulta  from '../../../../../utils/database/query';
import { NextResponse } from 'next/server.js';

export async function GET(request, context) {

const { id } = context.params;
    try{

  //      console.log(id);

        const poolConnection = await sql.connect(config);
        const resultSet = await poolConnection
        .request()
        .query(consulta.GET_CLIENTES(id));
        poolConnection.close();

        const data = resultSet.recordset;
        if(data.length == 0){
            return NextResponse.json({ message: 'No hay clientes' }, { status: 404 });
        }{
            return NextResponse.json(data, { status: 200 });
        }


    }catch (error) {
        console.error(error.message);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
};

export async function POST(request){
    
    const datos = await request.json();
    const { name } = await datos;
    try{
        let poolConnection = await sql.connect(config);
        let resultSet = await poolConnection
        .request()
        .query((consulta.GET_NAME_CLIENTE(name)));
        poolConnection.close();

        const data = resultSet.recordset;
        if(data.length == 0){
            return NextResponse.json({ message: 'No hay clientes' }, { status: 404 });
        }{
            return NextResponse.json(data, { status: 200 });
        }

    }catch (error){
        console.error(error.message);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
}