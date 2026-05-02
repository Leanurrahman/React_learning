
import { useState } from 'react';



export default function  Count(){

    const[c, setC] = useState(0);

    const handleAdder = () => {
        const newCountervalue =  c + 1;
        setC(newCountervalue);
    }
    return (
        <>
        <h3>Count: {c}</h3>
        <button onClick={handleAdder}>Add here</button>
        </>
    )
}