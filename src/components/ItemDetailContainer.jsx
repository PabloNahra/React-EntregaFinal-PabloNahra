import React, {useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import {useParams } from "react-router-dom";
import { useEffect as useEffect2, useState as useState2 } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"

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

      return(
        <main>
            <h1>{props.greeting}</h1>
            <ItemDetail productos={prodId}></ItemDetail>
        </main>
    )
}