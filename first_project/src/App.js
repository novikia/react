import React, {useState} from "react";
import Squares from './components/Squares';
import './styles/App.css';

function App() {
  const area = Array.from({length: 10}, el => Array.from({length: 10}, k => 0));
  




  return (
    <div className="App">
    
    <Squares squares={area}/>
      
    </div>
  );
}

export default App;
