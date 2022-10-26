import React, { Fragment } from "react";

//Componentes
import Header from "./Header";
import Anuncio from "./Anuncio";

//imagenes
import anuncio1 from "../img/anuncio1.jpg";
import anuncio2 from "../img/anuncio2.jpg";
import anuncio3 from "../img/anuncio3.jpg";
import anuncio4 from "../img/anuncio4.jpg";
import anuncio5 from "../img/anuncio5.jpg";
import anuncio6 from "../img/anuncio6.jpg";

function Anuncios () {

    return(
        <Fragment>
            <Header clase="header" />
            
            <main className="seccion contenedor">
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

                    <Anuncio 
                        imgAnuncio={anuncio4}
                        titulo="Casa con Piscina"
                        descripcion="Casa rustica con piscina a un increible precio"
                        precio="$4.000.000"
                        baños="5"
                        estacionamientos="3"
                        dormitorios="4"
                    /> 

                    <Anuncio 
                        imgAnuncio={anuncio5}
                        titulo="Casa con Piscina"
                        descripcion="Casa rustica con piscina a un increible precio"
                        precio="$4.000.000"
                        baños="5"
                        estacionamientos="3"
                        dormitorios="4"
                    /> 

                    <Anuncio 
                        imgAnuncio={anuncio6}
                        titulo="Casa con Piscina"
                        descripcion="Casa rustica con piscina a un increible precio"
                        precio="$4.000.000"
                        baños="5"
                        estacionamientos="3"
                        dormitorios="4"
                    /> 
                </div>
            </main>
        </Fragment>
    ) 
}

export default Anuncios;