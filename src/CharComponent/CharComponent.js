import React from 'react'
import './CharComponent.css'

const CharComponent = (props) => {
    return(
        <div className="CharComp" onClick ={props.clicked} >
            <p> {props.charcter}</p>
        </div>
    );
}

export default CharComponent;