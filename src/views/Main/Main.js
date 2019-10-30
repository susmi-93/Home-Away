import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import SearchRentals from "components/SearchInput";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import withFetchRentals from "../../hoc/withFetchRentals";
import Property from "./Property";

const Main = props => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Home Away"
        logo="assets/img/homeaway.png"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/home1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Home Away.</h1>
                <h3 className={classes.subtitle}>Let's find you a new home</h3>
                <br />
                <SearchRentals
                  className={classes.subtitle}
                  placeholder="Search any rental link here"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Property />
      </div>
      <Footer />
    </div>
  );
};

export default withFetchRentals(Main);
