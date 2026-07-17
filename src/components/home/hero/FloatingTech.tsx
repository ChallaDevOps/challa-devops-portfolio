"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "Azure", top: "10%", left: "5%" },
  { name: "Docker", top: "0%", right: "15%" },
  { name: "Terraform", top: "35%", right: "0%" },
  { name: "Kubernetes", bottom: "15%", left: "0%" },
  { name: "Linux", bottom: "0%", right: "20%" },
  { name: "GitHub", top: "65%", left: "12%" },
];

export default function FloatingTech() {
  return (
    <>
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
          }}
          style={{
            position: "absolute",
            ...tech,
            background: "rgba(15,23,42,0.85)",
            border: "1px solid rgba(56,189,248,0.35)",
            color: "#38bdf8",
            padding: "10px 16px",
            borderRadius: "999px",
            backdropFilter: "blur(8px)",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 0 20px rgba(56,189,248,0.15)",
          }}
        >
          {tech.name}
        </motion.div>
      ))}
    </>
  );
}
