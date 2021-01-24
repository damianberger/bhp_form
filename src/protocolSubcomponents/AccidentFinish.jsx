import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setFinish} from "../actions/protocol";

const AccidentFinish = () => {
    const {register, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {finishedProtocol: finished} = useSelector((state) => state.protocol)


    let finishedProtocol = useWatch({control, name: 'finishedProtocol',});

    const saveData = () => {
        dispatch(setFinish({finishedProtocol}));
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className="container">
                <h2 className="text-center">11. Zakończenie protokołu</h2>

                <label className={"form-label-title"}>Finalna wersja protokołu</label>
                <input type="checkbox" name="finishedProtocol" onBlur={saveData} ref={register} defaultChecked={finished}/><br/><br/>
            </div>
        </form>
    );
}

export default AccidentFinish;
