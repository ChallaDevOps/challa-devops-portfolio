"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingTech from "./FloatingTech";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "450px",
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FloatingTech />

        <div
          style={{
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #38bdf8",
            boxShadow: "0 0 40px rgba(56,189,248,0.35)",
            background: "#0f172a",
            position: "relative",
          }}
        >
          <Image
            src="/images/profile.png"
            alt="Naresh Challa"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
