import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


export default function Cart() {
    const { cart, clearCart, totQuantity, tot, total, totalCant} = useContext(CartContext);

    console.log("Cart - totalCant")
    console.log(totalCant)
    console.log(totQuantity)

    
    //if(totalCant === 0){
    if(!totQuantity){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {/* {cart.map(p => <h1>{p.id}</h1>)} */}
            {/* {cart.map(p => <h1>{p.id + " " + p.title +  " " + p.quantity + " " + p.price}</h1>)} */}
            {cart.map(p => <CartItem key={p.id} title={p.title} {...p}/>)}
            <h3>Total: $ {tot}</h3>
            <h3>Total unidades: {totQuantity}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout">Finalizar compra - Checkout</Link>

        </div>
    )
}