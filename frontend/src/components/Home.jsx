import React from "react";
import "./home.css";
import "./atom.scss";

function Home() {
    return (
        <>
            <div className="container-home">
                <div className="container-maintext">
                    <h1>Webstránky na mieru</h1>
                    <h2>Máte záujem? </h2>
                    <button>Chcem to</button>
                </div>
                <div id="atom">
                    <div id="nucleus">
                    </div>
                    <div className="orbit">
                        <div className="electron"></div>
                    </div>
                    <div className="orbit">
                        <div className="electron"></div>
                    </div>
                    <div className="orbit">
                        <div className="electron"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;