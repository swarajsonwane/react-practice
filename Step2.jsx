import React from 'react'
import {useForm} from "../../context/FormContext";

 const Step2 = () => {
    const {formData, updateForm,nextStep, prevStep } = useForm();
     return (
         <>
             <h2>Step 2: Address</h2>
             <input placeholder="Address" value={formData.address}
                    onChange={e => updateForm('address', e.target.value)}/>
             <button onClick={prevStep}>Back</button>
             <button onClick={nextStep}>Next</button>
         </>
     )
}
export default Step2
