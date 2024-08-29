import React from "react";
import Navbar from "../layout/Navbar";
import Body from "../layout/Body";
import Footer from "../layout/Footer";
import Section from "../layout/Section.";

function Home() {
    const phone = `6287845190160`;
    
    return (
        <div className="d-flex flex-column min-vh-100">
           <Navbar />
           <div className="home-body">
           <Body>
                <div className="mt-5 text-light">
                    <h1 className="font-weight-bold">Selamat Datang di LTAC</h1>
                    <p className="mb-5">Mitra profesional Anda dalam solusi perpajakan yang komprehensif.<br /> Di dunia bisnis yang semakin kompleks, kami memahami bahwa manajemen pajak yang tepat adalah kunci untuk memastikan pertumbuhan dan keberlanjutan usaha Anda. 
                    <br />Dengan pengalaman bertahun-tahun dan pengetahuan mendalam tentang regulasi perpajakan, kami berkomitmen untuk memberikan layanan konsultasi yang tepat, mulai dari perencanaan pajak, kepatuhan, hingga penyelesaian sengketa pajak.<br/>
                        Tim ahli kami bekerja erat dengan Anda untuk mengidentifikasi risiko pajak, sekaligus memastikan bahwa semua kewajiban pajak Anda terpenuhi dengan efektiv dan efisien. <br /> 
                        Percayakan kebutuhan perpajakan Anda kepada kami, sehingga Anda dapat fokus pada hal yang paling penting—mengembangkan bisnis Anda. <br /> <b>Hubungi kami hari ini untuk memulai langkah pertama menuju pengelolaan pajak yang lebih baik dan bisnis yang lebih sukses.</b></p>
                        <a className="btn btn-success fw-bold" href='https://wa.me/6285727345027' target='blank' rel="noopener noreferrer"><i className="fa-brands fa-whatsapp fa-lg me-2"></i>Hubungi Kami</a>
                </div>
            </Body>
            </div>
            <div className="layanan-background pt-5">
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
            </div>
            <div className="team d-flex flex-wrap">
                
                <div className="bg-light w-100 vh-100 bg-opacity-25 text-center pt-5">
                    <div className="d-flex flex-wrap justify-content-center">
                        <img className="mb-5" src="./assets/pjk.png" alt="dirjen-pajak" width="50%" />
                        <h4 className="px-5 bg-dark bg-opacity-50 text-warning rounded-5"><b>Telah mendapatkan ijin dan di awasi oleh lembaga berwenang</b></h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    
}
export default Home