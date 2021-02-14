import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
    // setState: any;

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/Saeem03/React-App/main/my-app/Data/Data.json?token=AMKT4LPLZH5ZAVRYVYV7SZ3AGKJTC`)
      .then(res => {
          console.log(this.state.persons);
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
        <div>

      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
        </div>
    )
  }
}