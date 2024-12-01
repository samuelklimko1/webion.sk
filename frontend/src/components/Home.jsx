import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import Carousel from "./Carousel.jsx";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";


function Home() {
    const [loading, setLoading] = useState(false); 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);  
        
        axios.post("https://webionsk-backend.vercel.app/contact", formData)
            .then(response => {
                console.log("Email sent successfully:", response.data);
                alert("Vaša správa bola úspešne odoslaná!");
            })
            .catch(error => {
                console.error("There was an error sending the email:", error);
                alert("Bol problém s odosielaním vašej správy, skontrolujte zadané údaje.");
            })
            .finally(() => {
                setLoading(false); 
            });
    };
    
    const [isVisible, setIsVisible] = useState(false);
    const [isFullyVisible, setIsFullyVisible] = useState(false);
    const [isBgVisible, setIsBgVisible] = useState(false); 
    const [backgroundText, setBackgroundText] = useState("webstránok");

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setIsBgVisible(true); 
        }, 600); 

        return () => clearTimeout(timer); 
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsFullyVisible(true); 
            }, 600); 

            return () => clearTimeout(timer); 
        }
    }, [isVisible]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 570) {
                setBackgroundText("webov");
            } else {
                setBackgroundText("webstránok");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="container-home">
                <div className={`background-text ${isBgVisible ? "fade-in" : ""}`}>
                    design tvorba {backgroundText}
                </div>
                <div className="container-buttons-home">
                    <button
                        className={`button-home ${isVisible ? 'show' : ''} ${isFullyVisible ? 'visible' : ''}`}
                        onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                    >
                        Naše Projekty
                    </button>
                    <button
                        className={`button-home ${isVisible ? 'show' : ''} ${isFullyVisible ? 'visible' : ''}`}
                        onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
                    >
                        Služby
                    </button>
                    <button
                        className={`button-home ${isVisible ? 'show' : ''} ${isFullyVisible ? 'visible' : ''}`}
                        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                    >
                        Kontakt
                    </button>
                </div>
            </div>
            <div id="projects" className="container-mywork-home">
                <div className="container-mywork-home-text">
                    <div>
                        <p className="mywork-home-p">NAŠA PRÁCA</p>
                        <div className="container-mywork-home-h2">
                            <h2 className="mywork-home-h2">Príklady našich </h2><h2 className="mywork-home-h2-italic">stránok</h2>
                        </div>
                    </div>
                    <div className="mywork-more">
                        <Link to="https://linkedin.com" className="link-more-mywork">
                            <span className="arrow-container">Viac<div style={{ backgroundColor: 'white', borderRadius: '60px', paddingTop: "5px", paddingLeft: "6px", paddingRight: "6px"}}><FaArrowRight color="black" /></div></span>
                        </Link>
                    </div>
                </div>
            </div>
            <Carousel/>
            <div id="services" className="container-myservices">
                <div className="myservices-container-texts">
                    <p className="mywork-home-p">NAŠE SLUŽBY</p>
                    <h2 className="mywork-home-h2 myservices-h1">Služby</h2>
                </div>
                <div className="myservices-home-container-cards">
                    <div className="myservices-card">
                        <h3>Stránka na mieru</h3>
                        <h1>-€</h1>
                        <Link to="/zacatzaklad" className="link-myservices-home" onClick={handleScrollToTop}>Začať</Link>
                        <hr className="hr-myservices"/>
                        <h4>Čo dostanete</h4>
                        <p><IoIosCheckmarkCircleOutline style={{ paddingRight: "5px"}}/>Možnosť E-Shopu</p>
                        <p><IoIosCheckmarkCircleOutline style={{ paddingRight: "5px"}}/>Doména na 1 až 2 roky</p>
                        <p><IoIosCheckmarkCircleOutline style={{ paddingRight: "5px"}}/>Prispôsobený dizajn</p>
                        <p><IoIosCheckmarkCircleOutline style={{ paddingRight: "5px"}}/>Možnosť E-Shopu</p>
                    </div>
                </div>
            </div>
            <div className="container-contact">
                <div id="contact" className="container-contact-home">
                    <div>
                        <p className="mywork-home-p">KONTAKT</p>
                        <div className="container-contact-h1">
                            <div className="contact-h1"><h1 className="h1-contact-home">Ako vám môžem </h1><h1 className="h1-contact-home-italic"> pomôcť?</h1></div>
                        </div>
                        <p>Môžte vyplniť formulár alebo nám napísať na: </p>
                        <div className="container-contact-links">
                            <div className="container-contact-home-links">
                                <Link to="mailto:webion.sk@gmail.com" className="link-contact-home"><SiGmail  size = "25" style={{ paddingRight: '10px', paddingLeft: "3px"}}/> webion.sk@gmail.com</Link>
                                <Link to="https://www.instagram.com/webion.sk/" className="link-contact-home"><FaInstagram size = "25" style={{ paddingRight: '10px', paddingLeft: "3px"}}/> webion.sk</Link>
                                <Link to="https://linkedin.com" className="link-contact-home"><FaLinkedin size = "25" style={{ paddingRight: '10px', paddingLeft: "3px"}}/> Samuel Klimko</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="form-contact" onSubmit={handleSubmit}>
                            <p className="p-form-contact">Celé meno</p>
                            <div className="input-wrapper">
                                <FaUser className="input-icon" />
                                <input
                                    name="name"
                                    placeholder="Zadajte svoje celé meno"
                                    className="input-form-contact"
                                    value={formData.name}
                                    onChange={handleChange}/>
                            </div>
                            <p className="p-form-contact">Email</p>
                            <div className="input-wrapper">
                                <MdOutlineEmail className="input-icon" size={20}/>
                                <input
                                    name="email"
                                    placeholder=" Zadajte svoj email"
                                    className="input-form-contact"
                                    value={formData.email}
                                    onChange={handleChange}/>
                            </div>
                            <p className="p-form-contact">Telefónne číslo</p>
                            <div className="input-wrapper">
                                <MdLocalPhone className="input-icon" size={20}/>
                                <input
                                    name="phone"
                                    placeholder=" Zadajte svoj email"
                                    className="input-form-contact"
                                    value={formData.phone}
                                    onChange={handleChange}/>
                            </div>
                            <p className="p-form-contact">Správa</p>
                            <textarea name="message" placeholder="Správa" className="input-form-contact input-form-contact-message" value={formData.message} onChange={handleChange}/>
                            <button
                                type="submit"
                                className="button-submit-contact"
                                onClick={handleSubmit}
                                disabled={loading} 
                            >
                                {loading ? (
                                    <div className="loading-spinner"></div>  
                                ) : (
                                    <span className="span-submit-button-contact">
                                        Odoslať
                                        <FaArrowRightLong />
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;