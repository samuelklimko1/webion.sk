import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="container-footer">
                <div className="container-items-footer">
                    <div>
                        <h1 className="h1-footer">Dizajn a tvorba webstránok. </h1>
                        <div className="container-socials-footer">
                            <Link to="https://x.com" className="socialmedia-footer"><FaXTwitter size="22" color="white" /></Link>
                            <Link to="https://linkedin.com" className="socialmedia-footer"><FaLinkedin size="22" color="white" /></Link>
                            <Link to="https://www.instagram.com/webion.sk/" className="socialmedia-footer"><FaInstagram size="22" color="white" /></Link>
                        </div>
                    </div>
                    <div className="container-quicklinks">
                        <h3>Rýchle linky </h3>
                        <div className="container-quicklinks-footer">
                            <Link to="/" className="footer-quicklinks footer-quicklinks-link" onClick={handleScrollToTop}>Home</Link>
                            <Link to="/zacatzaklad" className="footer-quicklinks footer-quicklinks-link" onClick={handleScrollToTop}>Stránka na mieru</Link>
                        </div>
                    </div>
                    <div className="container-contact-footer">
                        <h3>Kontakt</h3>
                        <p className="p-footer-contact">webion.sk@gmail.com</p>
                        <p className="p-footer-contact">0950 262 097</p>
                    </div>
                </div>
                <p className="createdby-footer">Vytvorené Samuelom Klimkom</p>
            </div>
        </>
    );
}

export default Footer;
