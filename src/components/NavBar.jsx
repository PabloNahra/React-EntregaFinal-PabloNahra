import CartWidget from "./CartWidget";
import logoArtMatuiz from "../assets/logo-transparente2.png";
import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark" id="navbar">
                <div className="container-fluid header-centrado">
                    <section className="logo-principal">
                    <a className="navbar-brand" href="#">
                        <Link to="/"><img src={logoArtMatuiz} alt="Logo"/></Link>
                    </a>
                    </section>
                    <section>
                        <h1>ART MATUIZ</h1>
                    </section>
                    <div className="navbar-collapse lista-pages" id="navbarSupportedContent">
                    <ul className="navDerecha navbar-nav text-center">
                        <li className="escalar"><Link to="/category/bebe">Para tu bebé</Link></li> 
                        <li className="escalar"><Link to="/category/casa">Para tu casa</Link></li>
                        <li className="escalar"><Link to="/queesartesania">Que es una artesania</Link></li>
                        <li className="escalar"><Link to="/contacto">Contacto</Link></li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}