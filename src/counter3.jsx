
import { useState } from 'react';

export default function Counter3(){

    const [count,setCount] = useState(0);

    const handleAdd2 = () => {
       const Newcount = count+1;
        setCount(Newcount);
    }

    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd2}>Add</button>
        </div>
    )
}