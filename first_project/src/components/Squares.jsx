import React, {useState} from "react";


const Squares = props => 
    props.squares.map((s,i) =>
        (<div key={i} className="row">
            {s.map((row,j) =>(<span key={j} className="square">{row}</span>))}
        </div>)
    );;


export default Squares;
