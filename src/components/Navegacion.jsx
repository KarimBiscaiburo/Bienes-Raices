import React from "react";
import { NavLink } from "react-router-dom";

function Navegacion() {

    return (
        <nav className="navegacion">
            {/* Los link son por que los link directos de html (a) recargan la pagina automaticamente
                genereando un delay que no queremos, esto lo evita */}
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/anuncios">Anuncios</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </nav>
    )
}

export default Navegacion;