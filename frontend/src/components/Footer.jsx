import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

function Footer() {

    return (
        <>
            <div className="container-footer">
                <img src="/webion.png" className="webion-footer"/>
                <div className="container-quicklinks">
                    <h5>Rýchle linky</h5>
                    <Link to="https://www.instagram.com/webion.sk/" className="link-footer">Instagram</Link>
                    <Link to="https://beautybytina.eu" className="link-footer">Beauty By Tina</Link>
                    <Link to="https://vamoska.sk" className="link-footer">Vamoska</Link>
                </div>
            </div>
        </>
    )
}

export default Footer