import React, {useState,useEffect} from "react";
import { obtenerProducto } from "../../services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);

    let params = useParams();

    useEffect(() => {
        obtenerProducto(params.itemid)
            .then((respuesta) => {
                setProducto(respuesta)
            })
            .catch((error) => alert(error));
    }, []);

    return (
        <ItemDetail title={producto.title} img={producto.img} detalle={producto.detalle} precio={producto.precio} stock={producto.stock} />
    )

}

export default ItemDetailContainer;