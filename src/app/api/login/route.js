const sql = require('mssql');
import { config } from '../../../../utils/database/db';
import consulta from '../../../../utils/database/query';
import { NextResponse } from 'next/server.js';

  export async function POST(request){

    try {

      const datos  = await request.json();
      const {rol, email, password } = await datos;  

      let poolConnection = await sql.connect(config);
      let resultSet = await poolConnection
      .request()
      .query(consulta.LOGIN_QUERY(rol,email, password));
      poolConnection.close();

      const data = resultSet.recordset;

      if (data.length == 0 ){

        return NextResponse.json({ message: 'Credenciales no validas' }, { status: 404 });
      }
      else {

        return NextResponse.json(data, { status: 200 });
      }

    }catch ( error ){
      console.error(error.message);
      return  NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 })
    }

  }