// Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#0e0e0e",
        color: "#0ef",
        fontSize: "14px",
      }}
    >
      © {currentYear} BaskarSelvanR & LakkshmiR — All rights reserved.
    </footer>
  );
};

export default Footer;
