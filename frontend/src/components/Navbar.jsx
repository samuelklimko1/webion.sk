import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <>
            <div>
                <button>Kontakt</button>
                <Link to="/"><img src="/webion-logo.jpg"/></Link>
                <button>Menu</button>
            </div>
        </>
    )
}

export default Navbar