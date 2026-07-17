export default function Navbar() {
  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Blogs",
    "Contact",
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(15,23,42,0.90)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
        }}
      >
        <div
          style={{
            color: "#38BDF8",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          Naresh.
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
              }}
            >
              {item}
            </a>
          ))}

          <button
            style={{
              background: "#2563EB",
              color: "white",
              border: "none",
              padding: "12px 22px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}
