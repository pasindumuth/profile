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
import xperielCardImage from "assets/xperiel-card-image.png";
import universalDBCardImage from "assets/universaldb-architecture.png";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 20,
    paddingBottom: 30,
    maxWidth: 900,
    margin: "0 auto"
  },
  intro: {
    paddingBottom: 20
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
          <Typography variant="h3" gutterBottom>Portfolio</Typography>
          <Typography className={classes.intro} variant="body1" color="textSecondary">
            This is a list of projects I did that I'm most proud of.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item justify="center" spacing={1}>
        <Grid item xs={10}>
          <PortfolioItem
            title="Xperiel Inc."
            period="May 2018 - May 2019"
            brief="I worked at Xperiel for about a year, and in that time, I contributed
            a significant amount to their platform's 3D Scene rendering capability.
            I mostly worked with Java, C++, and graphics APIs."
            image={xperielCardImage}
            alttext="Xperiel 3D Scene editor"
            path={routes.XPERIEL}
          />
        </Grid>
        <Grid item xs={10}>
          <PortfolioItem
            title="Universal DB Project"
            period="June 2019 - present"
            brief="UniversalDB is a Disributed Database Management Systems that I started
            working on as a fun and inustructive side project. I used industry standard
            tools and algorithms to build a reliable and high performance system."
            image={universalDBCardImage}
            alttext="Xperiel 3D Scene editor"
            path={routes.UNIVERSALDB}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioList;
