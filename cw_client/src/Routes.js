import React from "react";
import { Route, Switch } from "react-router-dom";
import Blog from "./Blog/Blog";
import Home from "./Home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
    </Switch>
  );
}