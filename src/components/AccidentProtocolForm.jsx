import React, {useEffect} from "react";

import AccidentProtocolNumber from "../protocolSubcomponents/AccidentProtocolNumber";
import AccidentCompany from "../protocolSubcomponents/AccidentCompany";
import AccidentInvestigators from "../protocolSubcomponents/AccidentInvestigators";
import AccidentDates from "../protocolSubcomponents/AccidentDates";
import AccidentVictim from "../protocolSubcomponents/AccidentVictim";
import AccidentCircumstances from "../protocolSubcomponents/AccidentCircumstances";
import AccidentCauses from "../protocolSubcomponents/AccidentCauses";
import AccidentFault from "../protocolSubcomponents/AccidentFault";
import AccidentEffects from "../protocolSubcomponents/AccidentEffects";
import AccidentTypes from "../protocolSubcomponents/AccidentTypes";
import AccidentRecommendations from "../protocolSubcomponents/AccidentRecommendations";
import AccidentProtocolDelay from "../protocolSubcomponents/AccidentProtocolDelay";
import AccidentAttachments from "../protocolSubcomponents/AccidentAttachments";
import AccidentFinish from "../protocolSubcomponents/AccidentFinish";

const AccidentProtocolForm = () => {


    useEffect(() => {
        document.title = 'Protokół wypadku';
    }, [])

        return (
            <>
                <div className={'form-container'}>
                    <form onSubmit={e => e.preventDefault()} id="protocolForm">
                        <h1 className="text-center">Protokół ustalenia przyczyn wypadku</h1>
                        <AccidentProtocolNumber/>
                        <AccidentCompany/>
                        <AccidentInvestigators/>
                        <AccidentDates/>
                        <AccidentVictim/>
                        <AccidentCircumstances/>
                        <AccidentCauses/>
                        <AccidentFault/>
                        <AccidentEffects/>
                        <AccidentTypes/>
                        <AccidentRecommendations/>
                        <AccidentProtocolDelay/>
                        <AccidentAttachments/>
                        <AccidentFinish/>
                    </form>
                </div>
            </>
        );
}
export default AccidentProtocolForm;
