import { FETCH_COSTS_MONTH } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COSTS_MONTH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
