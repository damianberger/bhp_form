import React, {useEffect} from "react";

import AccidentHeader from "../protocolSubcomponents/AccidentHeader";
import AccidentInvestigators from "../protocolSubcomponents/AccidentInvestigators";
import AccidentDates from "../protocolSubcomponents/AccidentDates";
import AccidentVictim from "../protocolSubcomponents/AccidentVictim";
import AccidentCircumstances from "../protocolSubcomponents/AccidentCircumstances";
import AccidentCauses from "../protocolSubcomponents/AccidentCauses";
import AccidentEffectsType from "../protocolSubcomponents/AccidentEffectsType";
import AccidentRecommendations from "../protocolSubcomponents/AccidentRecommendations";
import AccidentAttachments from "../protocolSubcomponents/AccidentAttachments";
import AccidentFinish from "../protocolSubcomponents/AccidentFinish";

const AccidentProtocolForm = () => {

    useEffect(() => {
        document.title = 'Protokół wypadku';
    }, [])

    return (
        <div className={'form-container'}>
            <form onSubmit={e => e.preventDefault()}>
                <AccidentHeader/>
                <AccidentInvestigators/>
                <AccidentDates/>
                <AccidentVictim/>
                <AccidentCircumstances/>
                <AccidentCauses/>
                <AccidentEffectsType/>
                <AccidentRecommendations/>
                <AccidentAttachments/>
                <AccidentFinish/>
            </form>
        </div>
    );
}
export default AccidentProtocolForm;
