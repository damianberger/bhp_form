import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setAttachments, setObstacles} from "../actions/protocol";

const AccidentAttachments = () => {
    const {register, errors, control, setValue} = useForm({mode: 'all'});
    const dispatch = useDispatch();

    const {dateOfPreparation: datePreparation} = useSelector((state) => state.protocol)
    const {obstaclesOfPreparationInTerm: obstacles} = useSelector((state) => state.protocol)

    let dateOfPreparation = useWatch({control, name: 'dateOfPreparation',});
    let obstaclesOfPreparationInTerm = useWatch({control, name: 'obstaclesOfPreparationInTerm',});

    const saveData = () => {
        dispatch(setObstacles({dateOfPreparation, obstaclesOfPreparationInTerm}));
    }

    const {protocolAttachmentsDto: attachments} = useSelector((state) => state.protocol)

    let protocolAttachmentsDto = attachments;

    let attachmentsDto = useWatch({control, name: 'attachmentName',});

    let attachment = {
        attachmentName: attachmentsDto,
    }

    const addAttachment = () => {
        if (attachmentsDto) {
            protocolAttachmentsDto.push(attachment)
        }
        setValue('attachmentName', '')
        dispatch(setAttachments({protocolAttachmentsDto}));
    }

    const removeAttachment = (index) => {
        protocolAttachmentsDto.splice(index, 1);
        dispatch(setAttachments({protocolAttachmentsDto}));
    }

    return (
        <div className="container">
            <h2 className="text-center">10. Załączniki do protokołu</h2>
            <label className={"form-label-title"}>Data przygotowanie protokołu</label>
            {errors.dateOfPreparation && <label className="text-danger"> {errors.dateOfPreparation.message} </label>}
            <input
                name="dateOfPreparation"
                type="date"
                onBlur={saveData}
                defaultValue={datePreparation}
                className={`form-control ${errors.dateOfPreparation ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Przyczyny przekroczenia 14 dni na złożenie?</label>
            {errors.obstaclesOfPreparationInTerm &&
            <label className="text-danger"> {errors.obstaclesOfPreparationInTerm.message} </label>}
            <input
                name="obstaclesOfPreparationInTerm"
                type="text"
                onBlur={saveData}
                defaultValue={obstacles}
                className={`form-control ${errors.obstaclesOfPreparationInTerm ? "border-danger" : ""}`}
                ref={register}
            />

            <h2 className="text-center">Załączniki</h2>

            <label className={"form-label-title"}>Załącznik</label>
            {errors.attachmentName && <label className="text-danger"> {errors.attachmentName.message} </label>}
            <input
                name="attachmentName"
                type="text"
                className={`form-control ${errors.attachmentName ? "border-danger" : ""}`}
                ref={register}
            />

            <ol>
                {protocolAttachmentsDto.length > 0 && protocolAttachmentsDto.map((item, index) => {
                    return <li key={index}>{item.attachmentName}
                        <button className="btn-light" onClick={() => removeAttachment(index)}>Usuń z listy</button>
                    </li>
                })
                }
            </ol>

            <button className="btn-light" onClick={addAttachment} type="button">
                Zapisz i/lub dodaj kolejne zalecenie.
            </button>
        </div>
    );
}

export default AccidentAttachments;
