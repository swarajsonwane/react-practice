import React from 'react'
import {useForm} from "../../context/FormContext";

const Step1 = () => {
    const {formData, updateForm, nextStep} = useForm()
    return (
        <div>
            <h2>Step 1: Basic Info</h2>
            <input placeholder="Name" value={formData.name} onChange={e => updateForm('name', e.target.value)}/>
            <input placeholder="Email" value={formData.email} onChange={e => updateForm('email', e.target.value)}/>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
export default Step1
