export default function Hero() {
  return (
    <section id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0F172A",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#38BDF8",
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          👋 Hello, I'm
        </p>

        <h1
          style={{
            fontSize: "70px",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          Naresh Challa
        </h1>

        <h2
          style={{
            fontSize: "32px",
            color: "#CBD5E1",
            marginBottom: "30px",
          }}
        >
          DevOps Engineer | Cloud Engineer | SRE
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#94A3B8",
            lineHeight: "2",
          }}
        >
          Azure • Kubernetes • Docker • Terraform • Helm •
          GitHub Actions • Jenkins • Linux • Prometheus •
          Grafana
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "15px 35px",
              background: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Download Resume
          </button>

          <button
            style={{
              padding: "15px 35px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
