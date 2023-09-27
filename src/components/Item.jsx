import "./Item.css";
import { Link, NavLink } from 'react-router-dom';

export default function Item({prodItemId, nombre, descripcion, precio, imagen}) {

    return (
        <div>
            <li key={prodItemId}>
                <Link to={`/item/${prodItemId}`}>
                {/* <Link to={`/item/4`}> */}
                    <img src={imagen} width={100} alt="img-prod"/> 
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                    <span>$ {precio}</span>
                </Link> 
            </li>
        </div>
    );
}