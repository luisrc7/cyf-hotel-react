import React from "react";

const Footer = props => (
  <ul>
    {props.elements.map((element, index) => {
      return <li key={index}>{element}</li>;
    })}
  </ul>
);

export default Footer;
