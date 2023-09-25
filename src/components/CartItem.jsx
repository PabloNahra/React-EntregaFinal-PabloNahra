

export default function CartItem(key){
    return(
        <ul>
            <li>{key.title}</li>
            <li>{key.description}</li>
            <li>Cantidad: {key.quantity}</li>
            <li>Precio: {key.price}</li>
            <li>Subtotal: {key.quantity * key.price}</li>
        </ul>
    )
}