import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function DetalleAnuncio () {
    const { anuncio } = useParams()

    return (
        <Fragment>
            <Header clase="header"/>

            <h1>{anuncio}</h1>
        </Fragment>
    )
}

export default DetalleAnuncio;