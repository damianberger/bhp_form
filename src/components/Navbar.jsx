import React from "react"
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {logout} from "../actions/auth";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({collapsed, setCollapsed}) => {
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);

    const handleNavCollapse = () => setCollapsed(!collapsed);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <nav className="navHeader navbar fixed-top navbar-expand-lg navbar-light rounded">
            <NavLink to={"/"} className="navbar-brand text-info font-weight-bolder">BHP</NavLink>
            <button
                className="custom-toggler navbar-toggler"
                type="button" data-toggle="collapse"
                data-target="#collapsing-navbar"
                aria-controls="collapsing-navbar"
                aria-expanded={!collapsed}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={`${collapsed ? 'collapse' : ''} navbar-collapse`} id="collapsing-navbar">
                <NavLink to={"/pomoc"} className="nav-link text-info">Pomoc</NavLink>

                <NavLink to={"/lista-formularzy"} className="nav-link text-info">Lista Formularzy</NavLink>

                {!currentUser &&
                <NavLink to={"/logowanie"} className="nav-link text-info">Zaloguj</NavLink>
                }

                {!currentUser &&
                <NavLink to={"/rejestracja"} className="nav-link text-info">Rejestracja</NavLink>
                }

                {currentUser &&
                <NavLink to={"/profil"} className="nav-link text-info">Profil</NavLink>
                }

                {currentUser &&
                <NavLink to={"/login"} className="nav-link text-info" onClick={logOut}>Wyloguj</NavLink>
                }

            </div>
        </nav>
    );
}

export default Navbar;
