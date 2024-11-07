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
                    <label for="name">Meno:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="phone">Telefónne číslo:</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label for="details">Správa:</label>
                    <textarea id="details" name="details" rows="5" placeholder="Popíšte ako si predstavujete vašu stránku: "></textarea>

                    <div>
                        <input type="checkbox" id="design" name="interest" value="design" checked disabled/>
                        <label for="design">Web dizajn</label>

                        <input type="checkbox" id="development" name="interest" value="development" checked disabled/>
                        <label for="development">Web vývoj</label>

                        <input type="checkbox" id="seo" name="interest" value="seo" checked disabled/>
                        <label for="seo">SEO optimalizácia</label>

                        <input type="checkbox" id="hosting-domena" name="interest" value="hosting-domena" checked disabled/>
                        <label for="hosting-domena">Hosting a Doména</label>

                        <input type="checkbox" id="eshop" name="interest" value="eshop"/>
                        <label for="eshop">E-Shop</label>

                        <input type="checkbox" id="booking" name="interest" value="booking"/>
                        <label for="booking">Booking</label>
                    </div>

                    <input type="submit" onSubmit="" />
                </form>
            </div>
        </>
    );
}

export default Home;