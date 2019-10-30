import React from "react";
import { connect } from "react-redux";

const withRentalState = Component => {
  const WithRentalState = props => {
    return <Component {...props} />;
  };

  const mapStateToProps = state => ({
    rentals: state.rentals
  });
  return connect(mapStateToProps)(WithRentalState);
};

export default withRentalState;
