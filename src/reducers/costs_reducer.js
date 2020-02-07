import { FETCH_COSTS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_COSTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
