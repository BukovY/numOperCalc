import React from "react";

import "./App.css";
import { Container } from "@material-ui/core";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import { Route, Switch } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Container>
      <MenuHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/compile">
          <h1>compile to week</h1>
        </Route>
        <Route path="/info">
          <h1>about</h1>
        </Route>
        <Route>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
