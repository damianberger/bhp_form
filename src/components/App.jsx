import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import RegisterCompany from "./RegisterCompany";
import Help from "./Help";
import FormList from "./FormList";
import Login from "./Login";
import RegisterWorker from "./RegisterWorker";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Switch>
                    <Route exact path="/" name="LandingPage" component={LandingPage}/>
                    <Route path="/rejestracja-firmy" name="RegisterCompany" component={RegisterCompany}/>
                    <Route path="/rejestracja-pracownika" name="RegisterWorker" component={RegisterWorker}/>
                    <Route path="/lista-formularzy" name="Forms" component={FormList}/>
                    <Route path="/logowanie" name="Login" component={Login}/>
                    <Route path="/pomoc" component={Help}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
