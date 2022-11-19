import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Imagenes
import icono_wc from "../img/icono_wc.svg";
import icono_estacionamiento from "../img/icono_estacionamiento.svg";
import icono_dormitorio from "../img/icono_dormitorio.svg";

function Anuncio ( { numero, imgAnuncio, titulo, descripcion, precio, baños, estacionamientos, dormitorios } ) {

    return (
        <Fragment>
            <div className="anuncio">
                <img loading="lazy" src={imgAnuncio} alt="anuncio" />

                <div className="contenedor-anuncio">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <p className="precio">{precio}</p>

                    <ul className="iconos-caracteristicas">
                        <li>
                            <img className="icono" loading="lazy" src={icono_wc} alt="icono wc" />
                            <p>{baños}</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento" />
                            <p>{estacionamientos}</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src={icono_dormitorio} alt="icono dormitorio" />
                            <p>{dormitorios}</p>
                        </li>
                    </ul>
                    
                    <Link to={`/detalle-anuncio/${numero}`} className="boton-amarillo-block">
                        Ver Propiedad {numero}
                    </Link>
              
                </div>
            </div> 
        </Fragment>
    )
}

export default Anuncio;