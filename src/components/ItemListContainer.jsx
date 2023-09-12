import "./ItemListContainer.css";
import ItemList from './ItemList';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import catalogoProductos from "../productos.json"


function asynkMock(categoryId){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!categoryId){
        resolve(catalogoProductos)
      }
      else{
        const catalogoFiltrado = catalogoProductos.filter((valor) =>{
          return valor.categoria == categoryId
        })
        resolve (catalogoFiltrado)
      }
    }, 2000)
  })
}


export default function ItemListContainer(props){
  const [categ, setCateg] = useState(catalogoProductos);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();
  
  useEffect(() => {
    asynkMock(categoryId).then(res => setCateg(res)
    )
  }, [categoryId]); 

  if (loading) return <p>Categ No encontrada</p>

  if (loading) {
    return <h1>Categoria no encontrada</h1>
  }
  
  
  return(
        <main>
            <h1>{props.greeting}</h1>
            <ItemList productos={categ}></ItemList>
        </main>
    )
}