import React from 'react'

const RegisterProtocol = (props) => {

    return (
        <tr>
            <th scope="row">{props.nr + 1}</th>
            <td>
                <span>{props.protocolNumber}<br/></span>
                <span>{props.dateOfPreparation}</span>
            </td>
            <td>{props.victimFullName}</td>
            <td>
                <span>{props.accidentPlace}<br/></span>
                <span>{props.accidentDate}</span>
            </td>
            <td>
                    {props.accidentEffectDtos && props.accidentEffectDtos.map
                    ((e, index) =>
                        <span key={index}>
                            {e.accidentEffect}<br/>
                        </span>
                    )}
            </td>
            <td>{props.daysOfWorkAbsence}</td>
            <td>{props.accidentAtWork ? "Tak" : "Nie"}</td>
            <td>{props.dateOfDeliveryToZus}</td>
            <td>
                    {props.afterAccidentRecommendationDtos && props.afterAccidentRecommendationDtos.map
                    ((e, index) =>
                        <spam key={index}>
                            {e.recommendation}<br/>
                        </spam>
                    )}
            </td>
        </tr>
    )
}

export default RegisterProtocol;

