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

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Switch>
                    <Route exact path="/" name="LandingPage" component={LandingPage}/>
                    <Route path="/register" name="Register" component={RegisterCompany}/>
                    <Route path="/form-list" name="Forms" component={FormList}/>
                    <Route path="/login" name="Login" component={Login}/>
                    <Route path="/help" component={Help}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
