import React, { Component } from 'react';
import './App.css';
import { shapeCheck } from './shapeCheck'
import { green } from './logger'
import Person from './models/Person'

class App extends Component {
  render() {
    // const objToCheck = {
    //   tags: ['one', 'two'],
    //   isFun: true,
    //   firstTripDate: '2018-08-09T14:05:15.626Z',
    //   numberOfTrips: 'l',
    //   firstName: 'joe',
    // }
    green('check', shapeCheck(Person, {}))
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
