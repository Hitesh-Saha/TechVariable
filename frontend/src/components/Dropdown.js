import React, { useState } from 'react';
import 'bootstrap';

export default function Dropdown({update}){ 
    
    const [available, setAvailable] = useState("Availability");
    const [city, setCity] = useState("Select a city");

    const fetchApi = async (key, key2) => {
        const response = await fetch ("/api/");
        const res = await response.json();

        if(key !== "" || key2 !== ""){
            const newResults = res.filter((res) => {
                return Object.values(res)
                .join(" ")
                .toLowerCase()
                .includes(key.toLowerCase() && key2.toLowerCase());
            });
            update(newResults);
        }
        else{
            update(res);
        }
    };

    const eventHandler1 = (e) => {
        e.preventDefault();
        setAvailable(e.target.value);
        const key2 = e.target.value;
        fetchApi(key2);
    };

    const eventHandler2 = (e) => {
        e.preventDefault();
        const key = e.target.value;
        setCity(key);
        fetchApi(key);
    };

    return (
        <div className="bg-light mx-3 navbar">  
            <div className="container-fluid brand px-3 py-2">
                <div>
                    <span></span>
                    <h2>Board of doctors</h2>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">LogIn</a>
                    </li>
                </ul>
            </div>

            <div className="menu">
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" >
                        Nephrology
                    </button>
                </div>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                        {available}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="#dropdownMenu1">
                        <li><button className="dropdown-item" type="button" onClick={eventHandler1} value="Yes">Yes</button></li>
                        <li><button className="dropdown-item" type="button" onClick={eventHandler1} value="No">No</button></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        {city}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="#dropdownMenu2">
                        <li><button className="dropdown-item" type="button" onClick={eventHandler2} value="Bangalore">Bangalore</button></li>
                        <li><button className="dropdown-item" type="button" onClick={eventHandler2} value="Hyderabad">Hyderabad</button></li>
                        <li><button className="dropdown-item" type="button" onClick={eventHandler2} value="Delhi">Delhi</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}