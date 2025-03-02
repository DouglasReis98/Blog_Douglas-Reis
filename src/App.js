import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rodape from "./components/Rodape";
import Artigos from "./pages/Artigos";
import Contato from "./pages/Contato";
import { Routes, Route } from "react-router-dom";
import Artigo from "./pages/Artigo";
import BuscaArtigos from "./pages/BuscaArtigos";
import Error404 from "./pages/Error404";

function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/artigos/:slug" element={<Artigo />} />
          <Route path="/busca" element={<BuscaArtigos />} />         
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Rodape />
    </div>
  );
}

export default App;
