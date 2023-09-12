import ItemDet from "./ItemDet";

export default function ItemDetail({productos}) {
    return (
      <div>
        <ul>
            {productos.map((producto) => (
                <ItemDet 
                id={producto.id} 
                title={producto.nombre} 
                description={producto.descripcion} 
                image={producto.imagen} 
                price={producto.precio}>
                </ItemDet>
            ))}
        </ul>
      </div>
    );
}