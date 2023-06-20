import { useState } from 'react'
import './App.css';
import './index.css';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  function handleClick() {
    {()=>{console.log("puppy id: ", puppy.id)}};

  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
 featuredPup ? console.log(featuredPup.id) : console.log("no id");

  return (
    < div className="App">
     {featPupId && (
        <div className="puppyDiv">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
           
          </p>
          
          
        );
      })
      }
    </div >

  );
}

export default App
