import React, {useRef, useEffect} from 'react'
import classes from "../../components/Cockpit/cockpit.css";

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click();
        return() => {

        }
    })


    const assignedClasses = []
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) //classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button  ref={toggleBtnRef} className={btnClass}
                    onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;