import React from "react";
import { FaGithub } from "react-icons/fa"; 

const GithubLink = ({ url }) => {
  return (
    <a
      href= {url}
      target="_self"
      rel="noopener noreferrer"
      style={{ fontSize: "2rem", color: "black", textDecoration: "none" }}
    >
      <FaGithub />
    </a>
  );
};

export default GithubLink;
