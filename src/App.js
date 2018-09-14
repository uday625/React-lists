import React, { Component } from 'react';
import './App.css';
import Exercise from './Exercise/Exercise';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    userInput: "",
    showword:false
  }

  inputChangedHandler = (event) => {
    this.setState ({userInput:event.target.value})
  }


  render() {
    return (
      <div className="App">
          <p>Welcome to React App</p>
          <Exercise/>
          <input type="text" placeholder="Enter text" onChange = {this.inputChangedHandler}/>
          <ValidationComponent 
            userInputLenght={this.state.userInput.length} 
            value = {this.state.userInput}  
            />
          <p> {this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
