import React from "react";
import "./About.css";
import Title from "../title/Title";

export default function About() {
  return (
    <div className="container my-5" id="about">
      <Title title="Über mich" />

      <div className="container">
        <p>
          Geboren in Kamerun, habe ich nach meinem Abitur zunächst in der IT
          gearbeitet, wo ich Computerwartung und -reparatur durchführte. Später
          zog es mich nach Deutschland, wo ich mein Interesse für das
          Programmieren entdeckte. Ich eignete mir Designfähigkeiten an und
          begann, Webseiten mit WordPress zu erstellen, insbesondere für
          afrikanische Unternehmen.
        </p>
        <p>
          Während meines Studiums an der THM vertiefte ich meine
          Programmierkenntnisse und arbeite kontinuierlich daran, mich zu
          verbessern.
        </p>
        <p>
          Trotz meiner anstrengenden aktuellen Arbeit strebe ich danach, meine
          Fähigkeiten weiter zu entwickeln, um meine Chancen auf eine
          Werkstudentenstelle zu erhöhen.
        </p>
      </div>
    </div>
  );
}
