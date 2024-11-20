import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom"


function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); 
        }, 100); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="container-navbar">
            <nav className={`nav-logo ${isVisible ? 'show' : ''}`}>
                <Link to="/" className="logo">SAMUEL</Link>
                <Link to="/" className="logo logo-hollow">KLIMKO</Link>
            </nav>
            <Link to="/booking" className={`contact-nav ${isVisible ? 'show' : ''}`}>KONTAKT</Link>
        </div>
    );
}

export default Navbar;