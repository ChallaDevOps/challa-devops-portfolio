"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav
      style={{
        height: "80px",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
      }}
    >
      <Logo />

      <NavLinks />
    </nav>
  );
}
