import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [singer, setsinger] = useState("");
  var [singer2, setsinger2] = useState("");
  var [singer3, setsinger3] = useState("");

  function edmConcert() {
    setsinger("Justin Biber- (3/5) ");
    setsinger2("John Martin- (4/5)");
    setsinger3("Matthew Koma- (5/5)");
  }
  function classicalConcert() {
    setsinger("Lata Mangeshkar- (5/5)");
    setsinger2("Bhimsen Joshi- (3/5)");
    setsinger3("Ravi Shankar- (3.5/5)");
  }
  function rockConcert() {
    setsinger("Kid Rock- (4/5)");
    setsinger2("HARDY- (4.5/5)");
    setsinger3("Tech N9ne- (3/5)");
  }

  return (
    <div className="App">
      <h1
        style={{
          fontStyle: "italic",
          fontSize: "4rem",
          textDecoration: "underline",
          backgroundColor: "orange",
          borderRadius: "2rem"
        }}
      >
        Song's Guide
      </h1>
      <h2 style={{ backgroundColor: "white" }}>{singer}</h2>
      <h2 style={{ backgroundColor: "white" }}>{singer2}</h2>
      <h2 style={{ backgroundColor: "white" }}>{singer3}</h2>

      <button
        style={{
          margin: "0.5rem",
          backgroundColor: "gray",
          borderRadius: "0.5rem",
          padding: ".25rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => edmConcert()}
      >
        {" "}
        EDM
      </button>
      <button
        style={{
          margin: "0.5rem",
          backgroundColor: "gray",
          borderRadius: "0.5rem",
          padding: ".25rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => classicalConcert()}
      >
        Clasical
      </button>
      <button
        style={{
          margin: "0.5rem",
          backgroundColor: "gray",
          borderRadius: "0.5rem",
          padding: ".25rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => rockConcert()}
      >
        {" "}
        Rock
      </button>
    </div>
  );
}
