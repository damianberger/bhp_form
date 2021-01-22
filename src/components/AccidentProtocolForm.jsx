import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Begin from "../protocolSubcomponents/Begin"
import AccidentHeader from "../protocolSubcomponents/AccidentHeader";
import AccidentInvestigators from "../protocolSubcomponents/AccidentInvestigators";
import AccidentDates from "../protocolSubcomponents/AccidentDates";
import AccidentCause from "../protocolSubcomponents/AccidentCause";
import AccidentEffects from "../protocolSubcomponents/AccidentEffects";
import AccidentProtocolAttachment from "../protocolSubcomponents/AccidentProtocolAttachment";
import AccidentType from "../protocolSubcomponents/AccidentType";
import AfterAccidentRecommendation from "../protocolSubcomponents/AfterAccidentRecommendation";
import Summary from "../protocolSubcomponents/Summary";
import AccidentVictim from "../protocolSubcomponents/AccidentVictim";


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
                        {/*<Route path="/protokol-wypadku/step4" component={AccidentInvestigators}/>*/}
                        {/*<Route path="/protokol-wypadku/step5" component={AccidentType}/>*/}
                        {/*<Route path="/protokol-wypadku/step6" component={AccidentVictim}/>*/}
                        {/*<Route path="/protokol-wypadku/step7" component={AfterAccidentRecommendation}/>*/}
                        {/*<Route path="/protokol-wypadku/step8" name="Login" component={AccidentProtocolAttachment}/>*/}
                        {/*<Route path="/protokol-wypadku/summary" component={Summary}/>*/}
                    </Switch>
            </Router>
        </div>

    );
}

export default AccidentProtocolForm;
