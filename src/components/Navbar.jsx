import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light rounded">
            <a className="navbar-brand text-info font-weight-bolder" href="/">
                <span className="">BHP</span>
            </a>
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
                <a className="nav-link text-info" href="/register">Zarejestruj</a>
                <a className="nav-link text-info" href="/login">Zaloguj</a>
                <a className="nav-link text-info" href="/forms">Lista Formularzy</a>
                <a className="nav-link text-info" href="/help">Pomoc</a>
            </div>
        </nav>
    );
}

export default Navbar;
