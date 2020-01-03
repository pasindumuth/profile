import React from "react";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import routes from "routes";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "0xfff"
  }
});

function getPrefix(url: string): string {
  if (url.startsWith(routes.PORTFOLIO)) {
    return routes.PORTFOLIO;
  }
  return routes.HOME; // return a sensible default
}

const Bar = withRouter(({ history, location }) => (
  <Tabs
    value={getPrefix(location.pathname)}
    onChange={(_, newValue) => history.push(newValue)}
  >
    <Tab value={routes.HOME} label="Home" />
    <Tab value={routes.PORTFOLIO} label="Portfolio" />
  </Tabs>
));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="inherit" elevation={2}>
      <Bar />
    </AppBar>
  );
};

export default Header;
