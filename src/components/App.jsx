import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Help from "./Help";
import FormList from "./FormList";
import Login from "./Login";
import Register from "./Register";
import AccidentProtocolForm from "./AccidentProtocolForm"
import AccidentRegister from "./AccidentRegister";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {getDataSummary} from "../actions/dataSummary";

const App = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getDataSummary());
    }, [])

    return (
        <Router>
            <Navbar collapsed={isNavCollapsed} setCollapsed={setIsNavCollapsed}/>
            <div className={`App ${isNavCollapsed || "collapsed"}`}>
                <Switch>
                    <Route exact path="/" name="LandingPage" component={LandingPage}/>
                    <Route path="/rejestracja" name="Register" component={Register}/>
                    <Route path="/lista-formularzy" name="Forms" component={FormList}/>
                    <Route path="/logowanie" name="Login" component={Login}/>
                    <Route path="/pomoc" component={Help}/>
                    <Route path="/protokol-wypadku" component={AccidentProtocolForm}/>
                    <Route path="/rejestr" component={AccidentRegister}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
