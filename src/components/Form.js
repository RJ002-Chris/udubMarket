import React from 'react';

export default function Form() {
    const handleClick = () => {
        alert("Form submitted!");
    }

    return (
        <section className="form-section" id="form">
            <form className="form-section">
                <h2 className="comment">Contact Us</h2>
                <div>
                    <label for="email_input">Email:</label> 
                    <input type="email" id="email_input"  name="email" placeholder="email@domain.com" />
                </div>
                <div>
                    <label for="Description">Item Description:</label>
                    <textarea className="form-control" id="desctiption" name="description"></textarea>
                </div>
                <button onClick={handleClick}>Submit</button>
            </form>
        </section>
    )
  }