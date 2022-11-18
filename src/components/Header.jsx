import React from "react";
import Navegacion from "./Navegacion";
import { Link } from "react-router-dom";

// Imagenes
import barras from "../img/barras.svg";

function Header( {clase, titulo} ) {

    function abrirMenu() {
        const navegacion = document.querySelector(".navegacion");
        navegacion.classList.toggle("mostrar");
    }

    return(
        <header className={clase}>
            <div className="contenedor contenido-header">
                <div className="barra">
                    <Link to="/" className="logo">BIENES<span>RAICES</span></Link>

                    <div onClick={abrirMenu} className="mobile-menu">
                        <img src={barras} alt="icono menu responsivo" />
                    </div>

                    <Navegacion />
                </div>

                {titulo ? <h1>{titulo}</h1> : null}
            </div>
        </header>
    )
}

export default Header;