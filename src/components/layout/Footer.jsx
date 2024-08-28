import React from "react";
import Map from "../map/Map";

function Footer() {

    return(
        <footer className="mt-Auto py-5 bg-dark">
            <div className="container-fluid px-5 d-flex flex-wrap text-light">
                <div>
                    <p >Alamat Kantor:</p>
                    <p >Jl. Tawes Raya, Dliwang, Ungaran, <br /> Kec. Ungaran Barat, Kabupaten Semarang, Jawa Tengah 50514</p>
                    <Map />
                </div>
                <div className="mx-auto mt-2">
                    <p className="me-3">Contact Person: </p>
                    <p ><i className="fa-solid fa-phone me-2"></i>+62 812 3456 7890</p>
                    <p>Kunjungi Halaman kami:</p>
                    <ul className="list-unstyled navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/lathif.4212/" target="blank"><i className="fa-brands fa-square-facebook  me-2 fa-2x"></i>Facebook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/learningtaxandaccountingcenter/" target="blank"><i className="fa-brands fa-square-instagram me-2 fa-2x"></i>Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://twitter.com/LearningTax" target="blank"><i className="fa-brands fa-square-twitter me-2 fa-2x"></i>Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://wa.me/6287845190160" target="blank"><i className="fa-brands fa-square-whatsapp me-2 fa-2x"></i>WhatsApp</a>
                        </li>
                    </ul>                
                </div>  
            </div>
                <div>
                <p className="mt-5 text-center text-white">Copyright &copy; Learning Tax and Accounting Center <br /> Since 2012</p>
                </div>
                
        </footer>
    )
    
}

export default Footer