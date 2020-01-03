import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes";
import UniversalDB from "./UniversalDB";
import PortfolioList from "./PortfolioList";
import Xperiel from "./Xperiel";

const Portfolio: React.FC = () => {
  return (
    <Switch>
      <Route exact path={routes.PORTFOLIO} component={PortfolioList} />
      <Route exact path={routes.XPERIEL} component={Xperiel} />
      <Route exact path={routes.UNIVERSALDB} component={UniversalDB} />
      <Redirect to={routes.PORTFOLIO} /> {/* Redirect when no paths match */}
    </Switch>
  );
};

export default Portfolio;
