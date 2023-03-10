'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import Button from './Button'
import { useState } from 'react';

export default function ImageProfile({ src, width, height }) {
  
  const [titulo, setTitulo] = useState("");
  
  return (
    <div className={styles.contenedor_p}>
      <Image 
        className={styles.contenedor_image}
        src={src}
        width={width}
        height={height}
      />
      <div className="contenedor_image">
        <h2 className="titulo">{titulo}</h2>
      </div>

      <input
          className={styles.contenedor_input} 
         type="text" 
         onChange={(e) => setTitulo(e.target.value)} 
      />
      <Button 
      str={titulo}
      texto="Copiar"
      />
    </div>
  );
}