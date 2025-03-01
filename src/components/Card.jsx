import React, { useState, useEffect } from "react";
import GithubLink from "./Github.jsx";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Insta } from "./Insta.jsx";

const Card = ({ value }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNext = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % value.length);
  };

  const handlePrev = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex === 0 ? value.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visibleIndex]);

  return (
    <>
      {value.map((elem, index) => (
        <div
          className="card"
          key={index}
          style={{
            display: index === visibleIndex ? "block" : "none",
          }}
        >
          <img src={elem.Image} alt={elem.name} />
          <h1>{elem.name}</h1>

          <div className="card-icons">
            <GithubLink url={elem.git} />
            <Insta jj={elem.insta} />
          </div>
          <div className="button2">
          <button onClick={() => window.open(elem.git, "_self")}>
            Add Friend
          </button> </div>
          <div className="arrow-icon" onClick={handleNext}>
            <IoMdArrowRoundForward />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
