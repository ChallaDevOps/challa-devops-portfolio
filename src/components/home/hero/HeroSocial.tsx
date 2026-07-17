"use client";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function HeroSocial() {
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        marginTop: "35px",
        fontSize: "30px",
        color: "#38bdf8",
      }}
    >
      <FaGithub />

      <FaLinkedin />

      <MdEmail />
    </div>
  );
}
