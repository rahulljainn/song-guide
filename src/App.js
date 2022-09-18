import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [singer, setsinger] = useState("");
  var [album, setalbum] = useState("");
  var [dob, setdob] = useState("");
  var [place, setplace] = useState("");

  function edmConcert() {
    setsinger(" Singer- Justin Biber");
    setalbum("Album- Justice");
    setdob("DOB- 1 March 1994");
    setplace("Rating-3.5/5");
  }
  function classicalConcert() {
    setsinger(" Singer- Ravi Shankar");
    setalbum("Album- Music Of India - Three Classical Ragas On Sitar");
    setdob("DOB- 7 April 1920 ");
    setplace("Rating-4/5");
  }
  function rockConcert() {
    setsinger("  Singer- Kid Rock");
    setalbum("Album- Cocky");
    setdob("DOB- 17 January 1971");
    setplace("Rating-3/5");
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
      <h2 style={{ backgroundColor: "white" }}>{album}</h2>
      <h2 style={{ backgroundColor: "white" }}>{dob}</h2>
      <h2 style={{ backgroundColor: "white" }}>{place}</h2>

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
