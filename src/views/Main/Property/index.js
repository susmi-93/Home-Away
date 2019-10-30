import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Avatar from "components/Avatar";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import withRentalState from "hoc/withRentalState";
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HomeIcon from "@material-ui/icons/Home";
import PropertyValue from "components/PropertyValue";

const useStyles = makeStyles(styles);
const Property = ({ rentals }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return rentals.allRentals.map((rental, index) => (
    <div
      className={matches ? classes.section : classes.sectionsmall}
      key={index}
    >
      <div className={classes.property}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={2}>
            <Avatar image={rental.mainImage} />
          </GridItem>
          {!matches && <br />}
          <GridItem xs={12} sm={12} md={10}>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <PropertyValue value={rental.address}>
                  <BusinessIcon />
                </PropertyValue>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <PropertyValue value={rental.phone}>
                  <PhoneAndroidIcon />
                </PropertyValue>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <PropertyValue value={rental.email}>
                  <EmailIcon />
                </PropertyValue>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <PropertyValue value={rental.rent}>
                  <AttachMoneyIcon />
                </PropertyValue>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <PropertyValue value={rental.type}>
                  <HomeIcon />
                </PropertyValue>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  ));
};
export default React.memo(withRentalState(Property));
