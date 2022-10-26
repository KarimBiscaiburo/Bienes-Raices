//Librerias
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Componentes
import Header from "./Header";

// Imagenes
import anuncio1 from "../img/anuncio1.jpg"
import anuncio2 from "../img/anuncio2.jpg"
import anuncio3 from "../img/anuncio3.jpg"
import icono_wc from "../img/icono_wc.svg";
import icono_estacionamiento from "../img/icono_estacionamiento.svg";
import icono_dormitorio from "../img/icono_dormitorio.svg";

function Inicio() {

    return (
        <Fragment>
            <Header clase="header inicio" titulo="Venta de Casas y Departamentos Exclusivos de Lujo" />

            <main>
                <h2>Más sobre nosotros</h2>

                <div className="iconos-nosotros">
                    <div className="icono">

                        {/* HAY QUE CAMBIAR LOS SVG POR LOS QUE CORRESPONDEN EN LA CARPETA IMG (IMPORTARLOS) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <h3>Seguridad</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint tempora totam eligendi consequatur laboriosam dolorem praesentium voluptatem sunt fugit fugiat, ullam quae vero amet, incidunt quasi, repellendus quod inventore.</p>
                    </div>
                    <div className="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>


                        <h3>Precio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint tempora totam eligendi consequatur laboriosam dolorem praesentium voluptatem sunt fugit fugiat, ullam quae vero amet, incidunt quasi, repellendus quod inventore.</p>
                    </div>
                    <div className="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h3>A Tiempo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint tempora totam eligendi consequatur laboriosam dolorem praesentium voluptatem sunt fugit fugiat, ullam quae vero amet, incidunt quasi, repellendus quod inventore.</p>
                    </div>
                </div>
            </main>

            <section className="seccion contenedor">
                <h2>Casas y Departamentos en Venta</h2>

                <div className="contenedor-anuncios">
                    <div className="anuncio">
                        <img loading="lazy" src={anuncio1} alt="anuncio" />

                        <div className="contenedor-anuncio">
                            <h3>Casa de Lujo en el Lago</h3>
                            <p>Casa en el lago con exelentes vistas y a un increible precio</p>
                            <p className="precio">$3.000.000</p>

                            <ul className="iconos-caracteristicas">
                                <li>
                                    <img loading="lazy" src={icono_wc} alt="icono wc" />
                                    <p>3</p>
                                </li>
                                <li>
                                    <img loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento" />
                                    <p>3</p>
                                </li>
                                <li>
                                    <img loading="lazy" src={icono_dormitorio} alt="icono dormitorio" />
                                    <p>3</p>
                                </li>
                            </ul>

                            <Link to="/anuncios" className="boton-amarillo-block">
                                Ver Propiedad
                            </Link>
                        </div>
                    </div> 

                    <div className="anuncio">
                        <img loading="lazy" src={anuncio2} alt="anuncio" />

                        <div className="contenedor-anuncio">
                            <h3>Casa terminados de Lujo</h3>
                            <p>Casa en el lago con exelentes vistas y a un increible precio</p>
                            <p className="precio">$3.000.000</p>

                            <ul className="iconos-caracteristicas">
                                <li>
                                    <img loading="lazy" src={icono_wc} alt="icono wc" />
                                    <p>3</p>
                                </li>
                                <li>
                                    <img loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento" />
                                    <p>3</p>
                                </li>
                                <li>
                                    <img loading="lazy" src={icono_dormitorio} alt="icono dormitorio" />
                                    <p>3</p>
                                </li>
                            </ul>

                            <Link to="/anuncios" className="boton-amarillo-block">
                                Ver Propiedad
                            </Link>
                        </div>
                    </div>

                    <div className="anuncio">
                        <img loading="lazy" src={anuncio3} alt="anuncio" />

                        <div className="contenedor-anuncio">
                            <h3>Casa con Pileta</h3>
                            <p>Casa en el lago con exelentes vistas y a un increible precio</p>
                            <p className="precio">$3.000.000</p>

                            <ul className="iconos-caracteristicas">
                                <li>
                                    <img loading="lazy" src={icono_wc} alt="icono wc" />
                                    <p>3</p>
                                </li>
                                <li>
                                    <img loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento" />
                                    <p>3</p>
                                </li>
                                <li>
                                    <img loading="lazy" src={icono_dormitorio} alt="icono dormitorio" />
                                    <p>3</p>
                                </li>
                            </ul>

                            <Link to="/anuncios" className="boton-amarillo-block">
                                Ver Propiedad
                            </Link>
                        </div>
                    </div> 
                </div>

                <div className="alinear-derecha">
                        <Link to="/anuncios" className="boton boton-verde">Ver Todas</Link>
                </div>
            </section>

            <section className="imagen-contacto">
                <h2>Encuentra la casa de tus sueños</h2>
                <p>Llena el formulario de contacto y un asesor se pondra en contacto contigo a la brevedad</p>
                <Link to="/contacto" className="boton-amarillo">Contactanos</Link>

            </section>

        </Fragment>
    )
}

export default Inicio;

