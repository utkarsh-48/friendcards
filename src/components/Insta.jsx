import React from 'react'
import { BsInstagram } from "react-icons/bs";
export const Insta = ({ jj }) => {
  return (
    <div>
      {jj ? (
        <a
          href={jj}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "2rem", color: "black", textDecoration: "none" }}
        >
          <BsInstagram />
        </a>
      ) : (
        <BsInstagram style={{ color: "gray", opacity: 0.5 }} /> 
      )}
    </div>
  );
};
