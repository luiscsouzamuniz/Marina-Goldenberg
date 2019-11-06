import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MenuHeader } from "./components/MenuHeader";
import { Footer } from "./components/Footer";
import Home from "./screens/Home";
import Organization from "./screens/Organization";
import Services from "./screens/Services";
import Contact from "./screens/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <MenuHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/organization" component={Organization} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
