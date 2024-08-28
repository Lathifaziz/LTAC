import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WhatsAppRedirect from "../src/components/whatsApp/WhatsAppRedirect" // Komponen pengalihan
import Home from "../src/components/pages/Home";
import Layanan from "./components/pages/Layanan";
function App() {
    return(
        <Router>
        <div className="d-flex flex-column min-vh-100 container-fluid p-0 bg-light bg-opacity-25">
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/layanan" element={<Layanan />} />
                    <Route path="/whatsappUrl" element={<WhatsAppRedirect />} />
                    {/* Tambahkan rute lainnya jika diperlukan */}
            </Routes>
        </div>
        </Router>
    )
}

export default App