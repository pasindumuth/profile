import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";
import topology from "./assets/topology.png";

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

const Arista: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          Arista
        </Typography>
        <Typography variant="body1" color="textSecondary">
          During the Spring of 2019, I was an intern at Arista. I worked on the
          Cloud Vision Platform (CVP), a product for configuring and viewing the
          telemetry of networking devices. I worked on the CVP frontend, the web
          user interface of the CVP platform. The frontend was written in React,
          the pubsub system in Redux, many of the UI elements used React
          Bootstrap, and most of the graphs and charts were made from scratch
          with SVGs. We also used Flow for static typing.
          <br />
          <br />I focused particularly on a sub-app called the{" "}
          <Link
            href="https://www.arista.com/en/products/arista-eos-cloud-vision#Topology-App"
            color="secondary"
          >
            Topology App
          </Link>
          . This app allows a customer to view the topology of their network
          devices by showing the devices as nodes on a graph, and the connections
          as graph links. My contributions included enhancement of the sidebar,
          advanced tagging features, adding a context menu to the topology,
          being able to select clusters, and more.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>Wrote frontend code in React to enhance the CVP web UI</li>
            <li>
              Enhanced the sidebar of the Topology App to include graphs of the
              network traffic when a link is selected
            </li>
            <li>Made it possible to select and interact with clusters</li>
            <li>
              Improved the layout of the nodes by using a grid pattern when the
              number of nodes was high
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> Javascript/ES6 </li>
          <li> React {"\u0026"} Redux </li>
          <li> React Bootstrap </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">Cloud Vision Platform</Typography>
        <Typography variant="body1" color="textSecondary">
          Arista mainly sells multilayer network switches, usually to large
          organizations who manage their own networking infrastructure. Arista's
          original efforts were solely on EOS (Extensible Operating System),
          which was the operating system that Arista switches used. In recent
          years, Arista started selling a new product called the Cloud Vision
          Platform (CVP). This was a tool to help with the management and
          configuration of Arista devices. Customers who buy CVP can use it to
          view telemetry streamed out of their devices. This includes network
          bandwidth statistics, errors, and network topology.
          <br />
          <br />
          The Topology App is a single page on the CVP web UI that shows the
          network topology of all devices. Below is a screenshot of how it
          looks.
        </Typography>
        <br />
        <img className={classes.partialImage} src={topology} alt="Topology" />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 1. A screenshot of the Topology App
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          The center area is a graph, where the nodes are devices, and the edges
          are the connections between the devices. In case a user has many
          devices (which they often do), multiple devices can be clustered
          together into a single node on the graph. The graph is fully
          interactive; nodes and edges can be selected, and information about
          them is displayed in the sidebar to the left.
        </Typography>
        <br />
        <br />
        <Typography variant="h4">Contributions</Typography>
        <Typography variant="body1" color="textSecondary">
          During my time, I implemented several important features to the
          Topology App. One of them involved being able to select clusters and
          displaying aggregate data about them. This involved showing the
          devices under the cluster recursively, having shortcuts to select
          descendent devices, and open and close clusters via the sidebar.
          <br />
          <br />
          I also implemented a feature to display nodes in a grid layout when
          are a very large number of them was present. Before, in certain cases,
          the nodes would be displayed in a vertical layout, requiring the user
          to zoom out quite a bit to see everything. Now, the screen space is
          used more efficiently.
          <br />
          <br />
          Another major feature I worked on was showing graphs and various other
          numbers on the sidebar when a link was clicked. This made it easier
          for a user to get numbers associated with network load without having
          to use a different part of the app to query the same data.
          <br />
          <br />
          All the features I worked on were enhancements of the Topology App,
          helping improve the product to make it more valuable and compelling
          for customers.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Arista;
