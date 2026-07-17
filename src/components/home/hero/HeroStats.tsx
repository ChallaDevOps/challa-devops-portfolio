"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 50,
    suffix: "+",
    label: "CI/CD Pipelines",
  },
  {
    value: 20,
    suffix: "+",
    label: "Kubernetes Deployments",
  },
  {
    value: 100,
    suffix: "%",
    label: "Passion",
  },
];

export default function HeroStats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginTop: "60px",
      }}
    >
      {stats.map((item) => (
        <div
          key={item.label}
          style={{
            background: "#111827",
            border: "1px solid #1e293b",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#38bdf8",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            <CountUp end={item.value} duration={2} />
            {item.suffix}
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "10px",
            }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
