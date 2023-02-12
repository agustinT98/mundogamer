import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

 
class Productos {
    constructor(id, name, descripcion, imagen, categoria, precio, stock) {
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

const PC1 = new Productos(1, "PC GAMER BASICA", "PC GAMER BASICA CON RYZEN 3 3200G 8GB DE RAM Y 240GB SSD", "https://gorilagames.com/img/Public/1019-producto-ryzen-3-3200g-2115.jpg", "pc", 50000, 4);
const PC2 = new Productos(2, "PC GAMER MEDIA", "PC GAMER MEDIA CON RYZEN 3 3200G 16GB DE RAM Y 480GB SSD", "https://mla-s1-p.mlstatic.com/777167-MLA46258832185_062021-F.jpg", "pc", 55500, 5);
const PC3 = new Productos(3, "PC GAMER ALTA", "PC GAMER ALTA CON RYZEN 7 16GB DE RAM, RTX 3070 Y 480GB SSD 1TB HDD", "https://http2.mlstatic.com/D_NQ_NP_799971-MLA31147897175_062019-O.jpg", "pc", 700000, 3);
const Accesorio1 = new Productos(4, "Lampara led gamer", "Lampara LED impresa en 3D", "https://http2.mlstatic.com/D_NQ_NP_732141-MLA49635490017_042022-W.jpg","accesorios", 3000, 20);
const Accesorio2 = new Productos(5, "Portaauriculares gamer", "Portaauriculares Gamer PACMAN impreso en 3D", "https://http2.mlstatic.com/D_Q_NP_657846-MLA48984608929_012022-W.jpg","accesorios", 4000, 10);
const Consola1 = new Productos (6, "Play Station 5","PlayStation 5 DIGITAL", "https://hiperaudio.com.ar/wp-content/uploads/2022/08/play-5.png", "consolas" , 100000, 5);
const Consola2 = new Productos (7, "Xbox series X","Consola de Microsoft XBOX series X", "https://assets.xboxservices.com/assets/d2/d4/d2d49e15-65ea-4e87-9d35-66123e183423.jpg?n=Cyberpunk-2077_Feature-0_XSX_767x628.jpg", "consolas" , 100000, 5);
const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                PC1, PC2, PC3, Accesorio1, Accesorio2, Consola1, Consola2,
            ]);
        }, )
    });

    useEffect(() => {
        getProductos.then((response) => {
            setProductos(response)
            console.log(response)
        }).catch(error => console.log(error))
    }, [])

    console.log(productos)

    return (
        <div className="single-prod">
            <ItemDetail listaProds={productos} />
            
        </div>
    )
}

export default ItemDetailContainer