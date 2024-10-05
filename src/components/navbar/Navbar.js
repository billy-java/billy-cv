import React from 'react';
import './navbar.css';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="/"
      id="navbarNav"
      className="navbar navbar-expand-lg bg-dark fixed-top"
      data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/billy-cv/">
          BILLY MB
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  espace_droite" id="navbarNav">
          <ul class="navbar-nav">
            <Nav.Item class="nav-item">
              <Nav.Link class="nav-link" aria-current="page" href="#about">
                Über mich
              </Nav.Link>
            </Nav.Item>
            <Nav.Item class="nav-item">
              <Nav.Link
                class="nav-link"
                aria-current="page"
                href="#beruflicheLaufbahn">
                Berufliche Laufbahn
              </Nav.Link>
            </Nav.Item>
            <Nav.Item class="nav-item">
              <Nav.Link class="nav-link" href="#kenntnisse">
                Kenntnisse
              </Nav.Link>
            </Nav.Item>
            <Nav.Item class="nav-item">
              <Nav.Link class="nav-link" href="#Lebenslauf">
                Lebenslauf
              </Nav.Link>
            </Nav.Item>
            <Nav.Item class="nav-item">
              <Nav.Link class="nav-link" href="#portfolio">
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item class="nav-item">
              <Nav.Link class="nav-link" href="#kontakt">
                Kontakt
              </Nav.Link>
            </Nav.Item>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
