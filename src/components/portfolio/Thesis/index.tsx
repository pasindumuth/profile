import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";
import subtraceSample from "./assets/subtrace-sample.png";
import longSubtraceSample from "./assets/long-subtrace-sample.png";
import subtraceToPattern from "./assets/subtrace-to-pattern.png";
import patternsInCluster from "./assets/patterns-in-cluster.png";
import timelineTool from "./assets/timeline-tool.png";
import traceViz from "./assets/trace-viz.png";

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
          During my undergrad degree, I did an undergraduate thesis on
          performance debugging tools for systems software. My supervisor was{" "}
          <Link href="https://www.ece.ubc.ca/~sasha/" color="secondary">
            Alexandra Fedorova
          </Link>
          , my operating systems professor in third year.
          <br />
          <br />
          Dr. Fedorova was a consultant at MongoDB and specialized in optimizing
          performance for WiredTiger, their backend key-value store. Performance
          debugging is notoriously difficult due to the challenges of getting
          insight into where the program is running slow. Either a tool produces
          too little data and misses key events, or it produces too much data
          that it's impossible for a human to analyze it. Function execution
          traces are an example of data that forms complete a picture of how a
          program runs, but is usually too vast for a human analyst to process.
          Often, just 60 seconds of execution can have up to 400 million events.
          <br />
          <br />
          I was tasked with creating an algorithm to capture a higher level
          picture of a function execution trace to hopefully transform it into
          something more comprehensible. In particular, I had to first create a
          suitable definition of what a "pattern" is. Then, I had to create an
          algorithm to scan the whole trace for all instances of all patterns.
          Finally, I had to create a visualization tool to help visualize the
          patterns and where they occur.
          <br />
          <br />
          After lots of reading, thinking, and experimenting, I came up with a
          solution. Details can be found in my{" "}
          <Link
            href="https://github.com/pasindumuth/profile/blob/master/src/assets/thesis-writeup.pdf"
            color="secondary"
          >
            research paper
          </Link>
          . The code for the pattern mining algorithm can be found on my Github{" "}
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
          . In this article, I'll try to summarize some of the key insights from
          the paper.
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
              Built a scalable pattern mining algorithm in Java that can process
              a trace with 400 million events in less than 20 minutes.
            </li>
            <li>
              Created a pattern visualization tool that both shows what a
              pattern looks like, and where it is on the trace
            </li>
            <li>
              Verified the scalability and pattern quality of both the mining
              algorithm and visualization using a large trace created from a run
              of the WiredTiger key-value store
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> Java 8 </li>
          <li> Typescript, HTML, CSS </li>
          <li> NodeJS </li>
          <li> PostgreSQL </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4" gutterBottom>
          Problem Statement
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Many pieces of software in the world need to be fast. For systems like
          database management systems (MongoDB, PostgreSQL, etc), speed is often
          the main selling point, and database vendors can lose customers if
          their database isn't the fastest out there. There are software systems
          engineers who dedicate much of their time to optimizing a piece of
          software. These are software performance engineers.
          <br />
          <br />
          Performance engineers work on a variety of tasks. They optimize a
          system for existing workloads, they debug performance issues on new
          workloads reported to them by a user, and they investigate performance
          regressions in the system after a code push or dependency update.
          <br />
          <br />
          Performance engineering is hard. It's difficult to pin down the
          bottlenecks in an application. My supervisor, Dr. Fedorova, is quite
          an expert on performance debugging, and even she found that industry
          tools for profiling and analyzing the execution of a slow workload
          were sorely lacking. She believed one research direction worth
          pursuing was to profile every function entrance and exit of a program,
          generate a large amount of data, and then create an automated pattern
          recognition tool to help humans understand the contents of a trace.
        </Typography>
        <br />
        <br />
        <Typography variant="h4" gutterBottom>
          Pattern Mining
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Below, we show a sample of what a trace looks like. Every color is a
          function call. When a function calls another function, a box with the
          color of the called function is drawn above the calling function. So
          the visualization below essentially shows how the call stack evolves
          over time.
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
          Fig 1. A visualization of a sample trace
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          Of course, this trace is only a few dozen events long. A real trace
          grows to the size of hundreds of millions of events. It quickly
          becomes hard to display such a trace on one page. However, if we look
          closely at a large trace, we would notice that it's composed primarily
          of many repetitions of subtraces.
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
          Thus, we define a pattern to be a compressed form of a subtrace that
          captures the patterns of the child subtraces, and we map every
          subtrace in the full trace to its corresponding pattern. Thus, the
          definition of a pattern is a recursive definition. Given a subtrace,
          we compute all the patterns of the subtraces situated immediately as
          children of the base function call. Some of these subtraces might map
          to the same pattern. To define the pattern for the whole subtrace, we
          take one instance of each child pattern, and then draw the base
          function underneath this list of unique child patterns. Below is an
          illustration of this mapping in action.
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
          The precise definition of a subtrace's pattern might seem a little
          confusing, so it's probably better understood directly from the paper.
          <br />
          <br />
          An important goal of any pattern definition is for there not to be a
          large number of patterns in a trace. This is because the whole point
          of defining patterns is so that there is little enough of them to
          visualize, but should still encompass the entirety of the trace; every
          point on the trace should be a part of a pattern in some way. Our
          definition certainly satisfies this latter property, but unfortunately
          doesn't satisfy the former. A 400 million line long trace has about
          400 distinct patterns, too many to visualization or draw on a
          timeline.
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom>
          Dealing with a Large Number of Patterns
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Fortunately, our pattern definition has some neat mathematical
          properties. In the paper, we define a metric over the space of
          patterns. To do this, we first define a metric over the space of
          functions, and then use the Hausdorff distance to generalize to
          patterns. This metric allows us to cluster together similar patterns.
          <br />
          <br />
          After clustering using the pattern distance, we successfully get a
          small number of distinct clusters, only on the order of a few dozen.
          Below, we see the individual patterns that constitute a single
          cluster.
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
          Fig 4. The patterns the constitute a cluster look very similar to the
          human eye
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          We see that the patterns in a cluster are quite similar, so we can be
          confident that the clusters partition the set of all subtraces in a
          trace in a way that conforms to human intuition.
          <br />
          <br />A lot more can be said about the mathematics of a pattern and
          why clusters are quite good at partitioning. A much more in-depth
          discussion of the pattern distance and clustering can be found in the
          paper.
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom>
          Pattern Mining Algorithm
        </Typography>
        <Typography variant="body1" color="textSecondary">
          A very nice property of our pattern definition is that for a given
          trace, we can just do one pass over the trace and map every single
          subtrace of the whole trace to their corresponding pattern. The only
          memory requirement is to hold the history of all patterns that had
          been seen, which is only on the order of 400. Most patterns don't grow
          very long.
          <br />
          <br />
          Because of our simple pattern definition, we get a fast, scalable
          pattern mining algorithm almost for free.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> We created a good definition of a
            pattern. All subtraces correspond to exactly one pattern, and these
            patterns capture the essence of a subtrace in a way that aligns with
            intuition. We also clustered the set of patterns in a suitable way
            that resulted in only a few dozen distinct clusters, which is a much
            more manageable number of objects to display in a timeline on a
            screen. Finally, we made a fast, scalable pattern mining algorithm
            that can compute the pattern for every subtrace.
          </Typography>
        </GreenBox>
        <br />
        <br />
        <Typography variant="h4" gutterBottom>
          Visualization
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The visualization tool is a simple timeline that shows where the
          pattern clusters in an execution trace are. The timeline starts on the
          left and ends on the right. We show the mined patterns for 5 different
          threads below. Each pattern cluster is given a different color, and
          the occurrence of each pattern in each thread is drawn on a ribbon for
          that thread. If you look closely, you'll see that a ribbon often has
          multiple colors. This is because we draw multiple patterns on a single
          ribbon if occurrences of those patterns don't overlap. We do this to
          keep the visualization in one screen, which is very important for a
          human analyst. Using this space saving technique, can successfully fit
          35 patterns in just 10 ribbons, which allows us to draw the timelines
          for about 10 threads on a single screen. We used Typescript and NodeJS
          to develop this tool.
        </Typography>
        <br />
        <img className={classes.image} src={timelineTool} alt="Timeline Tool" />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 5. A screenshot of the visualization tool we use
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          We also incorporated some interactivity into the visualization. When
          you click on one of the pattern clusters in the timeline, the subtrace
          that corresponds to that particular instance of the pattern is drawn
          below. Additionally, hovering over a pattern cluster on the timeline
          shows a hover tooltip that displays the various patterns that
          constitute the cluster.
        </Typography>
        <br />
        <img className={classes.image} src={traceViz} alt="Trace Viz" />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 6. A screenshot of the interactive features of the tool
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          With these visualization features, the user has both a high level view
          of the whole execution trace, but also has the ability to click into
          the specific subtrace that they want to gain insight into.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> We created a good visualization tool that
            allows a user to see pattern clusters in a timeline on one screen.
            Users can click on the pattern clusters to display the actual
            subtrace corresponding to the pattern cluster, allowing the users to
            go from a coarse grained view to a fine grained view with ease.
          </Typography>
        </GreenBox>
        <br />
        <br />
        <Typography variant="h4" gutterBottom>
          Conclusion
        </Typography>
        <Typography variant="body1" color="textSecondary">
          In our work, we created a novel pattern mining algorithm that can mine
          a trace for patterns, and we built an effective visualization tool
          that allows the user to see the patterns and the specific parts of the
          trace those patterns correspond to. Overall, my project was a success,
          resulting in an A+ for my thesis. With some effort, perhaps my tool
          may become a real tool that can provide real value to software
          performance engineers in the future.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Thesis;
