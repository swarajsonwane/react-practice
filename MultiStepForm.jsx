import Step1 from "./Step1";
import Step2 from "./Step2";
import {useForm} from "../../context/FormContext";

export const MultiStepForm = () => {
    const { step } = useForm();
    return (
        <div style={{ padding: 20 }}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {/*{step === 3 && <Summary />}*/}
        </div>
    );
};