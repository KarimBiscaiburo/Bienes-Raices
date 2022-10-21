import React from "react";
import Navegacion from "./Navegacion";

function Header() {

    return(
        <header className="header">
            <div className="contenedor contenido-header">
                <div className="barra">
                    <a href="/" className="logo">BIENES<span>RAICES</span></a>

                    <Navegacion />

                </div>

                <h2>Venta de Casas y Departamentos Exclusivos de Lujo</h2>
            </div>
        </header>
    )
}

export default Header;