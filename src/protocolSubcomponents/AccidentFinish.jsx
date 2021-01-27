import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setFinish} from "../actions/protocol";
import ProtocolService from "../services/ProtocolService";
import {useHistory} from "react-router";

const AccidentFinish = () => {
    const history = useHistory();
    const {register, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {finishedProtocol: finished} = useSelector((state) => state.protocol)
    const {protocolNumber: confirmNumber} = useSelector((state) => state.protocol)

    let {protocol} = useSelector((state) => state)

    let finishedProtocol = useWatch({control, name: 'finishedProtocol',});
    let confirmProtocolNumber = useWatch({control, name: 'confirmProtocolNumber',});

    let confirmCheck = () => {
        if (confirmProtocolNumber === confirmNumber) {
            return true
        }
    }


    const saveData = () => {
        dispatch(setFinish({finishedProtocol}));
    }

    const submit = () => {
        ProtocolService.submitProtocol(protocol)
        history.push("/lista-formularzy");
    }



    return (
        <div className="container">
            <h2 className="text-center">11. Zakończenie protokołu</h2>
            <br/>
            <label className={"form-label-title"}>Finalna wersja protokołu</label>
            <input type="checkbox" name="finishedProtocol" onBlur={saveData} ref={register}
                   defaultChecked={finished}/><br/>

            {finishedProtocol &&
            <input
                disabled={!finishedProtocol}
                className={`form-control ${!confirmCheck() ? "border-danger" : ""}`}
                name="confirmProtocolNumber"
                type="text"
                placeholder="Uwaga! Wysłanie finalnej wersji uniemożliwi późniejszą edycję. Potwierdź poprzez ponowne wpisanie numeru protokołu."
                ref={register}
            />
            }



            <br/>
            <button disabled={finishedProtocol && !confirmCheck()} onClick={submit} className={`${finishedProtocol && !confirmCheck() ? "btn-danger" : "btn-light"}`}
                    type="button">Zapisz protokół
            </button>


        </div>


    );
}

export default AccidentFinish;
