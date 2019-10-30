import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const typographyStyle = {
  section: {
    padding: "15px 75px"
  },
  sectionsmall: {
    padding: "15px 0"
  },
  container,
  property: {
    width: "auto",
    boxShadow:
      "0 41px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    padding: "20px"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  center: {
    textAlign: "center"
  },
  ...imagesStyles
};

export default typographyStyle;
