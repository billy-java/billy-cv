import React from "react";
import "./Title.css";

export default function Title(props) {
  return (
    <div className="text-center">
      <h2 className="my_color">{props.title}</h2>
      <p className="my_p">
        Tel : +49 176 34 36 49 86
        <br />
        Email : billybabou007@gmail.com
      </p>
    </div>
  );
}
