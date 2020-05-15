import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Juliana', age: 23},
            {name: 'Daniel', age: 28},
        ],
        showPersons: false
    })
    // useState("some other value")
    const switchNameHandler = (newName) => {
        //console.log('Was clicked!')
        setPersonsState({
            persons: [
                {name: newName, age: 28},
                {name: 'Juliana', age: 23},
                {name: 'Daniel', age: 29},
            ],
            otherState: personsState.otherState
        })
    }

    const nameChangeHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 23},
                {name: 'Daniel', age: 29},
            ],
            otherState: personsState.otherState
        })
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'

    }

    const togglePersonsHandler = () => {
        const doesShow = personsState.showPersons;
        setPersonsState(init => ({...init, showPersons: !doesShow}));
    }

    render()
    {

        let persons = null

        if (personsState.showPersons) {
            persons = (
                <div>
                    <Person
                        name={personsState.persons[0].name}
                        age={personsState.persons[0].age}
                        click={switchNameHandler.bind(this, 'MAAAx')}
                    />
                    <Person
                        name={personsState.persons[1].name}
                        age={personsState.persons[1].age}
                        changed={nameChangeHandler}
                    />
                    <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
                    <Person name="Juliana" age="22"> My Hobbies: Racing</Person>
                </div>
            )
        }


        return (
            <div className="App">
                <h1>Heloo</h1>
                <button
                    style={style}
                    onClick={togglePersonsHandler}>Switch Name
                </button>
                {persons}

            </div>
        );
    }
}

export default app;


