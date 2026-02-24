import { useEffect, useState } from "react";
import { motion } from "motion/react";
import logoImg from "figma:asset/cde5af9686200d63ce2f693190e3557ca19cdb54.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(13, 11, 30, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 31, 142, 0.2)" : "none",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logoImg}
          alt="Inistnt"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
          }}
        >
          ini<span style={{ color: "#FFD700" }}>stnt</span>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a
          href="https://www.instagram.com/inistnt/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#FF1F8E")}
          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
        >
          @inistnt
        </a>
        <button
          onClick={scrollToWaitlist}
          style={{
            background: "linear-gradient(135deg, #FF1F8E, #FF6B6B)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "10px 22px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(255, 31, 142, 0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
            (e.target as HTMLButtonElement).style.boxShadow = "0 6px 25px rgba(255, 31, 142, 0.6)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
            (e.target as HTMLButtonElement).style.boxShadow = "0 4px 15px rgba(255, 31, 142, 0.4)";
          }}
        >
          ⚡ Join Waitlist
        </button>
      </div>
    </motion.nav>
  );
}
