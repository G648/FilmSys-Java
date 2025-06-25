// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filmes from "./pages/Filmes";
import CadastrarFilme from "./pages/CadastrarFilme";
import EditarFilme from "./pages/EditarFilme";
import Header from "./components/Header";
import Home from "./pages//Home"

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/filmes/novo" element={<CadastrarFilme />} />
          <Route path="/filmes/:id/editar" element={<EditarFilme />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
