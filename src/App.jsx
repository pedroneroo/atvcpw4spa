import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Personagem from "./Personagem";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagem/:nome" element={<Personagem />} />
      </Routes>
    </Router>
  );
}
