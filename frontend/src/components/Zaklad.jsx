import React, { useState } from "react";
import "./zaklad.css";
import axios from "axios";

function Zaklad() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        budget: ""
    });

    const [loading, setLoading] = useState(false); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); 

        axios.post("https://webionsk-backend.vercel.app/zaklad", formData)
            .then(response => {
                console.log("Email sent successfully:", response.data);
                alert("Vaša správa bola úspešne odoslaná!");
            })
            .catch(error => {
                console.error("There was an error sending the email:", error);
                alert("Bol problém s odosielaním vašej správy, skontrolujte zadané údaje.");
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false); 
                }, 100);
            });
    };

    return (
        <>
            <div className="container-zaklad">
                <form className="zaklad-form">
                    <div className="form-group">
                        <label htmlFor="name" className="label-zaklad">
                            Vaše meno:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input-zaklad"
                            placeholder="Zadajte vaše meno"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label-zaklad">
                            Emailová adresa:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input-zaklad"
                            placeholder="Zadajte váš email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="label-zaklad">
                            Vaše číslo:
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="input-zaklad"
                            placeholder="Zadajte vaše číslo"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="label-zaklad">
                            Popíšte bližšie vaše potreby:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="textarea-zaklad input-zaklad"
                            placeholder="Napíšte detaily o tom, čo potrebujete"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget" className="label-zaklad">
                            Aký je váš rozpočet?
                        </label>
                        <input
                            type="number"
                            id="budget"
                            name="budget"
                            className="input-zaklad"
                            placeholder="Zadajte váš rozpočet v €"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="button-zaklad"
                        onClick={handleSubmit}
                        disabled={loading} 
                    >
                        {loading ? (
                            <div className="loading-spinner"></div> 
                        ) : (
                            "Odoslať"
                        )}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Zaklad;
