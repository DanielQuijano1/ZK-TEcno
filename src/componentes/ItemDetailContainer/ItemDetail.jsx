import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./../Button/Button.css"
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";

function ItemDetail({ title, img, detalle, precio, validarStock, onAddToCart, isInCart }) {

    const {cart} = useContext(cartContext)


    return (
        <div className="estiloCard__flex">
            <div className="estiloCard__detail">
                <div className="estiloCard__detailContent">
                    <div className="estiloCard__imgDetail">
                        <img className="estiloImagen__detail" height="200px" src={img} alt={title} />
                    </div>
                    <div className="estiloCard__PrecioYDescripcion margenLeft paddingBottom">
                        <div className="estiloCard__desc">
                            <small>{detalle}</small>
                        </div>
                        <h3 className="estiloCard__precio">${precio}</h3>
                    </div>
                    <div>
                        { !cart.includes({title}) === isInCart ?
                            <div className="estiloCard__Contador__detail">
                                <Link to="/cart" >
                                    <Button className="styleButton" text="Ir Al Carrito"></Button>
                                </Link>
                                <Link to="/">
                                    <Button className="styleButton" text="Seguir Comprando"></Button>
                                </Link>
                            </div>
                            :
                            <ItemCount className="boton__detail" stock={validarStock} onAddToCart={onAddToCart} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;