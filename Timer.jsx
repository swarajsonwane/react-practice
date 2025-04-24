import React , {useEffect} from 'react'

const Timer = () => {
    
    const [seconds, setSeconds] = React.useState(0);

    useEffect(() => {
       const interval = setInterval( () =>{
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

       return (() => {
            clearInterval(interval);
        })
       }, []);
    
    return (
        <div>Timer
        <div>
            Seconds: {seconds}
        </div>
        </div>
    )
}
export default Timer
