import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Share2, Copy, Check, Users, Trophy, Zap } from "lucide-react";
import logoImg from "figma:asset/cde5af9686200d63ce2f693190e3557ca19cdb54.png";

function generateReferralCode(email: string): string {
  const base = email.split("@")[0].replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 4);
  const num = Math.floor(Math.random() * 9000) + 1000;
  return `INI-${base || "USER"}${num}`;
}

function generatePosition(): number {
  return Math.floor(Math.random() * 800) + 200;
}

function RankBadge({ rank }: { rank: string; label: string }) {
  const ranks: Record<string, { icon: string; color: string; bg: string }> = {
    Pioneer: { icon: "🥇", color: "#FFD700", bg: "rgba(255,215,0,0.15)" },
    Early: { icon: "🥈", color: "#C0C0C0", bg: "rgba(192,192,192,0.1)" },
    Member: { icon: "🥉", color: "#CD7F32", bg: "rgba(205,127,50,0.1)" },
  };
  const r = ranks[rank] || ranks.Member;
  return (
    <div
      style={{
        background: r.bg,
        border: `1px solid ${r.color}40`,
        borderRadius: "10px",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "13px",
        fontWeight: 600,
        color: r.color,
      }}
    >
      <span>{r.icon}</span>
      <span>{rank} Member</span>
    </div>
  );
}

