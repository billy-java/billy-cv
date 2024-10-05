import React from "react";
import BasicExample from "./progessBar/Progressbar";
import "./Kenntnisse.css";
import Title from "../title/Title";
import {
  Data_Kenntnisse_FrontEnd,
  Data_Kenntnisse_BackEnd,
  Data_Kenntnisse_Design,
  Data_Kenntnisse_Sonstiges,
} from "../../asserts/Data_Kenntnisse";

export default function Kenntnisse() {
  return (
    <div className="container my-5" id="kenntnisse">
      <Title title="Kenntnisse" />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 ">
        <div className="col">
          <div className="my-5 mx-3">
            <div>
              <h5>FrontEnd</h5>
              <p>(Mehr als 2 Jahre)</p>
            </div>

            {Data_Kenntnisse_FrontEnd.map((item) => {
              return (
                <div className="mx-3 my-2">
                  <div>
                    <div className="gleiche_Zeile_prozent">
                      <div>{item.Kenntnis}</div>
                      <div>{item.prozent}</div>
                    </div>

                    <BasicExample value={item.prozent} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-5 mx-3">
            <div>
              <h5>Design</h5>
              <p>(Mehr als 2 Jahre)</p>
            </div>

            {Data_Kenntnisse_Design.map((item) => {
              return (
                <div className="mx-3 my-2">
                  <div>
                    <div className="gleiche_Zeile_prozent">
                      <div>{item.Kenntnis}</div>
                      <div>{item.prozent}</div>
                    </div>

                    <BasicExample value={item.prozent} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col">
          <div className="my-5 mx-3">
            <div>
              <h5>BackEnd</h5>
              <p>(Mehr als 2 Jahre)</p>
            </div>

            {Data_Kenntnisse_BackEnd.map((item) => {
              return (
                <div className="mx-3 my-2">
                  <div>
                    <div className="gleiche_Zeile_prozent">
                      <div>{item.Kenntnis}</div>
                      <div>{item.prozent}</div>
                    </div>

                    <BasicExample value={item.prozent} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-5 mx-3">
            <div>
              <h5>Sonstiges</h5>
              <p>(Mehr als 2 Jahre)</p>
            </div>

            {Data_Kenntnisse_Sonstiges.map((item) => {
              return (
                <div className="mx-3 my-2">
                  <div>
                    <div className="gleiche_Zeile_prozent">
                      <div>{item.Kenntnis}</div>
                      <div>{item.prozent}</div>
                    </div>

                    <BasicExample value={item.prozent} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
