import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Juliana', age: 23},
            {name: 'Daniel', age: 28},
        ]
    })
    useState("some other value")
    const switchNameHandler = () => {
        //console.log('Was clicked!')
        setPersonsState({
            persons: [
                {name: 'Maxiii', age: 28},
                {name: 'Juliana', age: 23},
                {name: 'Daniel', age: 29},
            ],
            otherState: personsState.otherState
        })
    }

    return (
        <div className="App">
            <h1>Heloo</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
            <Person name="Juliana" age="22"> My Hobbies: Racing</Person>
        </div>
    );
}

export default app;


