import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Anuncios from "./components/Anuncios";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import DetalleAnuncio from "./components/DetalleAnuncio";


// Queda agrega a cada anuncio de la seccion de anuncios, su descripcion
// Agregar la seccion de entrada para cada entrada de blog (en el curos "creando el blog")

function App() {
  const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  function verificarDarkMode() {
    if(prefiereDarkMode.matches){
      document.body.classList.add("dark-mode");
    }

    prefiereDarkMode.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
    })
  }

  return (
    <div className="App" onLoad={verificarDarkMode}>
      <Routes>
        
        <Route path="/" element={ <Inicio />} />
        <Route path="/nosotros" element={ <Nosotros />} />
        <Route path="/anuncios" element={ <Anuncios />} />
        <Route path="/detalle-anuncio/:anuncio" element={ <DetalleAnuncio />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="/contacto" element={ <Contacto />} />

      </Routes>
  
      <Footer />
    </div>
  );
}

export default App;
