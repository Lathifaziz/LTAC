import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Section from "../layout/Section.";

function Layanan() {
    return(
        <div className="d-flex flex-column flex-wrap  min-vh-100 layanan-background">
            <Navbar />
            <Section>
            <div className="navbara container d-flex flex-wrap justify-content-center">
                <h2 className="text-center"><b>Kami siap membantu anda dengan layanan lengkap kami</b></h2>
                    <ul className="list-unstyled d-flex flex-wrap justify-content-between"> 
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/fee.png" width="48%" alt="neraca" />
                           <h6><b>Penyusunan Laporan Keuangan <br /> (Neraca, Laba, Rugi, Arus Kas)</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/tax-report.png" width="56%" alt="neraca" />
                            <h6><b>Pelaporan SPT PPh pasal <br /> 21, 22, 23, 24, 25, 26, 4 Ayat 2</b></h6>
                        </li>
                        <li className="d-flex flex-column text-center align-items-center" style={{width: "250px"}}>
                            <img src="/assets/people.png" width="41%" alt="neraca" />
                        
                            <h6><b>Penyusunan SPT Masa PPN,<br />
                            Penyusunan SPT Tahunan Pribadi dan Badan</b></h6>
                            
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/faktur.png" alt="" width="47%"/>
                            <h6><b>Pengelolaan Faktur Pajak,<br /> ID-Billing, dan Bukti Potong</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/analis.png" alt="" width="45%" />
                            <h6><b>Pendampingan Pemeriksaan <br /> Pajak dan SP2DK</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/22608528.png" alt="" width="53%" className="pb-3"/>
                            <h6><b>Pelatihan Pajak dan Akuntansi</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/learn-tax.png" alt="" width="51%"/>
                            <h6><b>Konsultasi Praktis Pembayaran Pajak Pribadi dan Badan (Perusahaan/Institusi)</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                        <img src="/assets/card.png" alt="" width="50%"/>
                            <h6><b>Jasa Pembuatan NPWP</b></h6>
                        </li>
                    </ul>
                </div>
            </Section>
            <Footer />
        </div>
    )
    
}

export default Layanan;