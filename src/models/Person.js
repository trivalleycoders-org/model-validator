import * as types from '../types'

const Person = {
  tags: {
    type: types.array,
    always: true,
  },
  isFun: {
    type: types.boolean,
    always: true,
  },
  firstTripDate: {
    type: types.isoDateString,
    always: true,
  },
  numberOfTrips: {
    type: types.number,
    always: true,
  },
  firstName: {
    type: types.string,
    always: true,
  },
}

export default Person