import React from "react";
import { makeStyles } from "@material-ui/core";
import lightGreen from "@material-ui/core/colors/lightGreen";

const useStyles = makeStyles({
  greenBox: {
    backgroundColor: lightGreen[50],
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: lightGreen[300],
    borderRadius: 4,
    color: lightGreen[800],
    padding: 15
  }
});

const GreenBox: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.greenBox}>{children}</div>;
};

export default GreenBox;
