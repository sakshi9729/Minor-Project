import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h3>FOOD-O-MANIA</h3>
        A constructive and inclusive social food network for food bloggers.
        Life is combination of magic and good food
        <br />
        Made with love and{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        . Food-O-Mania Community © 2022.
      </Container>
    </footer>
  );
}
