import React, {useState} from "react";


const getSquares = props => {
    props.squares.map(s =>
        (<div className="row">
            {s.map(row =>(<span className="square">{row}</span>))}
        </div>)
    );
};


export default getSquares;
