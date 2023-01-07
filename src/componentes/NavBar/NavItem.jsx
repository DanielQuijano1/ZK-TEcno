import "./NavItem.css"

/* CREO QUE CUMPLIRIA LA MISMA FUNCION QUE EL QUE PIDIERON, EL "ITEMLISTCONTAINER"*/


const NavItem = ({ title, href }) => {

    return (
        <li className="fullWidth">
            <div className="navItemStyle">{title}</div>
        </li>
    )
}
export default NavItem;