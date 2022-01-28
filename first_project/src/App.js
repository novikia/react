import React, {useState} from "react";
import getSquares from './components/getSquares';
import './styles/App.css';

function App() {
  const area = Array.from({length: 10}, el => new Array(10));
  




  return (
    <div className="App">
    
    <getSquares squares={area}/>
      
    </div>
  );
}

export default App;
