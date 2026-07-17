export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "30px",
        marginTop: "60px",
      }}
    >
      © {new Date().getFullYear()} Naresh Challa | DevOps Engineer
    </footer>
  );
}
