import React from "react";

import "./App.css";
import { Container } from "@material-ui/core";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import { Route, Switch } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { CollectDay } from "./pages/CollectDay/CollectDay";
import About from "./components/About/About";

function App() {
  return (
    <Container>
      <MenuHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/compile">
          <CollectDay />
        </Route>
        <Route path="/info">
          <About />
        </Route>
        <Route>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
