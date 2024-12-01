import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./navbar.css";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleScrollAndNavigate = (e) => {
        e.preventDefault(); 
        navigate("/"); 
        
        setTimeout(() => {
            window.scrollTo({
                top: 2200,
                behavior: "smooth",
            });
        }, 100);
    };

    return (
        <div className="container-navbar">
            <Link to="/" className={`nav-logo ${isVisible ? 'show' : ''}`}>
                <img 
                    src="/webion.png" 
                    alt="Logo" 
                    className="logo-image"
                />
            </Link>
            <button
                className={`contact-nav ${isVisible ? 'show' : ''}`} 
                onClick={handleScrollAndNavigate} 
            >
                KONTAKT
            </button>
        </div>
    );
}

export default Navbar;
