import { useState } from "react"
import styles from "../page.module.css"


export default function Button({ str, texto }){
    
    const [estado, setEstado] = useState(false)

    const copiar = () => {
        navigator.clipboard.writeText(str);
        setEstado(true);
        alert("Texto copiado");
    }

    return(
        <div className={ styles.contenedor_button }>
            <button 
          className={styles.button}
          onClick={copiar}
        >
            { texto }
        </button>
        </div>

    )
}