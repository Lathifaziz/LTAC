import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const phone = `6285727345027`;
    const message = encodeURIComponent('Halo, saya tertarik dengan layanan Anda.'); // Pesan yang dikirim

    // URL WhatsApp dengan nomor telepon dan pesan
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    return(
            <nav className="navbar navbar-expand-lg d-flex sticky-top bg-light">
                <div className="container-fluid px-5 d-flex justify-content-center">
                    <Link className="navbar-brand d-flex flex-wrap justify-content-center align-items-center" href="/">
                        <img src="/assets/backgrounds/image.png" width="60px" className="d-inline-block align-text-top ms-3 rounded-5 bg-light"/>
                        <h4 className=" fw-bold ps-3">Learning Tax and Accounting Center</h4>
                    </Link>
                    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="w-50 collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-2">
                                <Link className="nav-link fw-bold" aria-current="page" to="/"><i className="fa-solid fa-house me-2"></i>Beranda</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link fw-bold" to="/layanan"><i className="fa-solid fa-tag me-2"></i>Layanan</Link>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link fw-bold" href="#"><i className="fa-solid fa-building me-2"></i>Profil</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-success fw-bold" href={whatsappUrl} target='blank' rel="noopener noreferrer"><i className="fa-brands fa-whatsapp fa-lg me-2"></i>Hubungi Kami</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        
    )
    
}

export default Navbar