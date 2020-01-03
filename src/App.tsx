import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
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

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
