import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {

    let validationMessage ="Text long enough";

    if(props.userInputLenght <=5){
        validationMessage ="Text is too short";

    }
    
    return (
        <div className="ValComp">
            <p> {validationMessage} </p>
        </div>
    )
}

export default ValidationComponent;