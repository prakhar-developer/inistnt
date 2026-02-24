import { motion, useInView } from "motion/react";
import { useRef } from "react";
import logoImg from "figma:asset/cde5af9686200d63ce2f693190e3557ca19cdb54.png";

export function ShiftScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px",
      }}
    >
      {/* Lightning bolts background */}
      {isInView && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${10 + i * 15}%`,
                left: `${5 + i * 18}%`,
                fontSize: `${20 + i * 8}px`,
                opacity: 0,
                animation: `lightning ${1.5 + i * 0.4}s ease-in-out infinite ${i * 0.3}s`,
                color: "#FFD700",
                userSelect: "none",
              }}
            >
              ⚡
            </div>
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={`r${i}`}
              style={{
                position: "absolute",
                top: `${20 + i * 20}%`,
                right: `${8 + i * 15}%`,
                fontSize: `${24 + i * 6}px`,
                opacity: 0,
                animation: `lightning ${1.8 + i * 0.3}s ease-in-out infinite ${i * 0.5 + 0.2}s`,
                color: "#FF1F8E",
                userSelect: "none",
              }}
            >
              ⚡
            </div>
          ))}
        </>
      )}

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(255,31,142,0.15) 0%, rgba(255,215,0,0.05) 40%, transparent 70%)",
          animation: isInView ? "pulse-ring 2s ease-out infinite" : "none",
        }}
      />

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: "rgba(255, 215, 0, 0.1)",
          border: "1px solid rgba(255, 215, 0, 0.4)",
          borderRadius: "50px",
          padding: "6px 18px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "13px",
          color: "#FFD700",
          marginBottom: "40px",
          letterSpacing: "1px",
        }}
      >
        SCENE 4 • THE SHIFT MOMENT ⚡
      </motion.div>

      {/* "But then..." */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(16px, 2.5vw, 22px)",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "24px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        But then...
      </motion.p>

      {/* Lightning strike line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          width: "min(500px, 90vw)",
          height: "3px",
          background: "linear-gradient(90deg, transparent, #FFD700, #FF1F8E, transparent)",
          marginBottom: "32px",
          transformOrigin: "left",
          boxShadow: "0 0 20px rgba(255,215,0,0.6)",
        }}
      />

      {/* Logo reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, rotate: 0 }
            : { opacity: 0, scale: 0.3, rotate: -10 }
        }
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
        style={{
          position: "relative",
          marginBottom: "40px",
        }}
      >
        {/* Glow rings */}
        <div
          style={{
            position: "absolute",
            inset: "-20px",
            borderRadius: "50%",
            background: "transparent",
            border: "2px solid rgba(255,31,142,0.3)",
            animation: isInView ? "ping-slow 2s ease-out infinite" : "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "-40px",
            borderRadius: "50%",
            background: "transparent",
            border: "2px solid rgba(255,215,0,0.15)",
            animation: isInView ? "ping-slow 2s ease-out infinite 0.5s" : "none",
          }}
        />
        <img
          src={logoImg}
          alt="Inistnt Logo"
          style={{
            width: "clamp(120px, 25vw, 200px)",
            height: "clamp(120px, 25vw, 200px)",
            borderRadius: "32px",
            objectFit: "cover",
            boxShadow: "0 0 60px rgba(255,31,142,0.6), 0 0 120px rgba(255,215,0,0.3)",
          }}
        />
      </motion.div>

      {/* Main text */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(32px, 7vw, 72px)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: "20px",
        }}
      >
        Meet{" "}
        <span
          style={{
            color: "#FF1F8E",
            animation: isInView ? "neon-glow 2s ease-in-out infinite" : "none",
          }}
        >
          inistnt.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(16px, 2.5vw, 22px)",
          color: "rgba(255,255,255,0.7)",
          textAlign: "center",
          maxWidth: "520px",
          lineHeight: 1.7,
          marginBottom: "48px",
        }}
      >
        Emergency home services in{" "}
        <span
          style={{
            color: "#FFD700",
            fontWeight: 800,
          }}
        >
          under 10 minutes.
        </span>{" "}
        No calls. No waiting. Just instant help.
      </motion.p>

      {/* Feature pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { icon: "🔧", text: "Plumbing" },
          { icon: "⚡", text: "Electrical" },
          { icon: "🚿", text: "Bathroom" },
          { icon: "🏠", text: "Home Repairs" },
        ].map((pill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.3 + i * 0.1, type: "spring", bounce: 0.5 }}
            style={{
              background: "rgba(255, 31, 142, 0.1)",
              border: "1px solid rgba(255, 31, 142, 0.3)",
              borderRadius: "50px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            <span>{pill.icon}</span>
            <span>{pill.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
