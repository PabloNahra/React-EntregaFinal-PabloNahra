import { useContext, useState } from "react";
import "./Item.css";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

export default function ItemDet({id, title, description, image, price}) {
    const [cantidadAdd, setCantidadAdd] = useState(0)
    
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (cantidadAdd) => {
        setCantidadAdd(cantidadAdd)

    const item = {
        id, title, description, image, price
    }

    addItem(item, cantidadAdd)

}

    return (
        <div>
            <li key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image} width={150} alt="image_producto" />
                <p>$ {price}</p>
            </li>
            <div>
                {
                    cantidadAdd > 0 ? (<Link to="/cart"><button to="/cart" >Terminar Compra</button></Link>):
                        (<ItemCount inicial={1} stock={1000} 
                            onAdd={
                                // (cantidad) => console.log('Cantidad agregada ', cantidad)
                                //handleOnAdd()
                                (cantidad) => handleOnAdd(cantidad)
                            } />
                            )
                }
            </div>
        </div>
    );
}