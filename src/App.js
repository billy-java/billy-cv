import Kenntnisse from "./components/Kenntnisse/Kenntnisse";
import About from "./components/about/About";
import BeruflicheLaufbahn from "./components/berufliche Laufbahn/BeruflicheLaufbahn";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Lebenslauf from "./components/lebenslauf/Lebenslauf";
import Kontakt from "./components/kontakt/Kontakt";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beruflicheLaufbahn" element={<BeruflicheLaufbahn />} />
        <Route path="/kenntnisse" element={<Kenntnisse />} />
        <Route path="/lebenslauf" element={<Lebenslauf />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
