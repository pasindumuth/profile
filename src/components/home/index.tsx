import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import profilePic from "assets/profile-pic.jpg";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 30
  },
  imageContainer: {
    marginTop: 10,
    padding: 25
  },
  image: {
    width: "100%",
    borderRadius: "50%"
  }
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10} sm={6}>
        <Typography variant="h3" gutterBottom>
          About Pasindu
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Hey, my name is Pasindu, and I'm a passionate software engineer.
          <br />
          <br />
          In my spare time, I love learning about exotic subjects like real-time
          algorithms, distributed systems, and machine learning. I love
          stretching and expanding my mind, learning about how these algorithms
          work and why they are good.
          <br />
          <br />
          But my theoretical tendencies are always kept in check by my pragmatic
          ego. I'm obsessed with building large scale, complex systems in a safe
          and correct way. I constantly think about how to best do unit tests,
          what the ideal integration testing infrastructure would be, and how to
          write documentation that is actually maintainble and useful. I pursue
          projects where I get to experience the full stack, I read articles on
          the best testing practices and why they are the best, and I learn many
          programming languages and technologies to understand different ways of
          doing things. I believe understanding multiple domains is important
          for the enrichment knowledge, which can lead to superior, though
          unconventional, solutions.
          <br />
          <br />
          Although I have a strong passion for systems, a significant amount of
          my work experience has been with front-end web developement. I've used
          React to create high quality user interfaces, as well as complex and
          interactive data visualizations. In fact, I used React to create this
          very website. I have a strong eye for aesthetics, and I can only take
          pride in a piece of work once it's beautiful.
          <br />
          <br />
          Ultimately, I'm a practical engineer with a strong love for
          theoretical justification. I've learned to balance these two aspects
          of myself, and I believe these traits make me an invaluable individual
          to have on a team.
        </Typography>
      </Grid>
      <Grid item xs={10} sm={4}>
        <Box className={classes.imageContainer}>
          <img
            className={classes.image}
            src={profilePic}
            alt="3D Scene Editor"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
