import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import obterProductos from "../../services/MockService";
import Card from "../Card";
import Flex from "../Flex/Flex";
import { obtenerProductoPorCategoria } from "../../services/MockService";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    let categoryid = useParams().categoryid;



    useEffect( () => {
            if(!categoryid){ 
            obterProductos()
                .then((respuesta) => {
                    setProductos(respuesta)
                })
                .catch((error) => alert(error));
            }
            else{
                obtenerProductoPorCategoria(categoryid).then((respuesta) =>{
                    setProductos(respuesta)
                })
            }
        }, [categoryid]);

    return (
        <Flex>
            {productos.map((item) => <Card key={item.id} item={item} />)}
        </Flex>
    )
}

export default ItemListContainer;

