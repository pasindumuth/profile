import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";
import subtraceSample from "./assets/subtrace-sample.png";
import longSubtraceSample from "./assets/long-subtrace-sample.png";
import subtraceToPattern from "./assets/subtrace-to-pattern.png";
import patternsInCluster from "./assets/patterns-in-cluster.png";

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
          During my undergraduate degree, I did an undergraduate thesis on
          performance debugging tools for systems software. My supervisor was{" "}
          <Link href="https://www.ece.ubc.ca/~sasha/" color="secondary">
            Alexandra Fedorova
          </Link>
          , my operating systems professor in third year.
          <br />
          <br />
          Dr. Fedorova was a consultant at MongoDB, and specialized in
          optimizing performance for WiredTiger, their backend key-value store.
          Performance debugging is notoriously difficult due to the challenges
          of getting insight into where the program is running slow. Either a
          tool produces too little data and misses key events, or it produces
          too much data that's in impossible for a human to analyze it. Function
          execution traces are an example of a tool that produces too much data;
          they capture a complete picture of how a program runs, but they often
          produce up to 400 million events in just 60 seconds of execution.
          <br />
          <br />
          I was tasked with creating an algorithm to capture a higher level
          picture of a function execution trace to hopefully transform it into
          something more comprehensible. In particular, I had first create a
          suitable definition of what a "pattern" in a trace would be. Then, I
          had to create an algorithm to scan the whole trace for all instances
          of all patterns. Finally, I had to create a visualization tool to help
          visualize the patterns and where they occur.
          <br />
          <br />
          After lots of reading, thinking, and experimenting, I came up with all
          of these: a suitable pattern definition, a scalable algorithm to mine
          for patterns, and a visualization tool to display the patterns.
          Details can be found in my{" "}
          <Link
            href="https://github.com/pasindumuth/profile/blob/master/src/assets/thesis-writeup.pdf"
            color="secondary"
          >
            research paper
          </Link>
          . The code for the pattern mining algorithm can be found on my github{" "}
          <Link href="https://github.com/pasindumuth/mine" color="secondary">
            here
          </Link>
          , and the code for the visualization tool can also be found{" "}
          <Link
            href="https://github.com/pasindumuth/nonsequitur-timeline"
            color="secondary"
          >
            here
          </Link>
          . In this article, I'll try to summarize some of the key insights from the paper.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>Read various papers on sequential data mining</li>
            <li>
              Created a suitable definition of a "pattern" in an execution
              trace, one that aligns well with human intuition and rigorously
              justified mathematically
            </li>
            <li>
              Built a scalable pattern mining algorithm in Java that can
              process a trace with 400 million events in less than 20 minutes.
            </li>
            <li>
              Created a pattern visualization tool that both shows what a
              pattern looks like, and where it is on the trace
            </li>
            <li>
              Verified the scalability and pattern quality of both the mining
              algorithm and visualization uasing a large trace created from a
              run of the WiredTiger key-value store.
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h4" gutterBottom>
          Problem Statement
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Many pieces of software in the world need to be fast. For systems like
          database management systems (MongoDB, PostegreSQL, etc), speed is often
          the main selling point, and database vendor can lose customers if their
          database isn't the fastest out there. There are software systems engineers
          who dedicate much of their time to optimizing a piece of software. These
          are software performance engineers.
          <br />
          <br />
          Performance engineers work on a variety of tasks. They optimize a system
          for existing workloads, they debug performance issues on new workloads
          reported to them by a user, and they investigate performance regressions
          in the system after a code push or dependency update.
          <br />
          <br />
          Performance engineering is hard. It's difficult to pin down the bottlenecks
          in an application. My supervisor, Dr. Fedorova, is quite an expert on 
          performance debugging, and even she found that industry tools for profiling
          and analyzing the execution of a slow workload were sorely lacking. She believed
          one research direction worth pursing was to profile every function entrance
          and exist of a program, generate a large amount of data, and then create
          an automated pattern recognition tool to help humans understand the contents
          of a trace.
        </Typography>
        <br />
        <br />
        <Typography variant="h4" gutterBottom>
          Pattern Mining
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Below, we show a sample of what a trace looks like. Every color is a function
          call. When a function calls another function, a box with the color of the called
          function is drawn above the calling function. So the visualization below essentially
          shows how the call stack evolves over time (where going to the right is how the 
          callstack looks in the future).
        </Typography>
        <br />
        <img
          className={classes.image}
          src={subtraceSample}
          alt="Subtrace Sample"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 1. An visualization of a sample trace
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          Of course, this trace is only a few dozen events long. A real trace grows to the
          size of hundreds of millions of lines. It's quickly becomes hard to display such
          a trace on one page. But very quickly, we can observe than even a large trace
          is composed of countless repetitions of a small subset of patterns.
        </Typography>
        <br />
        <img
          className={classes.image}
          src={longSubtraceSample}
          alt="Long Subtrace Sample"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 2. A typical slice of a trace, illustrate many repeated structures
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          We define the notion of a "pattern" according to these repeated structures.
          Every subtrace is mapped to a pattern. To define this mapping, we use a recursive
          definition. Given a subtrace, we compute all the patterns of the subtraces situated
          immdiately as children of the base function call. Then, some of these subtraces
          might map to the same pattern. To define the pattern for the whole subtrace, we take
          one instance of each child pattern, and then draw the base function underneath this
          list of unique child patterns. Below is an illustration of this mapping in action.
        </Typography>
        <br />
        <img
          className={classes.image}
          src={subtraceToPattern}
          alt="Subtrace to Pattern"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 3. An example of how a subtrace maps to a pattern.
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          The precise definition of a subtrace's pattern might seem a little confusing,
          but it's probably better understood directly from the paper.
          <br />
          <br />
          An important goal of any pattern definition is for there not to be a large variation
          of patterns in a trace. This is because the whole point of patterns is so that
          there is little enough of them to visualize them. But the definition of a pattern
          should still encompass the entirity of the trace; every point on the trace should
          be a part of a pattern in some way. Our definition certainly satisfies this latter property.
          <br />
          <br />
          Unfortunately, our definition of a pattern results in far too many varieties
          in a trace. A 400 million line long trace has about 400 distinct patterns, to many
          to visualization or draw on a timeline.
        </Typography>
        <br />
        <br />
        <Typography variant="h5" gutterBottom>
          Dealing with a Large Number of Patterns
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Fortunately, our pattern definition has some neat mathematical properties. In the paper,
          we define a metric over the space of patterns. To do this, we first define
          a metric over the space of functions. Then, using the Hausdorff distance, we define
          a metric over the space of patterns. This metric allows us to cluser together similar
          patterns. With some hope, there would be a more managable number of these clusters.
          <br />
          <br />
          After clustering using the pattern distance, we successfully get a small number of distinct
          clusters, only on the order of a few dozen. Below, we see the individual patterns that constitute
          a single cluster.
          </Typography>
        <br />
        <img
          className={classes.image}
          src={patternsInCluster}
          alt="Patterns in Cluster"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 3. An example of how a subtrace maps to a pattern.
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          We see that the patterns in a cluster are quite similar, and so we can be confident that
          a the clusters partitions the set of all subtraces in a trace in a way that conforms
          to human intuition.
          <br />
          <br />
          A lot more can be said about the mathematics of a pattern and why clusters are quite
          good at partitioning. A much more in depth discussion of the pattern distance and clustering
          can be found in the paper.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> We have a good definition of a pattern. All subtraces correspond to exactly one
            pattern, and these patterns capture the essence of a subtrace in a way that works
            with intuition. We also clustered the set of patterns in a suitable way that
            resulted in only a few dozen distinct clusters, which is much more managable number
            of objects to display in a timeline on a screen.
          </Typography>
        </GreenBox>
      </Grid>
    </Grid>
  );
};

export default Thesis;