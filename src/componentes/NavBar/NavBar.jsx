import NavItem from "./NavItem";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar(props) {

    const links = [
        {title:"TIENDA", url:"/"}, 
        {title:"RECOMENDACIONES", url:"/"}, 
        {title:"SERVICIO TECNICO",url:"/"}, 
        {title:"SOBRE NOSOTROS",url:"/"},
        {title:"CONTACTANOS",url:"/"},
    ]

    return (
        <div className="miEstilo css-selector">
            <div className="estiloLogo">
                <Logo></Logo>
            </div>
            <nav>
                <ul className="estiloUl">
                {links.map((elemento) => ( <NavItem key={elemento.title} href={elemento.href} title={elemento.title}/>  ))}
                </ul>
            </nav>
            <span>
                <CartWidget />
            </span>
        </div>
    )
}

export default NavBar;


/*
{title:"CABLES", url:"/"}, 
        {title:"CARGADORES", url:"/"}, 
        {title:"ADAPTADORES",url:"/"}, 
        {title:"PARLANTES",url:"/"}, 
        {title:"FUNDAS",url:"/"}, 
        {title:"ACCESORIOS PC", url:"/"}
*/