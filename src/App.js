import React, { Component } from 'react';
import './App.css';
import Exercise from './Exercise/Exercise';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: "",
    showword:false
  }

  inputChangedHandler = (event) => {
    this.setState ({userInput:event.target.value})
  }


  deleteCharHandler = (index) =>{
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput:updatedText});
  }

  
  render() {

    const charList = this.state.userInput.split('').map((ch,index) => {
        return <CharComponent 
                  charcter = {ch} 
                  key ={index}
                  clicked = {() => this.deleteCharHandler(index)}  
                  /> ;
    });

    return (
      <div className="App">
          <p>Welcome to React App</p>
          <Exercise/>
          <input type="text" placeholder="Enter text" onChange = {this.inputChangedHandler} value={this.state.userInput}/>
          <ValidationComponent 
            userInputLenght={this.state.userInput.length} 
            value = {this.state.userInput}  
            />
          <p> {this.state.userInput}</p>
          {charList}

      </div>
    );
  }
}

export default App;
