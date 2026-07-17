export default function HeroContent() {
  return (
    <>
      <p
        style={{
          color: "#38bdf8",
          fontSize: "20px",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Hello, I'm
      </p>

      <h1
        style={{
          fontSize: "64px",
          lineHeight: 1.1,
          fontWeight: 800,
          color: "white",
          marginBottom: "20px",
        }}
      >
        Naresh
        <br />
        Challa
      </h1>

      <h2
        style={{
          fontSize: "30px",
          color: "#cbd5e1",
          marginBottom: "25px",
        }}
      >
        DevOps Engineer
      </h2>

      <p
        style={{
          maxWidth: "620px",
          color: "#94a3b8",
          lineHeight: 1.8,
          fontSize: "18px",
        }}
      >
        Passionate DevOps Engineer specializing in Azure, Kubernetes,
        Terraform, CI/CD, Docker, GitHub Actions and Infrastructure
        Automation.
      </p>
    </>
  );
}
