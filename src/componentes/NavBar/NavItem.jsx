import "./NavItem.css"

/* CREO QUE CUMPLIRIA LA MISMA FUNCION QUE EL QUE PIDIERON, EL "ITEMLISTCONTAINER"*/


const NavItem = ({ title, href }) => {

    return (
        <li >
            <a className="navItemStyle" href={href}>{title}</a>
        </li>
    )
}
export default NavItem;