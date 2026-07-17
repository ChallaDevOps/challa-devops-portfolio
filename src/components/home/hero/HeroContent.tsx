"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroContent() {
  return (
    <>
      <p
        style={{
          color: "#38bdf8",
          fontSize: "22px",
          marginBottom: "12px",
          fontWeight: 600,
        }}
      >
        👋 Hello, I'm
      </p>

      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          lineHeight: "1.1",
          marginBottom: "20px",
        }}
      >
        Naresh Challa
      </h1>

      <div
        style={{
          fontSize: "30px",
          color: "#94a3b8",
          minHeight: "45px",
        }}
      >
        <TypeAnimation
          sequence={[
            "DevOps Engineer",
            2000,
            "Cloud Engineer",
            2000,
            "Azure Administrator",
            2000,
            "Kubernetes Enthusiast",
            2000,
          ]}
          speed={45}
          repeat={Infinity}
        />
      </div>

      <p
        style={{
          marginTop: "30px",
          maxWidth: "650px",
          color: "#cbd5e1",
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        Passionate DevOps Engineer specializing in Azure, Kubernetes,
        Docker, Terraform, GitHub Actions, Helm, Linux and
        Infrastructure Automation.
      </p>
    </>
  );
}
