import { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import "./CartContainer.css";
import "./CartItem.css"
import { Link } from "react-router-dom";
import { createOrder } from "../../services/firebase";

function CartContainer() {
    const { cart, removeItem, clear, getTotalItemsInCart } = useContext(cartContext);
    const [ orderId , setOrderId] = useState();

    function handleCheckout(evt) {
        const items = cart.map(({ id, precio, title, count }) => ({ id, precio, title, count }))
        
        const order = {
            buyer: {
                name: "Raul",
                email: "a@a.com",
                phone: 12345,
            },
            items: items,
            total: getTotalItemsInCart(),
            date: new Date(),
        };

        console.table(order)
        
        async function sendOrder() {
            let idOrder = await createOrder(order); 
            setOrderId(idOrder); 
        };

        sendOrder()
    }


    if(orderId){
        return(
            <div>
                <h1>Gracias Por Tu Compra!</h1>
                <p>El id de tu compra es: {orderId}</p>
            </div>
        ) 
    }

    return (

        <div>
            {
                cart.length === 0 ?
                    <div className="sinProductos"> No hay Items en el carrito,<b /> volver al inicio
                        <Link to="/" className="espaciadoSinProductos">
                            <Button text="Volver al inicio" className="styleButton"></Button>
                        </Link>
                    </div> 
                    :
                    <div className="flex">

                        <div className="targetaCart minimizado">
                            <div className="textoCartItem">
                                Producto
                            </div>
                            <div className="espaciadoCart">
                                <p className="textoCartItem">Precio</p>
                                <p className="textoCartItem">Cantidad</p>
                                <p className="textoCartItem">Eliminar</p>
                            </div>
                        </div>

                        <div className="cartItems">
                            {cart.map((itemInCart) => (
                                <CartItem itemInCart={itemInCart} removeItem={removeItem}></CartItem>
                            ))}
                        </div>
                        <p className="targetaCart totalDeCompra">El total de tu compra es de ${getTotalItemsInCart()}</p>
                        <div className="buttonItems">
                            <Button onClick={clear} className="styleButton" text="Limpiar Carrito" ></Button>
                            <Link to="/">
                                <Button className="styleButton" text="Seguir Comprando"></Button>
                            </Link>
                            <Button onClick={handleCheckout} className="styleButton" text="Finalizar Compra" ></Button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CartContainer