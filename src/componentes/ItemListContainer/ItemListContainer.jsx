import { useState, useEffect } from "react";
import obterProductos from "../../services/MockService";
import Card from "../Card";
import Flex from "../Flex/Flex";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(
        ()=>{
            obterProductos()
            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => alert(error));
        
        },[]
    )

    return (
        <Flex>
            {productos.map((item) =>
                <Card key={item.id} item={item} />)}
        </Flex>
    )
}

export default ItemListContainer;

