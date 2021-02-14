import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
    setState: any;

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/Saeem03/React-App/main/my-app/Data/Data.json?token=AMKT4LOFBA7TRHAGJNMXR5TAGKIJK`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <ul>
        {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
      </ul>
    )
  }
}