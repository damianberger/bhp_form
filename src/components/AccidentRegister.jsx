import React, {useEffect} from 'react';
import RegisterProtocol from "./RegisterProtocol";

const listProtocols = [
    {
        protocolNumber: "323/2021",
        dateOfPreparation: "2021-01-31",
        victimFullName: "Adam Nowak",
        accidentPlace: "Biuro",
        accidentDate: "2021-01-21",
        accidentEffectDtos: [
            {
                accidentEffect: "Złamał noge"
            },
            {
                accidentEffect: "Złamał nos"
            }
        ],
        daysOfWorkAbsence: 0,
        dateOfDeliveryToZus: "2021-02-01",
        afterAccidentRecommendationDtos: [
            {
                recommendation: "No poprawić"
            },
            {
                recommendation: "chyba poprawić"
            }
        ],
        accidentAtWork: false
    },
    {
        protocolNumber: "323/2021",
        dateOfPreparation: "2021-01-31",
        victimFullName: "Adam Nowak",
        accidentPlace: "Biuro",
        accidentDate: "2021-01-21",
        accidentEffectDtos: [
            {
                accidentEffect: "Złamał noge"
            },
            {
                accidentEffect: "Złamał nos"
            }
        ],
        daysOfWorkAbsence: 0,
        dateOfDeliveryToZus: "2021-02-01",
        afterAccidentRecommendationDtos: [
            {
                recommendation: "No poprawić"
            },
            {
                recommendation: "chyba poprawić"
            }
        ],
        accidentAtWork: false
    },
    {
        protocolNumber: "323/2021",
        dateOfPreparation: "2021-01-31",
        victimFullName: "Adam Nowak",
        accidentPlace: "Biuro",
        accidentDate: "2021-01-21",
        accidentEffectDtos: [
            {
                accidentEffect: "Złamał noge"
            },
            {
                accidentEffect: "Złamał nos"
            }
        ],
        daysOfWorkAbsence: 0,
        dateOfDeliveryToZus: "2021-02-01",
        afterAccidentRecommendationDtos: [
            {
                recommendation: "No poprawić"
            },
            {
                recommendation: "chyba poprawić"
            }
        ],
        accidentAtWork: false
    },
]

const AccidentRegister = () => {

    useEffect(() => {
        document.title = 'Rejestr wypadków';
    }, []);


    return (
        <div>
            <h5 className="text-center font-weight-bold">Rejestr Wypadków przy pracy</h5>
            <h5 className="text-center">Rok 2021</h5>
            <table className="table table-responsive">
                <thead>
                <tr>
                    <th scope="col ">lp.</th>
                    <th scope="col">nr/data sporządzenia protokołu</th>
                    <th scope="col">imię i nazwisko poszkodowanego</th>
                    <th scope="col">miejsce i data wypadku</th>
                    <th scope="col">skutki wypadku dla poszkodowanego</th>
                    <th scope="col">liczba dni niezdolności do pracy</th>
                    <th scope="col">uznanie zdarzenia za wypadek (tak/nie)</th>
                    <th scope="col">data przekazania do ZUS wniosku o świadczenia</th>
                    <th scope="col">inne informacje, niebędące danymi osobowymi, celowe do zamieszczenia
                        w rejestrze, w tym wnioski i zalecenia zespołu powypadkowego
                    </th>
                </tr>
                </thead>
                <tbody>
                {listProtocols && listProtocols.map((e, index) =>
                    <RegisterProtocol
                        key={index}
                        nr={index}
                        protocolNumber={e.protocolNumber}
                        dateOfPreparation={e.dateOfPreparation}
                        victimFullName={e.victimFullName}
                        accidentPlace={e.accidentPlace}
                        accidentDate={e.accidentDate}
                        accidentEffectDtos={e.accidentEffectDtos}
                        daysOfWorkAbsence={e.daysOfWorkAbsence}
                        dateOfDeliveryToZus={e.dateOfDeliveryToZus}
                        afterAccidentRecommendationDtos={e.afterAccidentRecommendationDtos}
                        accidentAtWork={e.accidentAtWork}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};
export default AccidentRegister;
