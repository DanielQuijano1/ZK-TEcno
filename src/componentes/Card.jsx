import Button from "./Button/Button";
import "./Card.css";



function Card(props) {

    return (
        <div>
            <h3 className="estiloCard__title">{props.title}</h3>
            <div className="estiloCard">
                <div className="estiloCard__img">
                    <img className="estiloImagen" height="200px" src={props.img} alt={props.title} />
                </div>
                <h3 className="estiloCard__precio">${props.precio}</h3>
                <div className="estiloCard__desc">
                    <small>{props.detalle}</small>
                    <Button text="Comprar" />
                </div>
            </div>
        </div>
    )
}

export default Card;
