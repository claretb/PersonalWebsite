import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "PhD Candidate in Computer Science",
          "Robotics and Artificial Intelligence MSc",
          "Software Engineer",
          "Blog Writer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 25,
      }}
    />
  );
}

export default Type;
