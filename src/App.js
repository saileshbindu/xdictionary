import { useState } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState(null);
  
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];
  
  const searchHandle = () => {
    const trimmedInput = inputVal.trim();
    if (trimmedInput === '') {
      setResult(null); 
      return;
    }
    
    const foundData = dictionary.find(ele => ele.word.toLowerCase() === trimmedInput.toLowerCase());
    setResult(foundData);
    setInputVal('');
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input 
          type='text'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type='submit' onClick={searchHandle}>Search</button>
      </div>
      <p><strong>Definition: </strong></p>
      <p>
        {result ? (
          result.meaning
        ) : (
          inputVal.trim() === '' ? (
            'Please enter a word to search.'
          ) : (
            'Word not found in the dictionary.'
          )
        )}
      </p>
    </div>
  );
}

export default App;