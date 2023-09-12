import CartWidget from "./CartWidget";
import logoArtMatuiz from "../assets/logo-transparente2.png";
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar(props){

    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark" id="navbar">
                <div className="container-fluid header-centrado">
                    <section class="logo-principal">
                    <a class="navbar-brand" href="#">
                        {/* <a href="./index.html"><img src={logoArtMatuiz} alt="Logo"/></a> */}
                        <Link to="/"><img src={logoArtMatuiz} alt="Logo"/></Link>
                    </a>
                    </section>
                    <section>
                        <h1>{props.title}</h1>
                    </section>
                    <div className="navbar-collapse lista-pages" id="navbarSupportedContent">
                    <ul className="navDerecha navbar-nav text-center">
                        <li className="escalar"><Link to="/category/bebe">{props.link1}</Link></li> 
                        <li className="escalar"><Link to="/category/casa">{props.link2}</Link></li>
                        <li className="escalar"><Link to="/queesartesania">{props.link3}</Link></li>
                        <li className="escalar"><Link to="/contacto">{props.link4}</Link></li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}




