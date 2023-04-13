import { NavLink } from "react-router-dom"
import Ikon from "../../assets/img/shopping-cart.png"
import Ikon2 from "../../assets/img/user.png"
import logo from "../../assets/img/logo.png"
import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={style.footer_wrapper}>
                <NavLink className="logo_footer" to={"/"}>
                    Logo
                </NavLink>
                <nav>
                    <NavLink className={style.navlink} to={"#"}>каталог</NavLink>
                </nav>
            </div>
        </footer>
    )
}

export default Footer