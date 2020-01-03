import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  Box,
  makeStyles
} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Content from "components/Content";
import { red, teal, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[400]
    },
    secondary: {
      main: teal[300]
    },
    text: {
      primary: grey[800],
      secondary: grey[600]
    }
  }
});

// These styles, along with the boxes they are applied to, are used to keep the footer at the bottom
// https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/
const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    minHeight: "100vh"
  },
  contentContainer: {
    paddingBottom: 100
  },
  footer: {
    bottom: 0,
    height: 100,
    position: "absolute",
    width: "100%"
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Box className={classes.pageContainer}>
          <Header />
          <Box className={classes.contentContainer}>
            <Content />
          </Box>
          <Box className={classes.footer}>
            <Footer />
          </Box>
        </Box>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
