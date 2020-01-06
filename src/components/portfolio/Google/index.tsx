import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 30,
    maxWidth: 900,
    margin: "0 auto"
  }
});

const Google: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          Google
        </Typography>
        <Typography variant="body1" color="textSecondary">
          During the summer of 2019, I worked for Google. I was a software
          engineering on the Tools and Infrastructure team, developing tools for
          the ads platform. My project was to integrate one of our existing
          tools with GSuite.
          <br />
          <br />
          During my time, I worked with many of Google's in-house technologies.
          This included Stubby (Google's RPC framework, the in-house version of
          gRPC), Borg (Google's container orchestrator, similar to Kubernetes),
          One Platform (Google's API development technology), and many of
          Google's Java libraries for server side software development.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>
              Created a new server that handles requests from GSuite, manages
              security, processes the data, and forwards the processed request
              to our existing tool
            </li>
            <li>
              Made a GSuite extension using Google Script for interaction
              between Google Sheets and the new server
            </li>
            <li>
              Built UI controls in the existing tool to configure the GSuite
              integration
            </li>
            <li>
              Deployed the new server as a private cloud API using One Platform.
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> Java 8 </li>
          <li> Borg </li>
          <li> One Platform </li>
          <li> Dart, Angular </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">Project Details</Typography>
        <Typography variant="body1" color="textSecondary">
          The tool that we were trying to integrate with GSuite was an event
          driven task running tool called Apprentice. The types of events that
          Apprentice would listen to are code pushes to Piper (Google's
          monorepo), specific file changes, time based events, etc. Users of
          Apprentice would write some task that they want completed when these
          events happen (like automated code cleanup tasks).
          <br />
          <br />
          We wanted to support a new type of event for Apprentice. There was a
          use case that had happened where a text file in the codebase needed to
          be kept in sync with a Google Sheet owned by a project manager. To
          address this situation, we wanted to create an HTTP event that
          Apprentice would listen, and we wanted to make a Google Sheets
          extension that would show a "Save" button on the toolbar that a user
          could click to trigger the HTTP event. This was my task.
          <br />
          <br />
          In order to do this, I had to create a new server that would listen to
          HTTP requests, process their data, manage security, and forward the
          request to Apprentice. I also had to create a GSuite plugin that would
          show a save button and send a request to the server when clicked.
          Finally, I had to extend the Apprentice web UI to allow users to
          customize exactly which HTTP events that their tasks should respond
          to.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Google;
