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
                    <div>
                    <p className="me-3">Contact Person: </p>
                    <div className="d-flex">
                    <i className="fa-solid fa-phone me-2 mt-3"></i>
                    <p> 
                    +62 857-2734-5027 <br />
                    +62 881-6346-047
                    </p>
                    </div>

                    <p><i class="fa-solid fa-envelope me-2"></i>konsultanltac@gmail.com</p>
                    </div>
                    <p>Kunjungi Halaman kami:</p>
                    <ul className="list-unstyled navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                        </li>
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
                            <a className="nav-link" href="https://wa.me/6285727345027" target="blank"><i className="fa-brands fa-square-whatsapp me-2 fa-2x"></i>WhatsApp</a>
                        </li>
                       
                    </ul>                
                </div>  
            </div>
                <div>
                <p className="mt-5 text-center text-white">Copyright &copy; Learning Tax and Accounting Center <br /> Since 2020</p>
                </div>
                
        </footer>
    )
    
}

export default Footer