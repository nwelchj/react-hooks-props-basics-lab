import { parseWithOptions } from "date-fns/fp";
import React from "react";
import links from "./Links";

function About(props) {
 
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {links(props)}
    </div>
  );
}

export default About;

