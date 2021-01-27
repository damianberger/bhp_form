import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setRecommendations} from "../actions/protocol";

const AccidentRecommendations = () => {
    const {register, errors, control, setValue} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {afterAccidentRecommendationsDto: recommendations} = useSelector((state) => state.protocol)

    let afterAccidentRecommendationsDto = recommendations;

    let recommendationDto = useWatch({control, name: 'recommendation',});

    let recommendation = {
        recommendation: recommendationDto,
    }

    const addRecommendation = () => {
        if (recommendationDto) {
            afterAccidentRecommendationsDto.push(recommendation)
        }
        setValue('recommendation', '')
        dispatch(setRecommendations({afterAccidentRecommendationsDto}));
    }

    const removeRecommendation = (index) => {
        afterAccidentRecommendationsDto.splice(index, 1);
        dispatch(setRecommendations({afterAccidentRecommendationsDto}));
    }

    return (
        <div className="container">
            <h2 className="text-center">9. Zalecenia powypadkowe</h2>
            <label className={"form-label-title"}>Zalecenie</label>
            {errors.recommendation && <label className="text-danger"> {errors.recommendation.message} </label>}
            <input
                name="recommendation"
                type="text"
                className={`form-control ${errors.recommendation ? "border-danger" : ""}`}
                ref={register}
            />

            <ol>
                {afterAccidentRecommendationsDto.length > 0 && afterAccidentRecommendationsDto.map((item, index) => {
                    return <li key={index}>{item.recommendation}
                        <button className="btn-light" onClick={() => removeRecommendation(index)}>Usuń z listy</button>
                    </li>
                })
                }
            </ol>

            <button className="btn-light" onClick={addRecommendation} type="button">
                Zapisz i/lub dodaj kolejne zalecenie.
            </button>
        </div>
    );
}

export default AccidentRecommendations;
