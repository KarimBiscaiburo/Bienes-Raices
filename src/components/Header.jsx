import React from "react";
import Navegacion from "./Navegacion";
import { Link } from "react-router-dom";

function Header( {clase, titulo} ) {

    return(
        <header className={clase}>
            <div className="contenedor contenido-header">
                <div className="barra">
                    <Link to="/" className="logo">BIENES<span>RAICES</span></Link>
                    <Navegacion />
                </div>

                {titulo ? <h1>{titulo}</h1> : null}
            </div>
        </header>
    )
}

export default Header;