import { useState } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState(null)
  const dictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  
  
  const searchHandle = () =>{
    const foundData = dictionary.find(ele => ele.word.toLowerCase() === inputVal.toLowerCase() );
    setResult(foundData)
    setInputVal('')
    return foundData
  }

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
      
       <input 
        type='text'
        value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
        />
        <button 
          type='submit'
          onClick={searchHandle}
          >Search</button>
       
      </div>
      <h3>Definition</h3>
      {result ? <p>{result.meaning}</p> : <p>Word not found in the dictionary.</p>}
    </div>
  );
}

export default App;
