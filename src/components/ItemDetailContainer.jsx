import React, {useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import ItemList from './ItemList'
import {useParams } from "react-router-dom";
import { useEffect as useEffect2, useState as useState2 } from "react";
import catalogoProductos from "../productos.json"
import {doc, getDoc, getFirestore} from "firebase/firestore"

// function asynkMockItem(itemId){ 

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!itemId){
//         resolve(catalogoProductos)
//       }
//       else{
//         const catalogoFiltrado = catalogoProductos.filter((valor) =>{
//           return valor.id === String(itemId)
//         })
//         resolve (catalogoFiltrado)
//       }
//     }, 500)
//   })
// }



export default function ItemDetailContainer(props){
  const [prodId, setItemId] = useState2("92FXFwXaAjX6E9Abhy9v");
  const [loading2, setLoading2] = useState2(false);
  const {itemId} = useParams();

  useEffect2(() => {
    const db = getFirestore()
    const productoRef = doc(db, "productos", itemId)

    getDoc(productoRef).then((snapshot) => {
        if(snapshot.exists()){
            setItemId({id: snapshot.id, ...snapshot.data()});
        }
    })
  }, [itemId]); 

  if (loading2) return <p>Item No encontrado</p>

  if (loading2) {
    return <h1>Item no encontrado</h1>
  }

  console.log(prodId)
      return(
        <main>
            <h1>{props.greeting}</h1>
            <ItemDetail productos={prodId}></ItemDetail>
            {/* <ItemList productos={prodId}></ItemList> */}
        </main>
    )
}