import { FETCH_RENTAL, ADD_RENTAL } from "./types";

export const fetchRentals = () => dispatch => {
  fetch("http://renter.getsandbox.com/homes/shortlisted")
    .then(res => res.json())
    .then(rentals =>
      dispatch({
        type: FETCH_RENTAL,
        payload: rentals
      })
    );
};
