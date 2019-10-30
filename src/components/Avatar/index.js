import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const useStyles = makeStyles(styles);

const Avatar = props => {
  const classes = useStyles();
  console.log("Image url ", props.image);
  return (
    <GridItem xs={12} sm={2} className={classes.center}>
      <img
        src={props.image}
        alt="..."
        className={
          classes.imgRaised +
          " " +
          classes.imgRounded +
          " " +
          classes.imgProperty
        }
      />
    </GridItem>
  );
};
export default Avatar;
