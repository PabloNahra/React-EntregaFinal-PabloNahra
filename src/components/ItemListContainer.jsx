import "./ItemListContainer.css";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export default function ItemListContainer(props){
  const [categ, setCateg] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();
  
  useEffect(() => {
    const db2 = getFirestore();
    const productsRef = collection(db2, "productos");

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
      const db = getFirestore();
      const q = query(collection(db, "productos"), where("categoria", "==", categoryId));

      getDocs(q).then((snapshot) => {
        if(snapshot.size !== 0){
          const sortedCateg = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          sortedCateg.sort((a, b) => a.nombre.localeCompare(b.nombre)); 
          setCateg(sortedCateg);
        }else{
            <h1>No matcheo</h1>
        }})

    }
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