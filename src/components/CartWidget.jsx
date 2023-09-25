import carrito from "../assets/carrito.svg"
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget(){
    const {totalCant, totQuantity} = useContext(CartContext);

    return(
        <Link to="/cart" style={{display: totQuantity > 0 ? 'block' : 'none'}}><div>
            <img style={{width: 40}} src={carrito} alt="carrito"/>
            <span>{totalCant} </span>
        </div>
        </Link>
    )

}