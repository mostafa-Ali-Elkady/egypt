import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import ContactUs from "./components/pages/ContactUs";
import Details from "./components/pages/Details";
import PageNotFound from "./components/pages/PageNotFound";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/details" component={Details} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
