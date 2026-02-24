import { motion } from "motion/react";
import { Mail, Phone, Instagram } from "lucide-react";
import logoImg from "figma:asset/cde5af9686200d63ce2f693190e3557ca19cdb54.png";
import appConceptImg from "figma:asset/16eacd16c5de1de35943d6ca4b69fa1fafb38f6e.png";

export function Footer() {
  return (
    <footer
      style={{
        background: "#050410",
        borderTop: "1px solid rgba(255, 31, 142, 0.15)",
        padding: "60px 24px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(255,31,142,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Logo and tagline */}
          <div style={{ maxWidth: "280px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <img
                src={logoImg}
                alt="Inistnt"
                style={{ width: "44px", height: "44px", borderRadius: "10px", objectFit: "cover" }}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#fff",
                }}
              >
                ini<span style={{ color: "#FFD700" }}>stnt</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Emergency home services in under 10 minutes.
              Plumbing. Electrical. Instantly.
            </p>

            {/* App concept image */}
            <div
              style={{
                marginTop: "20px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                maxWidth: "200px",
              }}
            >
              <img
                src={appConceptImg}
                alt="Inistnt App"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "1.5px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="mailto:inistant@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FF1F8E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
              >
                <Mail size={16} color="#FF1F8E" />
                inistant@gmail.com
              </a>
              <a
                href="tel:+918707274031"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FFD700")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
              >
                <Phone size={16} color="#FFD700" />
                +91 87072 74031
              </a>
              <a
                href="https://www.instagram.com/inistnt/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f472b6")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
              >
                <Instagram size={16} color="#f472b6" />
                @inistnt
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "1.5px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Services
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: "🔧", name: "Emergency Plumbing" },
                { icon: "⚡", name: "Electrical Repairs" },
                { icon: "🚿", name: "Bathroom Fixes" },
                { icon: "🏠", name: "Home Repairs" },
                { icon: "🍳", name: "Kitchen Services" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "1.5px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Coming To
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "🏙️ Bangalore",
                "🌆 Mumbai",
                "🏛️ Delhi",
                "🌉 Hyderabad",
                "🌊 Chennai",
              ].map((city, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © 2024 Inistnt. All rights reserved. Made with ⚡ in India.
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {["Privacy Policy", "Terms of Service"].map((link, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  padding: "0 8px",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.25)")}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
