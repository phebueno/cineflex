import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

export default function App() {
  const [compraSucessoInfo, setCompraSucessoInfo] = useState({});
  return (
    <BrowserRouter>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sessoes/:idFilme" element={<SessionsPage />}/>
        <Route path="/assentos/:idSessao" element={<SeatsPage compraSucessoInfo={compraSucessoInfo} setCompraSucessoInfo={setCompraSucessoInfo}/>}/>
        <Route path="/sucesso" element={<SuccessPage compraSucessoInfo={compraSucessoInfo}/>}/>
      </Routes>
    </BrowserRouter>
  );
}