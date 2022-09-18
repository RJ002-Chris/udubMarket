import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function TopNav(props) {
    const [textValue, setTextValue] = useState('');

    const handleChange = (event) => {
        const typedValue = event.target.value;
        setTextValue(typedValue);
    }   

    const handleSubmit = (event) => {
        event.preventDefault();
        props.applyFilterCallback(textValue);
        setTextValue('');
    }

    return (
        <div class="topnav">
            <Link to={"/listings"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/cart"}>Cart</Link>
            <div className="search-container">
                <form className="my-2" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className="form-control" rows="1" placeholder="Search for a listing here" 
                            value={textValue}
                            onChange={handleChange}
                        ></input>
                        <button className="btn btn-secondary" type="submit">
                            <span className="material-icons">Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}