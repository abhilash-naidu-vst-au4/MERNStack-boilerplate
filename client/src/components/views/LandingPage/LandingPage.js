import React from "react";
import { FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
      </div>
      <div style={{ float: "center" }}>
        Thanks For Using This Boiler Plate... Abhilash Naidu
      </div>
    </>
  );
}

export default LandingPage;
