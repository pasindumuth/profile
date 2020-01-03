import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import github from "assets/github.png";
import linkedin from "assets/linkedin.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: grey[200],
    height: 100
  },
  child: {
    marginTop: 25
  },
  link: {
    margin: "0 5px"
  },
  icon: {
    width: 45,
    objectFit: "contain"
  }
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.child}>
        <a className={classes.link} href="https://github.com/pasindumuth">
          <img className={classes.icon} src={github} alt="github link" />
        </a>
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/pasindumuthukuda"
        >
          <img className={classes.icon} src={linkedin} alt="linkedin link" />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
