import NavItem from "./NavItem";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import "./NavBar.css";


/* ESTUVE INTENTANDO IMPORTAR EL CSS A JSX PERO NO HABIA FORMA QUE ME DEJARA */

function NavBar(props) {
    return (
        <div className="miEstilo css-selector">
            <div className="estiloLogo">
                <Logo></Logo>
            </div>
            <nav>
                <ul className="estiloUl">
                    <NavItem href="/" title="CABLES" />
                    <NavItem href="/" title="CARGADORES" />
                    <NavItem href="/" title="ADAPTADORES" />
                    <NavItem href="/" title="PARLANTES" />
                    <NavItem href="/" title="FUNDAS" />
                    <NavItem href="/" title="ACCESORIOS PC" />
                </ul>
            </nav>
            <span>
                <CartWidget />
            </span>
        </div>
    )
}

export default NavBar;
