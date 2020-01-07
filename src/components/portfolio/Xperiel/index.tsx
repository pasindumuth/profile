import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import scene3dEditor from "./assets/scene-3d-editor.png";
import pointlightDemo from "./assets/pointlight-demo.png";
import GreenBox from "components/common/GreenBox";

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
  imageCaption: {
    display: "flex",
    justifyContent: "center"
  }
});

const Xperiel: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          Xperiel
        </Typography>
        <Typography variant="body1" color="textSecondary">
          I interned at Xperiel from May 2018 to Dec 2018, and continued working
          part-time (20 hours a week) throughout the first half of 2019. During
          that time, I gained a wide breadth of experience. I worked on UI
          design, web browser 3D rendering, iOS development, and native 3D
          rendering. I got to experience a ton of different things at Xperiel.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>
              Wrote more than 40k+ Java and 20k+ C++ code (measured from Github
              contributors page)
            </li>
            <li>
              Built a web rendering engine from scratch with WebGL 2.0, using
              deferred shading and Blinn-Phong lighting
            </li>
            <li>
              Built a native mobile rendering engine from scratch with OpenGL ES
              3.0, also using deferred shading and Blinn-Phong lighting
            </li>
            <li>
              Extended a C++ application that only supported OpenGL to also
              support the Metal graphics API
            </li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> Google Web Toolkit (GWT) </li>
          <li> Java 8, HTML, CSS </li>
          <li> Bazel </li>
          <li> Firebase </li>
          <li> Spock Testing Framework </li>
          <li> WebGL 2.0, GLSL 3.0, OpenGL ES 3.0</li>
          <li> Metal 2</li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">About the Company</Typography>
        <Typography variant="body1" color="textSecondary">
          Xperiel. Inc is an IOT and Augmented reality startup located in
          Sunnyvale, California. They're building a platform for creating
          augmented reality applications that's friendly to non-programmers.
          Their software system consists of 4 distinct subsystems:
        </Typography>
        <Typography variant="body1" color="textSecondary" component="ul">
          <li>
            <strong>Editor</strong> - This is the web application that's used to
            create Xperiel programs. It consists of an intuitive interface for
            building 2D mobile UIs (similar to XCode and Android studio's layout
            tools, except the UI logic can also be designed with the Editor), an
            interface for building 3D scenes (similar to a game engine, like
            Unity), and an interface for defining cloud logic.
          </li>
          <li>
            <strong>Device SDK</strong> - This is a mobile client that can
            download an Xperiel program and run it. In other words, this is the
            runtime for Xperiel programs (client side).
          </li>
          <li>
            <strong>Compiler</strong> - This transforms the program as defined
            in the Editor into something that can be used by the Device SDK
            runtime.
          </li>
          <li>
            <strong>Experience Server</strong> - This is a runtime environment
            for the cloud logic of an Xperiel program.
          </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">Contributions</Typography>
        <Typography variant="body1" color="textSecondary">
          During my time at Xperiel, I mostly worked on the Editor and the
          Device SDK.
        </Typography>
        <br />
        <Typography variant="h5">Editor</Typography>
        <Typography variant="body1" color="textSecondary">
          The Editor is built entirely in Java, using Google Web Toolkit (GWT).
          All the work that I did for the Editor involved writing Java.
          <br />
          <br />
          Before I joined, Xperiel's platform lacked a robust and natural way to
          construct 3D scenes. For an augmented reality platform, good 3D scene
          support is critical for building many augmented reality applications,
          so it was a high priority to add this capability to the Xperiel
          platform. For much of my 8 month internship, that is what I was doing.
          Below is a screenshot of what the final 3D editor looked like.
        </Typography>
        <br />
        <img
          className={classes.image}
          src={scene3dEditor}
          alt="3D Scene Editor"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 1. A screenshot of the Xperiel 3D Scene Editor
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          As you can see, there are the tools, and there is the preview. I
          independently took ownership of both of these, and developed them from
          start to completion.
        </Typography>
        <br />
        <Typography variant="h6">Web Rendering</Typography>
        <Typography variant="body1" color="textSecondary">
          I developed 100% of the rendering for the preview. I used WebGL 2.0,
          writing shaders in GLSL 3.0. The preview is fully interactive; the
          user can click, drag, and scroll to translate, rotate, and zoom the
          preview in and out.
          <br />
          <br />
          Having never worked on rendering before, I started by first reading
          the basics from the defacto textbook for rendering: "Real-Time
          Rendering" by Akenine-{"M\u00F6ller"}, Haines, and Hoffman. I got up
          to speed with the mathematics of irradiance and the reflective
          properties of physical surfaces. Then, I studied the standard models
          used to simulate how light reflects off surfaces. The classic model is
          the <strong>Blinn-Phong model</strong>, which is what I used for
          shading in the preview.
          <br />
          <br />
          In order to support rendering many lights, I had to use a more
          advanced rendering technique called deferred shading. This involves
          rendering a scene in 2 stages, first doing the geometry pass, and then
          doing a series of lighting passes, one for each light. This allowed
          the preview to render arbitrarily many point lights rapidly. Below is
          an example of a scene with several pointlights.
        </Typography>
        <br />
        <img
          className={classes.image}
          src={pointlightDemo}
          alt="Scene with many Pointlights"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 2. A screenshot of an model in the Editor with several pointlights
          placed around it
        </Typography>
        <br />
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> The Xperiel Editor now has a fully
            functional 3D scene editor, where users can preview and interact
            with the scene they're creating.
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Device SDK</Typography>
        <Typography variant="body1" color="textSecondary">
          The Device SDK is written in C++. There are platform dependent layers
          below to support the SDK in iOS and Android (written in Objective-C
          and Java, respectively). I worked on both the C++ core as well as the
          Objective-C iOS layer.
          <br />
          <br />
          Since I was in charge of providing 3D scene capabilities to the
          Xperiel platform, this meant that I had to support 3D in the runtime
          environment (in addition to the Editor). Thus, during the first 2/6
          months in 2019 that I worked at Xperiel, I built out a 3D rendering
          engine for the device using C++14 and OpenGL.
        </Typography>
        <br />
        <Typography variant="h6">Native Rendering</Typography>
        <Typography variant="body1" color="textSecondary">
          Much of the techniques I used for native rendering were also
          techniques that I used for web rendering. I used OpenGL to perform
          Blinn-Phong shading on 3D meshes, and I used deferred shading to
          enable rendering an arbitrary number of point lights fast. Again, most
          of the tools and techniques I used here was from the "Real-Time
          Rendering" book.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> The Xperiel Device SDK now has a fully
            functional 3D Scene rendering engine, providing full support for 3D
            scenes.
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h6">Adding Support to Metal 2</Typography>
        <Typography variant="body1" color="textSecondary">
          Starting from macOS 10.14, Apple decided to stop supporting OpenGL in
          favor of their own Graphics API, Metal. Metal, like other next
          generation graphics APIs (DirectX 12 and Vulkan), has much better
          performance than OpenGL. Despite this, many apps with 3D graphics only
          supported OpenGL since OpenGL was designed to be cross platform,
          whereas DirectX 12 and Metal weren't. The Device SDK was no exception.
          <br />
          <br />
          After this release, it became a high priority at Xperiel to support
          Metal in the SDK. Since I was the rendering expert at this point, I
          took on this task during the last 4 months of my part-time work in
          2019.
          <br />
          <br />
          This job was a big one. The first task was to isolate all the OpenGL
          API calls into a small handful of classes, and have those classes
          inherit a corresponding set of abstract graphics classes. I had to get
          a working understanding Metal, Buffers, Textures to understand how to
          construct the abstraction in a way that would work with Metal as well.
          After some time, I was finally able to create a sensible abstraction
          of OpenGL.
          <br />
          <br />
          The next task was to create a Metal implementation of be abstract
          graphics classes. One quirk here was that Metal is only an Objective-C
          API; it doesn't support C or C++. Thankfully, Apple supports a hybrid
          language of Objective-C and C++, known as Objective-C++, which is
          essentially C++ with the option of using Objective-C classes and
          calling methods on them. After carefully studying the Metal API, I was
          able to build out the Metal implementation of the graphics classes,
          and get it working with the same capability as the OpenGL
          implementation.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Results: </strong> The Xperiel Device SDK now supports both
            OpenGL and Metal, so it is no longer vulnerable to Apple's
            deprecation of OpenGL on iOS.
          </Typography>
        </GreenBox>
      </Grid>
    </Grid>
  );
};

export default Xperiel;
