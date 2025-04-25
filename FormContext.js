import {createContext, useContext, useState} from 'react';

const FormContext = createContext();

export const FormProvider = ({children})=>{
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(
        {
            name:'',
            email:'',
            address:''
        }
    )

    const nextStep = () => setStep(prev => prev+1)
    const prevStep = () => setStep(prev => prev-1);
    const updateForm = (field, value) => setFormData(prev => ({...prev, [field]: value}))

    return (
        <FormContext.Provider value = {{step, formData, nextStep, prevStep, updateForm}}>
            {children}
        </FormContext.Provider>
    )
};

export const useForm = () => useContext(FormContext);