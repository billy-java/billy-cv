import React from "react";
import "./Home.css";
import billy_img from "../asserts/imgs/Billy_Babou_2019_carré_500X500px.png";
import Kenntnisse from "../components/Kenntnisse/Kenntnisse";
import About from "../components/about/About";
import BeruflicheLaufbahn from "../components/berufliche Laufbahn/BeruflicheLaufbahn";
import Lebenslauf from "../components/lebenslauf/Lebenslauf";
import Portfolio from "../components/portfolio/Portfolio";
import Kontakt from "../components/kontakt/Kontakt";
import cv from "../asserts/pdf/Billy_Babou_Lebenslauf_2023.pdf";

export default function Home() {
  return (
    <div>
      <div className="container my-5 text-center">
        <div className="my-5">
          <img
            class="css-shadow img-fluid"
            src={billy_img}
            alt="Ein Bild von mir"
          />
        </div>
        <div className="col">
          <h2 className="mb-3 blau">Hallo, ich bin Billy</h2>
          <h5 className="mb-2">
            Ich fühle mich im Frontend wohler, und habe auch
            Backend-Grundkenntnisse.
          </h5>
          <p className="my_p">
            Ich studiere Informatik an der THM (Technische Hochschule
            Mittelhessen) in Gießen.
          </p>
        </div>
        <a
          type="download"
          href={cv}
          class="btn btn-primary btn-md btn_blau  mb-5"
        >
          CV herunterladen !
        </a>
      </div>

      <About />
      <BeruflicheLaufbahn />
      <Kenntnisse />
      <Lebenslauf />
      <Portfolio />
      <Kontakt />
    </div>
  );
}
