import logo from "./logo.svg";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Layout from "./Components/Layout.js";
import "./App.css";

class App extends React.Component {
  state = {
    mainPage: "main",
  };
  changeMainPage = (props) => {
    return this.setState({
      mainPage: props,
    });
  };
  render() {
    return (
      <div className="app-background">
        <Router>
          <NavBar changeLayout={this.changeMainPage} />
          <Switch>
            <Route exact path="/" component={Layout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