export function WaitlistSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [position, setPosition] = useState(0);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      const code = generateReferralCode(email);
      const pos = generatePosition();
      setReferralCode(code);
      setPosition(pos);
      setSubmitted(true);
      setLoading(false);

      // Store in localStorage
      const existing = JSON.parse(localStorage.getItem("inistnt_waitlist") || "[]");
      existing.push({ email, city, code, position: pos, joinedAt: new Date().toISOString() });
      localStorage.setItem("inistnt_waitlist", JSON.stringify(existing));
    }, 1200);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `I just joined the Inistnt waitlist! Emergency home services in under 10 mins. Use my code ${referralCode} to skip the queue 🚀 inistnt.com`;

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  const shareInstagram = () => {
    window.open("https://www.instagram.com/inistnt/", "_blank");
  };

  return (
    <section
      id="waitlist"
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #080614 0%, #0D0B1E 50%, #1a0020 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,31,142,0.12) 0%, transparent 70%)",
          animation: "float-up 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)",
          animation: "float-up 8s ease-in-out infinite reverse",
        }}
      />

      {/* FOMO banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        style={{
          background: "linear-gradient(90deg, #FF1F8E, #FF6B6B, #FFD700, #FF1F8E)",
          backgroundSize: "300% 100%",
          animation: isInView ? "gradient-shift 3s ease infinite" : "none",
          borderRadius: "50px",
          padding: "8px 24px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          fontWeight: 800,
          color: "#fff",
          marginBottom: "32px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 4px 20px rgba(255,31,142,0.4)",
        }}
      >
        <span style={{ animation: "wave 0.6s ease-in-out infinite alternate" }}>🔥</span>
        <span>2,847 people are already ahead of you!</span>
        <span style={{ animation: "wave 0.6s ease-in-out infinite alternate" }}>🔥</span>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <img src={logoImg} alt="Inistnt" style={{ width: "50px", height: "50px", borderRadius: "12px" }} />
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "28px",
            fontWeight: 900,
            color: "#fff",
          }}
        >
          ini<span style={{ color: "#FFD700" }}>stnt</span>
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          maxWidth: "600px",
          lineHeight: 1.2,
          marginBottom: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Be the{" "}
        <span style={{ color: "#FF1F8E" }}>first</span> to get
        <br />
        <span style={{ color: "#FFD700" }}>10-minute help</span> at home.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.35 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          maxWidth: "460px",
          lineHeight: 1.7,
          marginBottom: "40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Join the exclusive waitlist. Refer friends to climb the ranks
        and unlock early access perks. 🚀
      </motion.p>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "clamp(28px, 5vw, 48px)",
          width: "100%",
          maxWidth: "480px",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 20px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,31,142,0.1)",
        }}
      >
        {!submitted ? (
          <>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              ⚡ Claim Your Spot
            </div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  color: "#fff",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#FF1F8E")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <input
                type="text"
                placeholder="Your city (e.g. Bangalore, Mumbai)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  color: "#fff",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#FF1F8E")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading
                    ? "rgba(255,31,142,0.5)"
                    : "linear-gradient(135deg, #FF1F8E, #d4006e)",
                  border: "none",
                  borderRadius: "12px",
                  padding: "16px",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 800,
                  cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: loading ? "none" : "0 6px 24px rgba(255,31,142,0.5)",
                  transition: "all 0.2s",
                  letterSpacing: "0.5px",
                }}
              >
                {loading ? "Securing your spot... ⚡" : "🚀 Join Waitlist — Free"}
              </button>
            </form>

            {/* Rank info */}
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", textAlign: "center", letterSpacing: "1px" }}>
                RANK SYSTEM
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                {[
                  { icon: "🥇", label: "Top 100 — Pioneer", color: "#FFD700" },
                  { icon: "🥈", label: "Top 500 — Early", color: "#C0C0C0" },
                  { icon: "🥉", label: "Others — Member", color: "#CD7F32" },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "11px",
                      color: r.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {r.icon} {r.label}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}
          >
            {/* Success header */}
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                boxShadow: "0 0 30px rgba(34,197,94,0.4)",
              }}
            >
              🎉
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                You're on the list!
              </div>
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {email}
              </div>
            </div>

            {/* Position */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255,31,142,0.15), rgba(255,215,0,0.1))",
                border: "1px solid rgba(255,31,142,0.3)",
                borderRadius: "16px",
                padding: "20px 28px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "4px",
                }}
              >
                Your position in queue
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "42px",
                  fontWeight: 900,
                  color: "#FF1F8E",
                  lineHeight: 1,
                }}
              >
                #{position}
              </div>
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "6px",
                }}
              >
                Refer friends to move up! 🚀
              </div>
            </div>

            {/* Rank badge */}
            <RankBadge
              rank={position <= 100 ? "Pioneer" : position <= 500 ? "Early" : "Member"}
              label=""
            />

            {/* Referral code */}
            <div style={{ width: "100%" }}>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                YOUR REFERRAL CODE
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255,215,0,0.08)",
                  border: "1px solid rgba(255,215,0,0.3)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <Zap size={18} color="#FFD700" />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#FFD700",
                    flex: 1,
                    letterSpacing: "2px",
                  }}
                >
                  {referralCode}
                </span>
                <button
                  onClick={copyCode}
                  style={{
                    background: "rgba(255,215,0,0.15)",
                    border: "1px solid rgba(255,215,0,0.3)",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    cursor: "pointer",
                    color: "#FFD700",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Share buttons */}
            <div style={{ width: "100%" }}>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                SHARE & CLIMB THE RANKS
              </div>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={shareWhatsApp}
                  style={{
                    background: "#25D366",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                >
                  💬 WhatsApp
                </button>
                <button
                  onClick={shareTwitter}
                  style={{
                    background: "#1DA1F2",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                >
                  🐦 Twitter/X
                </button>
                <button
                  onClick={shareInstagram}
                  style={{
                    background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                >
                  📸 Instagram
                </button>
              </div>
            </div>

            {/* Each referral = move up */}
            <div
              style={{
                background: "rgba(255,31,142,0.08)",
                border: "1px solid rgba(255,31,142,0.2)",
                borderRadius: "12px",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Users size={18} color="#FF1F8E" />
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Each friend who joins with your code{" "}
                <strong style={{ color: "#FF1F8E" }}>moves you up 10 spots!</strong>
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Social proof counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.7 }}
        style={{
          marginTop: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "14px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex" }}>
          {["👤", "👤", "👤"].map((u, i) => (
            <div
              key={i}
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: `hsl(${280 + i * 30},70%,60%)`,
                border: "2px solid #0D0B1E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                marginLeft: i > 0 ? "-8px" : "0",
                zIndex: 3 - i,
                position: "relative",
              }}
            >
              {u}
            </div>
          ))}
        </div>
        <span>
          <strong style={{ color: "#fff" }}>2,847+</strong> people already on the waitlist
        </span>
      </motion.div>
    </section>
  );
}
