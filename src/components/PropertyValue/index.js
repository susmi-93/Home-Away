import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const PropertyValue = props => {
  return (
    <GridContainer>
      <GridItem xs={1} sm={1} md={1}>
        {props.children}
      </GridItem>
      <GridItem xs={11} sm={11} md={11}>
        {props.value}
      </GridItem>
    </GridContainer>
  );
};

export default PropertyValue;
