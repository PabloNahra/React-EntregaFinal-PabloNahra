 import './ItemCount.css'
 import { useState } from "react";

 export default function ItemCount({stock, onAdd}){
    const [cantidad, setCantidad] = useState(1);

    const incremento = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1);
        }
    }

    const decremento = () => {
        if(cantidad > 1){
            setCantidad(cantidad-1);
        }
    }

    return(
        <div className='Contador'>
            <div className='Controles'>
                <button onClick={decremento}> - </button>
                <h3>{cantidad}</h3>
                <button onClick={incremento}> + </button>
            </div>
            <div >
                <button className='escalar' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
       </div>
    )
}