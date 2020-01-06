import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  makeStyles
} from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";
import routes from "routes";
import googleCardImage from "./Google/assets/google-logo.png";
import xperielCardImage from "./Xperiel/assets/xperiel-logo.png";
import universalDBCardImage from "./UniversalDB/assets/universaldb-architecture.png";
import thesisCardImage from "./Thesis/assets/trace-viz.png";
import uberbotsCardImage from "./UberBots/assets/fullrobot.png";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 20,
    paddingBottom: 30,
    maxWidth: 900,
    margin: "0 auto",
    overflowX: "hidden" // https://github.com/mui-org/material-ui/issues/7466
  },
  intro: {
    paddingBottom: 10
  },
  projectTitle: {
    paddingTop: 30
  },
  card: {
    marginTop: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      maxHeight: 100,
      width: "auto"
    }
  },
  period: {
    color: grey[500]
  }
}));

// From https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version
type PropsType = RouteComponentProps & {
  title: string;
  period: string;
  brief: string;
  image: string;
  alttext: string;
  path: string;
};

const Item: React.FC<PropsType> = ({
  title,
  period,
  brief,
  image,
  alttext,
  history,
  path
}) => {
  const classes = useStyles();
  return (
    <Card elevation={2}>
      <CardActionArea>
        <CardContent onClick={() => history.push(path)}>
          <Grid container>
            <Grid item container sm={9}>
              <Grid item>
                <Typography variant="h6">{title}</Typography>
                <Typography className={classes.period} variant="caption">
                  <i>{period}</i>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {brief}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container sm={3} justify="center" alignItems="center">
              <Grid item>
                <img className={classes.card} src={image} alt={alttext} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const PortfolioItem = withRouter(Item);

const PortfolioList: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid container item justify="center" spacing={1}>
        <Grid item xs={10}>
          <Typography variant="h4" gutterBottom>
            Work Experience
          </Typography>
          <Typography
            className={classes.intro}
            variant="body1"
            color="textSecondary"
          >
            These are some of the places I've worked for in the past, and what I
            did there.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item justify="center" spacing={1}>
        <Grid item xs={10}>
          <PortfolioItem
            title="Google LCC"
            period="June 2019 - Aug 2019"
            brief="I had a 3 month internship at Google's New York office in 2019. I
            was on the Tools and Infrastructure Team, primarily developing tools for
            the Ads platform."
            image={googleCardImage}
            alttext="Google Logo"
            path={routes.GOOGLE}
          />
        </Grid>
        <Grid item xs={10}>
          <PortfolioItem
            title="Xperiel"
            period="May 2018 - May 2019"
            brief="I worked at Xperiel for about a year, and in that time, I contributed
            a significant amount to their platform's 3D Scene rendering capability.
            I mostly worked with Java, C++, and graphics APIs."
            image={xperielCardImage}
            alttext="Xperiel 3D Scene editor"
            path={routes.XPERIEL}
          />
        </Grid>
      </Grid>
      <Grid container item justify="center" spacing={1}>
        <Grid item xs={10}>
          <Typography
            className={classes.projectTitle}
            variant="h4"
            gutterBottom
          >
            Projects
          </Typography>
          <Typography
            className={classes.intro}
            variant="body1"
            color="textSecondary"
          >
            This is a list of projects I did that I'm most proud of.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <PortfolioItem
            title="Universal DB Project"
            period="June 2019 - present"
            brief="UniversalDB is a Distributed Database Management System that I started
            working on as a fun and instructive side project. I used industry standard
            tools and algorithms to build a reliable and high performance system."
            image={universalDBCardImage}
            alttext="Universal DB"
            path={routes.UNIVERSALDB}
          />
        </Grid>
        <Grid item xs={10}>
          <PortfolioItem
            title="Undergraduate Thesis: Visualizing Function Execution Traces with Pattern Mining"
            period="May 2017 - Dec 2017"
            brief="During my undergrad, I did an undergraduate thesis with my systems
            professor. The project was to create an algorithm to help mine for patterns in
            function execution traces. The goal was to make execution traces more accessible
            for manual analysis."
            image={thesisCardImage}
            alttext="Undergraduate Thesis"
            path={routes.THESIS}
          />
        </Grid>
        <Grid item xs={10}>
          <PortfolioItem
            title="2nd Year Project: Uberbots Robot Competition"
            period="May 2016 - Aug 2016"
            brief="During my second year, I had an intense, summer long project course. We had to work
            in teams of 4, and we had to build a fully autonomous robot that can navigate a miniature city,
            pick up passengers (stuffed toys), and drop them off at a designated delivery location."
            image={uberbotsCardImage}
            alttext="Uberbots Robot"
            path={routes.UBERBOTS}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioList;
