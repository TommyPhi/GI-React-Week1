import React, { Component } from "react";


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { people: {
            name: props.name,
            age: props.age,
            bday: props.bday
        } }
    }

    people = [
        {
            name: 'Tommy',
            age: '19',
            bday: '06/09/2004'
        },
        {
            name: 'Jane',
            age: '22',
            bday: '02/19/2002'
        },
        {
            name: 'John',
            age: '19',
            bday: '10/05/2004'
        }
    ]

    iteratePeople = this.people.map((person) => <h1>Name: {person.name}, Age: {person.age}, Birthday: {person.bday}</h1>);

    render() { 
        return ( 
            <div>
                {this.iteratePeople}
            </div>
         );
    }
}
 
export default Person;