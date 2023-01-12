import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetail.css"

function ItemDetail({ title, img, detalle, precio, stock }) {
    return (
        <div className="estiloCard__detail">
            <div className="estiloCard__detailContent">
                <div className="estiloCard__imgDetail">
                    <img className="estiloImagen__detail" height="200px" src={img} alt={title} />
                </div>
                <div className="estiloCard__PrecioYDescripcion margenLeft">
                    <div className="estiloCard__desc">
                        <small>{detalle}</small>
                    </div>
                    <h3 className="estiloCard__precio">${precio}</h3>
                </div>
                <div className="estiloCard__Contador__detail">
                    <ItemCount className="boton__detail" stock={stock} />
                    <Button className="boton__detail" text="Agregar al carrito" />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;