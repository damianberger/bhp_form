import React from "react";
import {useForm} from "react-hook-form";

const AccidentProtocolAttachment = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

    };

    return (
        <div className={"form-container"}>
            <h1 className="text-center">Krok 8 (accident protocol attachment)</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Załącznik</label>
                    {errors.attachmentName && <label className="text-danger"> {errors.attachmentName.message} </label>}
                    <input
                        name="attachmentName"
                        type="text"
                        className={`form-control ${errors.attachmentName ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <input type="submit" onClick={handleSubmit(onSubmit)}/>
                </div>
            </form>
        </div>
    );
}

export default AccidentProtocolAttachment;
