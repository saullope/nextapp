'use client'

//import { useEffect } from "react"
import styles from "../page.module.css"

export default function Table({  }){
    return (

<div className={styles.contenedor_tabla} >   
  <table>
    <tr>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>País</th>
      <th>Contacto</th>
      <th>Consumo</th>
    </tr>
    <tr>
      <td>Sofía</td>
      <td>Martínez</td>
      <td>Argentina</td>
    </tr>
  </table>
  </div>
    )
}