import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes";
import UniversalDB from "./UniversalDB";
import PortfolioList from "./PortfolioList";
import Xperiel from "./Xperiel";
import Thesis from "./Thesis";
import UberBots from "./UberBots";

const Portfolio: React.FC = () => {
  return (
    <Switch>
      <Route exact path={routes.PORTFOLIO} component={PortfolioList} />
      <Route exact path={routes.XPERIEL} component={Xperiel} />
      <Route exact path={routes.UNIVERSALDB} component={UniversalDB} />
      <Route exact path={routes.THESIS} component={Thesis} />
      <Route exact path={routes.UBERBOTS} component={UberBots} />
      <Redirect to={routes.PORTFOLIO} /> {/* Redirect when no paths match */}
    </Switch>
  );
};

export default Portfolio;
