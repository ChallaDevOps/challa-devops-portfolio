"use client";

import HeroButtons from "./hero/HeroButtons";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import HeroSocial from "./hero/HeroSocial";
import HeroStats from "./hero/HeroStats";
import HeroBackground from "./hero/HeroBackground";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <HeroBackground />

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <HeroContent />
          <HeroButtons />
          <HeroSocial />
          <HeroStats />
        </div>

        <HeroImage />
      </div>
    </section>
  );
}
