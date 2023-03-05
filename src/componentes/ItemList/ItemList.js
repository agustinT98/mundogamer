import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import ItemCategory from "../ItemCategory/ItemCategory";
import Item from "../../componentes/Item/Item";
import { collection, getDocs, getFirestore } from "firebase/firestore";
 
const ItemList = () => {

    const [productos, setProductos] = useState([]);
    const getProductos = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "productos");
        setTimeout(() => {
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((documento) => {
                    return {id: documento.id, ...documento.data()};
                });
                console.log(data);
                setProductos(data);
            }).catch(error => console.log(error))
        }, )
        
    };

 
    useEffect(() => {
        getProductos();
       
    }, [] )

    const { categoria } = useParams();
    
    return (
        <>    
        {categoria ? (<ItemCategory listaProductos={productos} />) : (<Item listaProductos={productos} />)}
        
        </>
    )

   
}

export default ItemList