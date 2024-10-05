import React from "react";
import Title from "../title/Title";
import "./Lebenslauf.css";
import { Data_Lebenslauf } from "../../asserts/Data_Lebenslauf";

export default function Lebenslauf() {
  return (
    <div className="container my-5" id="Lebenslauf">
      <Title title="Lebenslauf" />
      <div class="qualification_section">
        <div
          class="qualification_content qualification_active"
          data-content
          id="education"
        >
          <div class="container my-5">
            <div class="row">
              <div class="col-1"></div>

              <div class="col-10">
                {Data_Lebenslauf.map((item, i) => {
                  if (i % 2 === 0) {
                    return (
                      <div class="qualification_data">
                        <div className="recht">
                          <h6>{item.Niveau}</h6>
                          <span class="qualification_subtitle">
                            {item.Stadt} - {item.Land}
                          </span>
                          <div className="qualification_group date_icon_recht">
                            <div className="qualification_calendar">
                              <i class="bi bi-calendar3"></i>
                            </div>
                            <p>
                              {item.Datum_Start} bis {item.Datum_End}
                            </p>
                          </div>
                        </div>
                        <div>
                          <span class="qualification_rounder"></span>
                          <span class="qualification_line"></span>
                        </div>
                      </div>
                    );
                  } else if (i % 2 !== 0) {
                    return (
                      <div class="qualification_data">
                        <div></div>
                        <div>
                          <span class="qualification_rounder"></span>
                          <span
                            class={
                              i !== Data_Lebenslauf.length - 1
                                ? "qualification_line"
                                : ""
                            }
                          ></span>
                        </div>

                        <div className="links">
                          <h6>{item.Niveau}</h6>
                          <span class="qualification_subtitle">
                            {item.Stadt} - {item.Land}
                          </span>
                          <div className="qualification_group">
                            <div className="qualification_calendar">
                              <i class="bi bi-calendar3"></i>
                            </div>
                            <p>
                              {item.Datum_Start} bis {item.Datum_End}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
