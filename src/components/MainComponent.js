import React from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Project from "./ProjectComponent";
import Skill from "./SkillComponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/skills" component={Skill} />

        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default Main;
