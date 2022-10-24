import React from "react";
import { Link } from "react-router-dom";

function Navegacion() {

    return (
        <nav className="navegacion">
            {/* Los link son por que los link directos de html (a) recargan la pagina automaticamente
                genereando un delay que no queremos, esto lo evita */}
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/anuncios">Anuncios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}

export default Navegacion;