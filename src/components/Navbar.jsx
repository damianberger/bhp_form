import React, {useState} from "react"
import {NavLink} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light rounded">
            <NavLink to={"/"} className="navbar-brand text-info font-weight-bolder">BHP</NavLink>
            <button
                className="custom-toggler navbar-toggler"
                type="button" data-toggle="collapse"
                data-target="#collapsing-navbar"
                aria-controls="collapsing-navbar"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="collapsing-navbar">
                <NavLink to={"/register"} className="nav-link text-info">Zarejestruj</NavLink>
                <NavLink to={"/login"} className="nav-link text-info">Zaloguj</NavLink>
                <NavLink to={"/form-list"} className="nav-link text-info">Lista Formularzy</NavLink>
                <NavLink to={"/help"} className="nav-link text-info">Pomoc</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
