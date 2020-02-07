import { MONTH_NAME } from '../actions';

export default function(state = "", action) {
  switch (action.type) {
    case MONTH_NAME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
