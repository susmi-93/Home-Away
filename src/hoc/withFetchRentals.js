import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRentals } from "../actions/rentalActions";

const withFetchRentals = Component => {
  const WithFetchRental = props => {
    useEffect(() => {
      props.fetchRentals();
    }, []);
    return <Component {...props} />;
  };

  const mapStateToProps = state => ({
    rentals: state.rentals
  });
  const mapDispatchToProps = dispatch => ({
    fetchRentals: () => dispatch(fetchRentals())
  });
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithFetchRental);
};

export default withFetchRentals;
