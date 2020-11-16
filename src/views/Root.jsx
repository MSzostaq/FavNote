import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Articles from "./Articles";
import Notes from "./Notes";
import Twitters from "./Twitters";

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
