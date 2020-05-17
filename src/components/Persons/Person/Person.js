import React from 'react'
import classes from './Person.css'
import PropTypes from 'prop-types'


const person = (props) => {


    return (
        // <div className={"Person"} style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text"
                   ref={(inputEl) => {this.inputEl = inputEl}}
                   onChange={props.changed}
                   value={props.name}/>
        </div>


    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default person;