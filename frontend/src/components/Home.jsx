import React from "react";
import "./home.css";

function scrollToDiv() {
    const element = document.getElementById('form');
    element.scrollIntoView({ behavior: 'smooth' });
}

function Home() {
    return (
        <>
            <div className="container-home">
                <div className="container-maintext">
                    <h1 className="bigtext-home">Webstránky na</h1>
                    <h1 className="bigtext-home bigtext-home-mieru">mieru</h1>
                    <div className="container-button-chcemto">
                        <button 
                            className="button-chcemto" 
                            onClick={scrollToDiv} 
                        >
                            Chcem to
                        </button>
                    </div>
                </div>
            </div>
            <div id="form" className="container-form">
                <form className="contactForm">
                    <div className="container-iandt-form">
                        <div className="container-inputs-form">
                            <input type="text" id="name" name="name" placeholder="Meno: " className="input-form" required />
                            <input type="email" id="email" name="email" placeholder="Email: " className="input-form" required />
                            <input type="tel" id="phone" name="phone" placeholder="Telefónne číslo: " className="input-form" required />
                        </div>
                        <textarea id="details" name="details" rows="5" placeholder="Popíšte ako si predstavujete vašu stránku: "className="input-form textarea-form"/>
                    </div>
                    <div className="container-checkbox-form">
                        <input type="checkbox" id="design" name="interest" value="design" className="checkbox-form" checked disabled/>
                        <label for="design">Web dizajn</label>
                        <input type="checkbox" id="development" name="interest" value="development" className="checkbox-form" checked disabled/>
                        <label for="development">Web vývoj</label>
                        <input type="checkbox" id="hosting-domena" name="interest" value="hosting-domena" className="checkbox-form" checked disabled/>
                        <label for="hosting-domena">Hosting a Doména</label>
                        <input type="checkbox" id="eshop" name="interest" value="eshop" className="checkbox-form" />
                        <label for="eshop">E-Shop</label>
                        <input type="checkbox" id="booking" name="interest" value="booking" className="checkbox-form" />
                        <label for="booking">Booking</label>
                        <input type="checkbox" id="seo" name="interest" value="seo" className="checkbox-form"/>
                        <label for="seo">SEO optimalizácia</label>
                    </div>
                    <div className="container-submit-form">
                        <button type="submit" onSubmit="" className="form-submit-button">Odoslať</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Home;