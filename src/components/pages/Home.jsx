import React from "react";
import Navbar from "../layout/Navbar";
import Body from "../layout/Body";
import Footer from "../layout/Footer";
import Section from "../layout/Section.";

function Home() {
    const phone = `6287845190160`;
    
    return (
        <div className="d-flex flex-column min-vh-100 home-body">
           <Navbar />
           <Body>
                <div className="mt-5 text-light">
                    <h1 className="font-weight-bold">Selamat Datang di LTAC</h1>
                    <p className="mb-5">Mitra profesional Anda dalam solusi perpajakan yang komprehensif.<br /> Di dunia bisnis yang semakin kompleks, kami memahami bahwa manajemen pajak yang efektif adalah kunci untuk memastikan pertumbuhan dan keberlanjutan usaha Anda. <br />Dengan pengalaman bertahun-tahun dan pengetahuan mendalam tentang regulasi perpajakan, kami berkomitmen untuk memberikan layanan konsultasi yang tepat, mulai dari perencanaan pajak, kepatuhan, hingga penyelesaian sengketa pajak.<br/>
                        Tim ahli kami bekerja erat dengan Anda untuk mengidentifikasi peluang penghematan pajak dan mengurangi risiko, sambil memastikan bahwa semua kewajiban pajak Anda terpenuhi dengan tepat waktu. <br /> 
                        Percayakan kebutuhan perpajakan Anda kepada kami, sehingga Anda dapat fokus pada hal yang paling penting—mengembangkan bisnis Anda. <br /> <b>Hubungi kami hari ini untuk memulai langkah pertama menuju pengelolaan pajak yang lebih baik dan bisnis yang lebih sukses.</b></p>
                        <a className="btn btn-success fw-bold" href='https://wa.me/6287845190160' target='blank' rel="noopener noreferrer"><i className="fa-brands fa-whatsapp fa-lg me-2"></i>Hubungi Kami</a>
                </div>
            </Body>
            <div className="layanan-background pt-5">
            <Section>
            <div className="navbara container">
                <h2 className="text-center"><b>Kami siap membantu anda dengan layanan lengkap kami</b></h2>
                    <ul className="list-unstyled d-flex flex-wrap justify-content-between"> 
                        <li className="d-flex flex-column align-items-center w-25 text-center">
                            <img src="/assets/fee.png" width="48%" alt="neraca" className="" />
                           <h6><b>Penyusunan Laporan Keuangan <br /> (Neraca, Laba, Rugi, Arus Kas)</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25 text-center">
                            <img src="/assets/tax-report.png" width="56%" alt="neraca" className="" />
                            <h6><b>Pelaporan SPT pph pasal <br /> 21, 22, 23, 24, 25, 26, 4 Ayat 2</b></h6>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25">
                            <img src="/assets/people.png" width="41%" alt="neraca" className="" />
                            <li>
                            <h6><b>Penyusunan SPT Masa PPN,</b></h6>
                            </li>
                            <li><h6><b>Penyusunan SPT Tahunan Badan</b></h6></li>
                        </li>
                        <li className="d-flex flex-column align-items-center w-25 text-center">
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
            </div>
            <div className="team d-flex flex-wrap">
                <div className="frame text-center px-5 py-3 bg-light vh-100 bg-opacity-25 text-light w-25">
                    <h4 className="fw-bold pt-5">Dengan pengawasan oleh ahli</h4>
                    <img src="/assets/owner.png" alt="owner" width="100%"/>
                    <h6><b>Ibu Dwiena ss.sta.steh</b></h6>
                </div>
                <div className="bg-light w-75 bg-opacity-25 text-center pt-5">
                    <div>
                        <h6><b>Telah mendapatkan ijin dan di awasi oleh lembaga terkait</b></h6>
                        <img src="./assets/pjk.png" alt="dirjen-pajak" width="50%" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    
}
export default Home