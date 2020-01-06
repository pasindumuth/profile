import React from "react";
import { Grid, Typography, makeStyles, Link, Box } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";
import fullrobot from "./assets/fullrobot.png";
import actuator from "./assets/actuator.png";
import cam from "./assets/cam.png";
import turntable from "./assets/turntable.png";
import electronics from "./assets/electronics.jpg";
import siderobot from "./assets/siderobot.jpg";
import dawg from "./assets/dawg.jpg";

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
  multiContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  multiImage: {
    width: "30%",
    padding: "0 1%"
  },
  imageCaption: {
    display: "flex",
    justifyContent: "center"
  }
});

const UberBots: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          UberBots Robot Competition
        </Typography>
        <Typography variant="body1" color="textSecondary">
          During the second year of my undergrad, I had a major project course.
          The course generally involves building a fully autonomous robot that
          can perform a task. At the end, there would be a competition to see
          which robot was the best. The theme of the competition would differ
          between years. In our year, we were tasked with building an "UberBot",
          a robot that can autonomously pick-up passengers (stuffed toys) in a
          miniature city (a 10x15 foot table) and drop them off at a designated
          location. A website showcasing our project can be found{" "}
          <Link href="https://dawgrobot.wordpress.com" color="secondary">
            here
          </Link>
          .
          <br />
          <br />
          During this project, I wanted to try something new. Instead of working
          on a software task, like tape following, navigation, or arm control
          software, I decided to take full responsibility of the mechanical
          design. This included designing the model of the robot in SOLIDWORKS,
          machining the parts, and assembling the pieces to form the robot
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>
              Used SOLIDWORKS to design all mechanical components of the Uberbot
              from scratch, namely the drivetrain, the chassis, the electronics
              housing, and the arm
            </li>
            <li>
              Created the individual parts using a laser cutter, a waterjet
              cutter, and hand tools
            </li>
            <li>
              Assembled several iterations of the robot until we got to a
              strong, lightweight, aluminum prototype
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> SOLIDWORKS </li>
          <li> Waterjet Cutter </li>
          <li> Laser Cutter </li>
          <li> Hand Tools </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">SOLIDWORKS Model</Typography>
        <Typography variant="body1" color="textSecondary">
          Below are some screenshots of the SOLIDWORKS model for our robot. This
          is primarily my work. As you can see, we have the motors and wheels on
          the sides making up the drivetrain, a lot of room up front making up
          the electronics area, and the arm in the back.
        </Typography>
        <br />
        <img
          className={classes.partialImage}
          src={fullrobot}
          alt="Full Model"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 1. The final design of the robot
        </Typography>
        <br />
        <Typography variant="body1" color="textSecondary">
          As you might have observed, the most complex subassembly of the robot
          is the arm. Below are a few images that show some more details. On the
          left, we have the turntable. This is powered by a motor mounted
          underneath, and its job is to turn the arm around the z-axis. In the
          center, we see a cam powered by a motor. This component changes the
          vertical angle of the arm. Finally, on the right, we see the actuator.
          This device moves the claw at the end in and out, giving our arm its
          3rd degree of motion.
        </Typography>
        <br />
        <Box className={classes.multiContainer}>
          <img className={classes.multiImage} src={turntable} alt="Turntable" />
          <img className={classes.multiImage} src={cam} alt="Cam" />
          <img className={classes.multiImage} src={actuator} alt="Actuator" />
        </Box>
        <br />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 2. The various parts of the arm.
        </Typography>
        <br />
        <Typography variant="body1" color="textSecondary">
          The actuator was definitely one of the most intricate parts built
          during our year of robots; our professor said as much. To build a
          smooth bearing for the forearm to move in and out, and to assemble it
          at such a small scale with limited machinery was definitely the most
          challenging part of fabrication. However, it was certainly worth the
          effort.
        </Typography>
        <br />
        <br />
        <Typography variant="h4">Gallary</Typography>
        <Typography variant="body1" color="textSecondary">
          Below are a few nice photographs of our robot in all its glory.
        </Typography>
        <br />
        <img
          className={classes.partialImage}
          src={electronics}
          alt="Electronics"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 3. All the electronics on our robot
        </Typography>
        <br />
        <img className={classes.partialImage} src={siderobot} alt="Side View" />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 4. A side view of the robot
        </Typography>
        <br />
        <img className={classes.partialImage} src={dawg} alt="Electronics" />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 5. Our robot picking up a passenger
        </Typography>
        <br />
      </Grid>
    </Grid>
  );
};

export default UberBots;
