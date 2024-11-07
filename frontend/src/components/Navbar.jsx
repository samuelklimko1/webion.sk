import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <>
            <div className="container-navbar">
                <button className="button-navbar">Kontakt</button>
                <Link to="/"><img src="/webion.png" className="navbar-logo"/></Link>
                <button className="button-navbar">Menu ≡</button>
            </div>
        </>
    )
}

export default Navbar