import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Juliana', age: 23},
            {name: 'Daniel', age: 28},
        ]
    }

    switchNameHandler = () => {
        console.log('Was clicked!')
    }

    render() {
        return (
            <div className="App">
                <h1>Heloo</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name="Juliana" age="22"> My Hobbies: Racing</Person>
            </div>
        );
    }
}

export default App;
