import "./ItemListContainer.css";
import ItemList from './ItemList';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import catalogoProductos from "../productos.json"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

// function asynkMock(categoryId){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!categoryId){
//         resolve(catalogoProductos)
//       }
//       else{
//         const catalogoFiltrado = catalogoProductos.filter((valor) =>{
//           return valor.categoria == categoryId
//         })
//         resolve (catalogoFiltrado)
//       }
//     }, 2000)
//   })
// }

export default function ItemListContainer(props){
  const [categ, setCateg] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();
  
  // useEffect(() => {
  //   asynkMock(categoryId).then(res => setCateg(res)
  //   )
  // }, [categoryId]); 

  useEffect(() => {

    const db2 = getFirestore();
    const productsRef = collection(db2, "productos");

    if(!categoryId){
      console.log("Sin categoryId")
      getDocs(productsRef).then((snapshot) => {
        if(snapshot.size !== 0){
            setCateg(snapshot.docs.map(doc => {return{id: doc.id, ...doc.data()}}))
        }
    })
    }
    else{
      console.log("Con categoryId")
      const db = getFirestore();
      const q = query(collection(db, "productos"), where("categoria", "==", categoryId));

      getDocs(q).then((snapshot) => {
        if(snapshot.size !== 0){
          setCateg(snapshot.docs.map(doc => {return{id: doc.id, ...doc.data()}}))
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