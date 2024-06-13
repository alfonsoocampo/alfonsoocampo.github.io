import React from "react";
import Heading from "../Heading/Heading";
import AboutMe from '../AboutMe/AboutMe'
import Projects from "../projects/projects";
function Main() {
  return (
    <div>
      <h1>Container for all sections</h1>
      <Heading/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default Main;