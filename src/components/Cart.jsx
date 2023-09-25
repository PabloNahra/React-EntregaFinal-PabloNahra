import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function Cart() {
    const { cart, clearCart, totalQuantity, total, totalCant} = useContext(CartContext);

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/"> Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {/* {cart.map(p => <h1>p.id</h1>)} */}
            <h3>Total: $ {total}</h3>
            <h3>Total unidades: {totalCant}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout">Finalizar compra - Checkout</Link>

        </div>
    )
}