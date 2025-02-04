import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rodape from "./components/Rodape";
import Artigos from "./pages/Artigos";
import Contato from "./pages/Contato";
import { Routes, Route, useLocation } from "react-router-dom";
import Artigo from "./pages/Artigo";
import BuscaArtigos from "./pages/BuscaArtigos";
import Error404 from "./pages/Error404";
import { analytics } from "./firebaseConfig/firebaseConfig";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

function App() {

	const location = useLocation();

	useEffect(() => {
		logEvent(analytics, 'page_view', { page_path: location.pathname })
	}, [location])
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/artigos/:slug" element={<Artigo />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/busca" element={<BuscaArtigos />} />
        </Routes>
      <Rodape />
    </div>
  );
}

export default App;
