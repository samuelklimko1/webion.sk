import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "./zaklad.css";

function Zaklad() {
    const [bookingDate, setBookingDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Date:", bookingDate);
    };

    return (
        <>
            <div className="container-zaklad">
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="label-zaklad">
                            Vaše meno:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input-zaklad"
                            placeholder="Zadajte vaše meno"
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
                            className="input-zaklad"
                            placeholder="Zadajte váš email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="label-zaklad">
                            Vaše číslo:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input-zaklad"
                            placeholder="Zadajte vaše meno"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="label-zaklad">
                            Popíšte bližšie vaše potreby:
                        </label>
                        <textarea
                            id="description"
                            className="textarea-zaklad"
                            placeholder="Napíšte detaily o tom, čo potrebujete"
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
                            className="input-zaklad"
                            placeholder="Zadajte váš rozpočet v €"
                        />
                    </div>
                    <button type="submit" className="button-zaklad">
                        Odoslať
                    </button>
                </form>
            </div>
        </>
    );
}

export default Zaklad;