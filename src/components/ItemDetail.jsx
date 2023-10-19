// import ItemDet from "./ItemDet";
import { useContext, useState } from "react";
import "./ItemDet.css";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";


export default function ItemDetail({productos}) {
  const [cantidadAdd, setCantidadAdd] = useState(0)
  const {addItem} = useContext(CartContext)
  const handleOnAdd = (cantidadAdd) => {
      setCantidadAdd(cantidadAdd)
      const item = {
      id: productos.id, 
      title: productos.nombre, 
      description: productos.descripcion, 
      image: productos.imagen, 
      price: productos.precio
    }
  addItem(item, cantidadAdd)
}

return (
  <div className="itemdet">
      <li>
          <h2>{productos.nombre}</h2>
          <p>{productos.descripcion}</p>
          <img src={productos.imagen} width={150} alt="image_producto" />
          <p>$ {productos.precio}</p>
      </li>
      <div>
          {
              cantidadAdd > 0 ? (<Link to="/cart"><button to="/cart" >Terminar Compra</button></Link>):
                  (<ItemCount stock={1000} 
                      onAdd={
                          (cantidad) => handleOnAdd(cantidad)
                      } />
                      )
          }
      </div>
  </div>
);

}