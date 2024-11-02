import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Medical Device Engineer & Innovator",
          "Embedded Systems & Firmware Specialist",
          "Healthcare Product Entrepreneur",
          "Process Automation Enthusiast",
          "CAD & Prototyping Expert",  
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
        delay: 50,
      }}
    />
  );
}

export default Type;
