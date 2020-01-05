import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 30,
    maxWidth: 900,
    margin: "0 auto"
  },
  image: {
    width: "100%"
  },
  partialImage: {
    width: "70%",
    padding: "0 15%"
  },
  imageCaption: {
    display: "flex",
    justifyContent: "center"
  }
});

const Thesis: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          Undergraduate Thesis
        </Typography>
        <Typography variant="body1" color="textSecondary">
          During my undergraduate degree, I did an undergraduate thesis in
          systems engineering and data visualization. My supervisor was my
          supervisor{" "}
          <Link href="https://www.ece.ubc.ca/~sasha/" color="secondary">
            Dr. Alexandra Fedorova
          </Link>
          , my operating systems professor in third year.
          <br />
          <br />
          Dr. Fedorova was a consultant at MongoDB, and specialized in
          optimizing performance for WiredTiger, their backend key-value store.
          Performance debugging is notoriously difficult due to the challenges
          of getting insight into where the program is running slow. Either a
          tool is too course and misses key events, or their too fine and
          produces too much data for a human to analyze. Function execution
          traces are an example of this; they capture a complete picture of how
          a program runs, but they often produce up to 400 million events in
          just 60 seconds of execution; too much for a human to reason about.
          <br />
          <br />
          I was tacked with creating some sort of algorithm to capture a higher
          level picture of a function execution trace, hopefully yielding
          something more comprehensible. In particular, I had to make a suitable
          definition of what a "pattern" in a trace was, and I had to create an
          algorithm to scan the whole trace for all instances of all patterns.
          Then, I had to create a visualization tool to help visualize the
          patterns and where they occur.
          <br />
          <br />
          After lots of reading, thinking, and experimenting, I came up with all
          of these: a suitable pattern definition, a scalable algorithm to mine
          for patterns, and a visualization tool. You can take a look at my
          research paper{" "}
          <Link
            href="https://github.com/pasindumuth/profile/blob/master/src/assets/thesis-writeup.pdf"
            color="secondary"
          >
            here.
          </Link>
          <br />
          <br />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Thesis;
