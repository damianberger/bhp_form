import React, {useState} from "react"
import {NavLink} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

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
                <NavLink to={"/pomoc"} className="nav-link text-info">Pomoc</NavLink>

                {!isLogged &&
                <NavLink to={"/logowanie"} className="nav-link text-info">Zaloguj</NavLink>
                }

                {isLogged &&
                <NavLink to={"/lista-formularzy"} className="nav-link text-info">Lista Formularzy</NavLink>
                }

                {!isLogged &&
                <Dropdown className={"navbar-dropdown"}>
                    <Dropdown.Toggle variant={"outline-info"} className={"dropdown-button"} id="dropdown-basic">
                        Rejestracja
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <NavLink to={"/rejestracja-firmy"} className="nav-link text-info">Dla firmy</NavLink>
                        <NavLink to={"/rejestracja-pracownika"} className="nav-link text-info">Dla pracownika</NavLink>
                    </Dropdown.Menu>
                </Dropdown>
                }

            </div>
        </nav>
    );
}

export default Navbar;
