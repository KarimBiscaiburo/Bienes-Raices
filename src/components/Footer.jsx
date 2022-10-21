import React from "react";
import Navegacion from "./Navegacion";

function Footer() {

    return (
        <footer className="footer seccion">
            <div className="contenedor contenedor-footer">
                <Navegacion />
            </div>

            <p className="copyright">Todos los derechos reservados 2022 &copy;</p>
        </footer>
    )
}

export default Footer;