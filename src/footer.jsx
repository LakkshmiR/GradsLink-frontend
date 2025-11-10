// Footer.jsx
import React from "react";
import "./footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-style">
      © {currentYear} BaskarSelvanR & LakkshmiR — All rights reserved.
    </footer>
  );
};

export default Footer;
