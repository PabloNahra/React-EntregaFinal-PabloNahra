import ItemDet from "./ItemDet";

export default function ItemDetail({productos}) {
    return (
      <div>
        <ul>
          {
                <ItemDet 
                id={productos.id} 
                title={productos.nombre} 
                description={productos.descripcion} 
                image={productos.imagen} 
                price={productos.precio}>
                </ItemDet>
          }
        </ul>
      </div>
    );
}