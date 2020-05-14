import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heloo</h1>
        <Person name="Max" age="28"/>
        <Person name="Juliana" age="22"> My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
