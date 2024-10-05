import React from "react";
import "./BeruflicheLaufbahn.css";
import Title from "../title/Title";

export default function BeruflicheLaufbahn() {
  return (
    <div className="container my-5" id="beruflicheLaufbahn">
      <Title title="Berufliche Laufbahn" />

      <div className="container">
        <h5 className="my_color">Webentwickler bei INVIKOM</h5>
        <p>
          ich arbeite seit 06/2023 bei{" "}
          <a href="https://www.invikom.de">INVIKOM</a> als Webentwickler. Es
          händelt sich um einen Minijob. Wir entwickeln die Webseiten von
          Behörden, Fitnessstudios, Händlern...
        </p>
      </div>
    </div>
  );
}
