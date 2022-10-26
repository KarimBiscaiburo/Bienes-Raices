//Librerias
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Componentes
import Header from "./Header";
import Iconos from "./Iconos";
import Anuncio from "./Anuncio";

// Imagenes
import anuncio1 from "../img/anuncio1.jpg";
import anuncio2 from "../img/anuncio2.jpg";
import anuncio3 from "../img/anuncio3.jpg";
import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";


function Inicio() {

    return (
        <Fragment>
            <Header clase="header inicio" titulo="Venta de Casas y Departamentos Exclusivos de Lujo" />

            <main>
                <Iconos />
            </main>

            <section className="seccion contenedor">
                <h2>Casas y Departamentos en Venta</h2>

                <div className="contenedor-anuncios">
                    <Anuncio 
                        imgAnuncio={anuncio1}
                        titulo="Casa de Lujo en el Lago"
                        descripcion="Casa en el lago con exelentes vistas y a un increible precio"
                        precio="$3.000.000"
                        baños="4"
                        estacionamientos="2"
                        dormitorios="3"
                    /> 

                    <Anuncio 
                        imgAnuncio={anuncio2}
                        titulo="Casa terminados de Lujo"
                        descripcion="Casa moderna y acabados de lujo a un increible precio"
                        precio="$2.000.000"
                        baños="3"
                        estacionamientos="1"
                        dormitorios="2"
                    /> 

                    <Anuncio 
                        imgAnuncio={anuncio3}
                        titulo="Casa con Piscina"
                        descripcion="Casa rustica con piscina a un increible precio"
                        precio="$4.000.000"
                        baños="5"
                        estacionamientos="3"
                        dormitorios="4"
                    /> 
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

            <div className="contenedor seccion seccion-inferior">
                <section className="blog">
                    <h3>Nuestro Blog</h3>

                    <article className="entrada-blog">
                        <img loading="lazy" src={blog1} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada" className="entrada">
                                <h4>Terraza en el techo de tu casa</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Consejos para contruir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
                            </Link>
                        </div>
                    </article>

                    <article className="entrada-blog">
                        <img loading="lazy" src={blog2} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada">
                                <h4>Guia para la decoracion de tu hogar</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
                            </Link>
                        </div>
                    </article>
                </section>

                <section className="testimoniales">
                    <h3>Testimoniales</h3>

                    <div className="testimonial">
                        <blockquote>
                            El personal se comporto de una excelente forma, muy buena atencion y la casa que me ofrecieron cumple todas mis expectativas.
                        </blockquote>
                        <p>- Karim Biscaiburo</p>
                    </div>
                </section>
            </div>

        </Fragment>
    )
}

export default Inicio;

