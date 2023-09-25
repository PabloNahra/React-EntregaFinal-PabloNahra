import carrito from "../assets/carrito.svg"
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget(){
    const {totalCant} = useContext(CartContext);

    return(
        <Link to="/cart"><div>
            <img style={{width: 50}} src={carrito} alt="carrito"/>
            <span>{totalCant} </span>
        </div>
        </Link>
    )

}