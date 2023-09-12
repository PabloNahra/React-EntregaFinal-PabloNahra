import React, {useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import ItemList from './ItemList'
import {useParams } from "react-router-dom";
import { useEffect as useEffect2, useState as useState2 } from "react";
import catalogoProductos from "../productos.json"

function asynkMockItem(itemId){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!itemId){
        resolve(catalogoProductos)
      }
      else{
        const catalogoFiltrado = catalogoProductos.filter((valor) =>{
          return valor.id == itemId
        })
        resolve (catalogoFiltrado)
      }
    }, 2000)
  })
}



export default function ItemDetailContainer(props){
  const [prodId, setItemId] = useState2(catalogoProductos);
  const [loading2, setLoading2] = useState2(false);
  const {itemId} = useParams();

  useEffect2(() => {
    asynkMockItem(itemId).then(res => setItemId(res)
    )
  }, [itemId]); 

  if (loading2) return <p>Item No encontrado</p>

  if (loading2) {
    return <h1>Item no encontrado</h1>
  }
  

      return(
        <main>
            <h1>{props.greeting}</h1>
            <ItemDetail productos={prodId}></ItemDetail>
            {/* <ItemList productos={prodId}></ItemList> */}
        </main>
    )
}