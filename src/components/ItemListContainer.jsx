import "./ItemListContainer.css";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export default function ItemListContainer(){
  const [categ, setCateg] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsRef = collection(db, "productos");

    if(!categoryId){
      getDocs(productsRef).then((snapshot) => {
        if(snapshot.size !== 0){
            const sortedCateg = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            sortedCateg.sort((a, b) => a.nombre.localeCompare(b.nombre));
            setCateg(sortedCateg);
        }
    })
    }
    else{
      const q = query(collection(db, "productos"), where("categoria", "==", categoryId));

      getDocs(q).then((snapshot) => {
        if(snapshot.size !== 0){
          const sortedCateg = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          sortedCateg.sort((a, b) => a.nombre.localeCompare(b.nombre)); 
          setCateg(sortedCateg);
        }})

    }
  }, [categoryId]); 

  return(
        <main>
            <h1>BIENVENID@S A NUESTRA TIENDA</h1>
            <ItemList productos={categ}></ItemList>
        </main>
    )
}