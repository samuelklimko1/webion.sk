import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

 
function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="container-navbar">
            <Link to="/" className={`nav-logo ${isVisible ? 'show' : ''}`}>
                <img 
                    src="/webion.png" 
                    alt="Logo" 
                    className="logo-image" 
                    onClick={() => scrollToSection("home")}
                />
            </Link>
            <button className={`contact-nav ${isVisible ? 'show' : ''}`} onClick={() => scrollToSection("contact")}>
                KONTAKT
            </button>
        </div>
    );
}

export default Navbar;