import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css'
import React from "react";

function NavBar() {
    return (
      
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img src='./produlimp.png'/>
                <a className="navbar-brand" href="#">Produlimp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Escobas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Esponjas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cepillos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Bazar</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;