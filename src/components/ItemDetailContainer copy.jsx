import React, {useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import {useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"

export default function ItemDetailContainer(){
  const [productId, setProductId] = useState("");
  const {itemId} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const productoRef = doc(db, "productos", itemId)

    getDoc(productoRef).then((snapshot) => {
        if(snapshot.exists()){
            setProductId({id: snapshot.id, ...snapshot.data()});
        }
    })
  }, [itemId]); 

      return(
        <main>
            <ItemDetail productos={productId}></ItemDetail>
        </main>
    )
}