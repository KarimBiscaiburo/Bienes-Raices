import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Anuncios from "./components/Anuncios";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";


function App() {

  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/" element={ <Inicio />} />
        <Route path="/nosotros" element={ <Nosotros />} />
        <Route path="/anuncios" element={ <Anuncios />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="/contacto" element={ <Contacto />} />

      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
