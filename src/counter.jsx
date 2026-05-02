
import { useState } from 'react';

export default function Counter(){
       
  const [count, setCount] = useState(1);

    const handleAdd = () => {
         const newCount = count + 1;
         setCount(newCount);
         
    }

    const counterStyle = {
    border: '2px solid yellow'

    }
    
return (

<>
        <div style={counterStyle}>

        <h3>Count: {count}</h3>
        <button onClick={handleAdd}>Add</button>

        <h3>Hello</h3>
        <h3>hello Bangladesh</h3>
       </div>

</>


)
}
