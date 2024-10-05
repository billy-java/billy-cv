import React, { useState } from "react";
import "./Kontakt.css";
import Title from "../title/Title";

import db from "../../service/Firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [valided, setValided] = useState(false);
  const [gesendet, setGesendet] = useState(false);
  const info = {
    ein: "Ihre Nachricht wurde erfolgreich gesendet !",
    zwei: "Ups, ein Fehler ist aufgetreten, Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal!",
  };

  /* import { collection, addDoc } from "firebase/firestore";
  await addDoc(collection(db, "new_Bewerbung"), {
    name: name,
    email: email,
    nachricht: nachricht,
  })
    .then(() => alert("Message envoyer"))
    .catch((err) => alert(err.message)); */

  const aktionSendung = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "New_Nachricht", "Von_" + name), {
      name: name,
      email: email,
      nachricht: nachricht,
    })
      .then(() => {
        setValided(true);
        setGesendet(true);
      })
      .catch(() => {
        setValided(true);
        setGesendet(false);
      });

    setName("");
    setEmail("");
    setNachricht("");

    setTimeout(() => {
      setValided(false);
    }, 10000);
  };

  return (
    <div className="container my-5" id="kontakt">
      <Title title="Kontakt" />
      <form className="form breite" onSubmit={aktionSendung}>
        <h2 className="text-center mb-3">Kontaktformular !</h2>
        <label id="name">Ihr Name</label>
        <input
          id="name"
          class="form-control"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label id="email">E-Mail Adresse</label>
        <input
          id="email"
          class="form-control"
          type="email"
          placeholder="E-Mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label id="text-area">Ihre Nachricht</label>
        <textarea
          id="text-area"
          placeholder="Schreiben Sie etwas..."
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
        />

        <button type="submit" className="form-control my_button">
          Senden
        </button>
        <div
          className={
            valided === true && gesendet === true
              ? "alert alert-info invisible_breite"
              : valided === true && gesendet === false
              ? "alert alert-danger invisible_breite"
              : "invisible"
          }
          role="alert"
        >
          {gesendet === true ? info.ein : info.zwei}
        </div>
      </form>
    </div>
  );
}
