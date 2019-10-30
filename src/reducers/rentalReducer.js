import { FETCH_RENTAL } from "../actions/types";

const initialState = {
  allRentals: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RENTAL:
      return {
        ...state,
        allRentals: action.payload
      };
    default:
      return state;
  }
}
