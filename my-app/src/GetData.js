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
        //   console.log(this.state.persons);
        const persons = res.data;
        this.setState({ persons });
        // const p = JSON.parse(res.data);
        // console.log(persons[0]);
        console.log(persons.map(p =>  p.address.street ));
      })
  }

  render() {
    return (
        <div>
          <ul>
          {/* {this.state.persons.map(p => <li key={p.id}> {p.name}</li>)} */}
          {/* { this.state.persons.map(person => 
            <li> {person.geo.map( p => <li>{p.lat}</li>)}
            )} */}
          </ul>
        </div>
    )
  }
}