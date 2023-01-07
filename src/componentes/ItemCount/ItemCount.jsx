import { useState } from "react";
import "./ItemCount.css"

function ItemCount(props) {
    const [count, setCount] = useState(1);

    function handleCountAdd() {
        setCount(count + 1);
    }

    function handleCountRemove() {
        setCount(count - 1);
    }
    return (
        <div className="itemCount__Container">
            <div className="itemCount__Text">Cantidad</div>
            <div className="itemCount__CountBox">
                <button className="itemCount__Button borderLeft" disabled={count === 1} onClick={handleCountRemove}>-</button>
                <div className="itemCount__CountDisplay"> {count} </div>
                <button className="itemCount__Button borderRight" disabled={count === props.stock} onClick={handleCountAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;