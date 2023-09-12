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
                        <Link to ="/" class="navbar-brand">
                            <img src={logoArtMatuiz} alt="Logo"/>
                        </Link>
                    </section>
                    <section>
                        <h1>{props.title}</h1>
                    </section>
                    <div className="navbar-collapse lista-pages" id="navbarSupportedContent">
                    <ul className="navDerecha navbar-nav text-center">
                        <NavLink texto="home"/>
                        <NavLink texto="2"/>
                        <NavLink texto="3"/>
                        <NavLink texto="4"/>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}


