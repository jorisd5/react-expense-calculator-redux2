import { MONTH_NUMBER } from '../actions';

export default function(state = 0, action) {
  switch (action.type) {
    case MONTH_NUMBER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

