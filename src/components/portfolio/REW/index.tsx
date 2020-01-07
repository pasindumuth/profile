import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";
import developments from "./assets/developments-page.png";

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

const REW: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          REW
        </Typography>
        <Typography variant="body1" color="textSecondary">
          My first software engineering work experience was at the{" "}
          <Link href="https://www.rew.ca/" color="secondary">
            Real Estate Wire
          </Link>
          , or REW. REW is a real estate portal that serves most of Canada,
          headquartered in Vancouver. It's one of the most widely used real
          estate websites in Canada, usually coming up the top of most Google
          searches.
          <br />
          <br />
          During my time at REW, I worked on a variety of things. I spent a
          significant amount of time doing data analytics. I architected and
          built an event tracking system for the website from scratch, and I
          also wrote Python scripts and SQL queries for data processing. The
          rest of my time was spent building frontend features in Ruby on Rails.
          I got significant experience with the framework, and server side web
          development in general.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>
              Independently designed and built an event tracking system for the
              website from scratch using Google BigQuery
            </li>
            <li>Built a Twilio notification system for data job errors</li>
            <li>Integrated Mailchimp into the emailing system</li>
            <li>
              Built other website features, such as enhanced search, a news
              widget, map features, etc
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> Ruby on Rails </li>
          <li> Python </li>
          <li> SQL </li>
          <li> Google BigQuery </li>
          <li> Ember.js </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">Contributions</Typography>
        <Typography variant="body1" color="textSecondary">
          During my time at REW, I developed and enhanced various features that
          helped improve the value of the product.
        </Typography>
        <br />
        <Typography variant="h5">Event Tracking System</Typography>
        <Typography variant="body1" color="textSecondary">
          At the time, REW was on the verge of a new business model. They were
          looking to monetize page views and clicks. However, the website didn't
          have any way of tracking page views and clicks, and the job of
          creating a system for doing that was given to me.
          <br />
          <br />
          The first step was finding a backend to store event data. BigQuery is
          a serverless data warehousing solution developed by Google for storing
          and querying terabyte scale data. It also comes equiped with a
          SQL-like query interface with fast and powerful querying capability.
          We decided to use Google BigQuery because of its scalability, ease of
          use, sufficiently powerful query interface, and impressively low cost.
          I spent the first little while learning the API and setting up the
          credential system. Then, it was time to architect the data schemas.
          BigQuery was tricky because you couldn't delete columns once they were
          in place, so we had to try making the right decisions from the start.
          Finally, I used the Ruby client library and wrote code in the web
          portal codebase to fire events from server everytime a page.
        </Typography>
        <br />
        <br />
        <img
          className={classes.partialImage}
          src={developments}
          alt="Developments"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 1. A development page, one of the many pages whose viewings I had
          to capture.
        </Typography>
        <br />
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> The event tracking system was a big
            success, gathering large quantities of data within 4 months of my
            internship, and quicky becaming useful for deriving business
            intelligence.
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Mailchimp Integration</Typography>
        <Typography variant="body1" color="textSecondary">
          Mailchimp is an email address handling and mailing service. It keeps
          track of all users who are subscribed to the service and provides a
          standard interface for sending emails. At the time, we were already
          using SendGrid for some of our emails, but we needed to support
          Mailchimp as well because we had clients on both platforms.
          <br />
          <br />
          This project involved rewriting an existing implementation of
          Mailchimp integration that was insufficient for supporting both
          Mailchimp and SendGrid. I used the Mailchimp REST API directly in the
          Ruby on Rails app. I also had to modify the way email subscriptions
          worked in the agent portal, which was a separate application written
          in Ember.js.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> I successfully integrated Mailchimp into
            the REW codebase, allowing the marketing and operations department
            to send out emails to client registered in both SendGrid and
            Mailchimp mailing lists.
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Twilio Notification Service</Typography>
        <Typography variant="body1" color="textSecondary">
          Data processing jobs occur at all times of the day, including
          non-working hours. But job failure isn't easy to see if there isn't a
          notification system in place to warn the team lead of such an event.
          As a small side project, I was responsible for creating a notification
          system with Twilio.
          <br />
          <br />
          Twilio is a cloud communication platform that has an API for sending
          text messages programmatically. The service was invoked by having a
          scheduled Python program query the error logs every so often. If there
          were jobs that hadn't been completed when they were supposed to, the
          notification service sent a text message.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> The solution successfully kept the data
            platform team lead up to date with job failures, helping to keep the
            platform running smoothely at all times.
          </Typography>
        </GreenBox>
      </Grid>
    </Grid>
  );
};

export default REW;
