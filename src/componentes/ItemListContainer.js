import { useEffect, useState } from "react";
import PC from "../pages/PC/PC";
import Accesorios from "../pages/Accesorios/Accesorios.jsx";
import Consola from "../pages/Consolas/Consola.jsx";
const Productos = [
  <>
  <PC />
  <Accesorios />
  <Consola />
  </>
  
]
const ItemListContainer = ()=> {
  const [products, setProducts] = useState([]);
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ([
        Productos
      ]);
    }, 1000);
  });

  useEffect(() => {
    getProducts
    .then((response) => {
      setProducts(response);
    })
    .catch ((error) => console.log(error));
  }, []);
  return (
   <div>
    <ul>
      {products.map((Productos) => (
          <li>{Productos}</li>
      ) )}
      
    </ul>
   </div>
  )
}

export default ItemListContainer

/*import PC from "../pages/PC/PC";
import Consola from "../pages/Consolas/Consola";
import Accesorios from "../pages/Accesorios/Accesorios";
<div>
<PC />
<Consola />
<Accesorios />
</div>*/