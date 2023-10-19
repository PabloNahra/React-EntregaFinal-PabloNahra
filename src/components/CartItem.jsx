import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function CartItem(props){
    const {removeItem} = useContext(CartContext);

    return(
        <ul>
            <li>{props.title}</li>
            <li>{props.description}</li>
            <li>Cantidad: {props.quantity}</li>
            <li>Precio: {props.price}</li>
            <li>Subtotal: {props.quantity * props.price}</li>
            <li><button onClick={() => removeItem(props.id)}>Eliminar Item</button></li>
        </ul>
    )
}