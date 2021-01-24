import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Begin from "../protocolSubcomponents/Begin"
import AccidentHeader from "../protocolSubcomponents/AccidentHeader";
import AccidentInvestigators from "../protocolSubcomponents/AccidentInvestigators";
import AccidentDates from "../protocolSubcomponents/AccidentDates";
import AccidentVictim from "../protocolSubcomponents/AccidentVictim";
import AccidentCircumstances from "../protocolSubcomponents/AccidentCircumstances";
import AccidentCauses from "../protocolSubcomponents/AccidentCauses";
import AccidentEffectsType from "../protocolSubcomponents/AccidentEffectsType";
import Summary from "../protocolSubcomponents/Summary";



const AccidentProtocolForm = () => {

    useEffect(() => {
        document.title = 'Protokół wypadku';
    }, [])

    return (
        <div>
            <Router>
                    <Switch>
                        <Route exact path="/protokol-wypadku" component={Begin}/>
                        <Route path="/protokol-wypadku/krok-1" component={AccidentHeader}/>
                        <Route path="/protokol-wypadku/krok-2" component={AccidentInvestigators}/>
                        <Route path="/protokol-wypadku/krok-3" component={AccidentDates}/>
                        <Route path="/protokol-wypadku/krok-4" component={AccidentVictim}/>
                        <Route path="/protokol-wypadku/krok-5" component={AccidentCircumstances}/>
                        <Route path="/protokol-wypadku/krok-6" component={AccidentCauses}/>
                        <Route path="/protokol-wypadku/krok-7" component={AccidentEffectsType}/>
                        <Route path="/protokol-wypadku/podsumowanie" component={Summary}/>
                    </Switch>
            </Router>
        </div>

    );
}

export default AccidentProtocolForm;
