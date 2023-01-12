import { Link } from "react-router-dom";
import "./Categories.css";

function Categories(props) {
    return (
        <div className="estiloCategorias">
            <nav className="estiloCategorias_nav">
                <div className="estiloCategorias_link espaciadoDerecho">Categorias:</div>
                <ul className="estiloCategorias_ul">
                    <Link to="/category/Cables" className="estiloCategorias_link">Cables</Link>
                    <Link to="/category/Cargadores" className="estiloCategorias_link">Cargadores</Link>
                    <Link to="/category/Auriculares" className="estiloCategorias_link">Auriculares</Link>
                    <Link to="/category/Adaptadores" className="estiloCategorias_link">Adaptadores</Link>
                    <Link to="/category/Accesorios PC" className="estiloCategorias_link">Accesorios PC</Link>
                    <Link to="/category/Accesorios Celulares" className="estiloCategorias_link">Accesorios Celulares</Link>
                    <Link to="/category/OTROS" className="estiloCategorias_link">Otros</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Categories;


/*
cables
cargadores
auriculares
adaptadores
accesorios pc
accesorios celulares
otros
*/