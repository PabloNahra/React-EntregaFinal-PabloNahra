import Item from "./Item";

export default function ItemList({productos}) {
    return (
      <div>
        <ul>
            {productos.map((valorItem) => (
                <Item prodItemId={valorItem.id} nombre={valorItem.nombre} descripcion={valorItem.descripcion} 
                precio={valorItem.precio} imagen={valorItem.imagen}></Item>
            ))}
        </ul>
      </div>
    );
}