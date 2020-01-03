import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "routes";
import Portfolio from "components/portfolio";
import Home from "./home";

const useStyles = makeStyles({
  root: {
    paddingTop: 48, // The height of the Header
    minHeight: "84vh",
    maxWidth: 1250,
    margin: "0 auto"
  }
});

const Content: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.PORTFOLIO} component={Portfolio} />
        <Redirect to={routes.HOME} /> {/* Redirect when no paths match */}
      </Switch>
    </Box>
  );
};

export default Content;
