import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <>
            <div className="container-navbar">
                <button>Kontakt</button>
                <Link to="/"><img src="/webion-logo-transparent.png" className="navbar-logo"/></Link>
                <button>Menu</button>
            </div>
        </>
    )
}

export default Navbar