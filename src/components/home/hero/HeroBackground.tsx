"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right,#0ea5e933,transparent 35%), radial-gradient(circle at bottom left,#2563eb22,transparent 40%), #020617",
          zIndex: 0,
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.25,
          zIndex: 0,
        }}
      />
    </>
  );
}
