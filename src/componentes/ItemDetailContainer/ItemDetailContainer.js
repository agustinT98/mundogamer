import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {collection, getDocs, getFirestore} from "firebase/firestore";
 
const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    
    const getProductos = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'productos');

        
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((documento) => {
                     
                    return {id: documento.id, ...documento.data()};
                });
                console.log(data);
                setProductos(data);
            }).catch(error => console.log(error))
        
       
    };
    useEffect(() => {
        getProductos()
    }, [ ])

    console.log(productos)

    return (
        <div className="single-prod">
            <ItemDetail listaProds={productos} />
            
        </div>
    )
}

export default ItemDetailContainer