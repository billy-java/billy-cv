import React from "react";
import Title from "../title/Title";
import { Data_JS } from "../../asserts/Data_JS";
import { Data_React } from "../../asserts/Data_React";
import { Data_Angular } from "../../asserts/Data_Angular";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="container my-5" id="portfolio">
      <Title title="Portfolio" />
      <div className="my-5">
        <h5 className="mb-1">React</h5>
        <p>Einige Projekte</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
          {Data_React.map((item, i) => {
            return (
              <div className="col">
                <div className="card my-3 text-center">
                  <img
                    src={item.Img}
                    className="card-img-top"
                    alt={item.Name}
                  />
                  <h6 className="card-header">{item.Name}</h6>
                  <div className="card-body">
                    <p className="card-text links">{item.Description}</p>
                    <p className="card-text">(Auf github gehostet.)</p>
                    <a href={item.url} className="btn btn-primary perso">
                      Ansehen
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-5">
        <h5 className="mb-1">Angular</h5>
        <p>Einige Projekte</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
          {Data_Angular.map((item, i) => {
            return (
              <div className="col">
                <div className="card my-3 text-center">
                  <img
                    src={item.Img}
                    className="card-img-top"
                    alt={item.Name}
                  />
                  <h6 className="card-header">{item.Name}</h6>
                  <div className="card-body">
                    <p
                      className={
                        i !== 1
                          ? "card-text links"
                          : "card-text  text-danger links person_p"
                      }
                    >
                      {item.Description1}
                    </p>
                    <a
                      href="https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/"
                      className={
                        i !== 1
                          ? "verstecken"
                          : "btn btn-danger perso_danger mb-3"
                      }
                    >
                      Hier klicken !
                    </a>
                    <p className="card-text links">{item.Description2}</p>
                    <p className="card-text links">{item.Description3}</p>

                    <p className="card-text">(Auf github gehostet.)</p>

                    <a href={item.url} className="btn btn-primary perso">
                      Ansehen
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-5">
        <h5 className="mb-1">JavaScript</h5>
        <p>Einige Projekte</p>
        <p>
          Entschuldigung - Die Apps sind auf Franzosisch programmiert, aber Sie
          können die Seite mit Ihrem Navigator auf Deutsch oder Englisch
          übersetzen !
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {Data_JS.map((item, i) => {
            return (
              <div className="col">
                <div className="card my-3 text-center">
                  <h6 className="card-header">{item.Name}</h6>
                  <div className="card-body">
                    <p className="card-text">(Auf github gehostet.)</p>
                    <a href={item.url} className="btn btn-primary perso">
                      Ansehen
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
