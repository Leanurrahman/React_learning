import { useState } from 'react';

export default function Batsman(){


    let [runs, setRuns] = useState(0);
    
    let [six, setSix] = useState(0);

      const handleSingle = () => {
        const updatesRuns = runs + 1;
        setRuns(updatesRuns);
      }

          const handlefour = () => {
        setRuns(runs + 4);
        
      }

          const handleSix = () => {
        setRuns(runs + 6); 
        setSix(six + 1);
    };

     return (
        <div>
            <h3>Player: Bangladeshi Batsmans</h3>
            <p>Six: {six}</p>
              {
                runs > 50 && <p>You score: 50</p>
            }
            <h1>Scores: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handlefour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}