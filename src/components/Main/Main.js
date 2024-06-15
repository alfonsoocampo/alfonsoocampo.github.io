import React from "react";
import Heading from "../Heading/Heading";
import AboutMe from '../AboutMe/AboutMe'
import ProjectContainer from "../ProjectContainer/ProjectContainer";
function Main() {
  return (
    <div>
      <h1>Container for all sections</h1>
      <button className="btn btn-primary">Click me</button>
      <Heading/>
      <AboutMe/>
      <ProjectContainer/>
    </div>
  );
}

export default Main;