import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Section from "../layout/Section.";

function Layanan() {
    return(
        <div className="d-flex flex-column flex-wrap  min-vh-100 layanan-background">
            <Navbar />
            <Section>
                <div className="navbara container">
                <h2 className="text-center"><b>Kami siap membantu anda dengan layanan lengkap kami</b></h2>
                    <ul className="list-unstyled d-flex flex-wrap justify-content-between"> 
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/fee.png" width="48%" alt="neraca" className="" />
                           <h6><b>Penyusunan Laporan Keuangan <br /> (Neraca, Laba, Rugi, Arus Kas)</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/tax-report.png" width="56%" alt="neraca" className="" />
                            <h6><b>Pelaporan SPT pph pasal <br /> 21, 22, 23, 24, 25, 26, 4 Ayat 2</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center" style={{width: "250px"}}>
                            <img src="/assets/people.png" width="41%" alt="neraca" className="" />
                            <li>
                            <h6><b>Penyusunan SPT Masa PPN,
                            <br /> Penyusunan SPT Tahunan Badan
                            </b></h6>
                            </li>
                        </li>
                        <li className="d-flex flex-column align-items-center text-center" style={{width: "250px"}}>
                            <img src="/assets/faktur.png" alt="" width="47%"/>
                            <h6><b>Pengelolaan Faktur Pajak,<br /> ID-Billing, dan Bukti Potongan</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25 text-center">
                            <img src="/assets/analis.png" alt="" width="50%" className="pe-3"/>
                            <h6><b>Pendampingan Pemeriksaan Pajak <br /> dan SP2DK</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25 text-center">
                            <img src="/assets/22608528.png" alt="" width="53%" className="pb-3"/>
                            <h6><b>Pelatihan Pajak dan Akuntansi</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25 text-center">
                            <img src="/assets/learn-tax.png" alt="" width="51%" className=""/>
                            <h6><b>Konsultasi Praktis Pembayaran Pajak Baik Orang Pribadi Maupun Badan(Perusahaan/Institusi)</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25 text-center">
                        <img src="/assets/card.png" alt="" width="50%" className=""/>
                            <h5><b>Jasa Pembuatan NPWP</b></h5>
                        </li>
                    </ul>
                </div>
            
            </Section>
            <Footer />
        </div>
    )
    
}

export default Layanan;