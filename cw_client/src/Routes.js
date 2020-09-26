import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/Login/LoginForm";
import RegistrationForm from "./pages/Registration/RegistrationForm";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/register">
        <RegistrationForm />
      </Route>
    </Switch>
  );
}