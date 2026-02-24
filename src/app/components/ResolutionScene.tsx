import { motion, useInView } from "motion/react";
import { useRef } from "react";
import teamPhoto from "figma:asset/209718b0c12cbbd793b308938247eb5cac4e6a29.png";

function Confetti({ x, color, delay }: { x: string; color: string; delay: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "-20px",
        left: x,
        width: "10px",
        height: "10px",
        background: color,
        borderRadius: "2px",
        animation: `confetti-fall ${1.5 + delay}s ease-in forwards ${delay}s`,
      }}
    />
  );
}

export function ResolutionScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const confettiItems = [
    { x: "10%", color: "#FF1F8E", delay: 0 },
    { x: "20%", color: "#FFD700", delay: 0.2 },
    { x: "30%", color: "#4ade80", delay: 0.4 },
    { x: "40%", color: "#60a5fa", delay: 0.1 },
    { x: "50%", color: "#FF1F8E", delay: 0.3 },
    { x: "60%", color: "#FFD700", delay: 0.5 },
    { x: "70%", color: "#f472b6", delay: 0.2 },
    { x: "80%", color: "#4ade80", delay: 0.4 },
    { x: "90%", color: "#FF1F8E", delay: 0.1 },
    { x: "15%", color: "#FFD700", delay: 0.6 },
    { x: "55%", color: "#60a5fa", delay: 0.3 },
    { x: "75%", color: "#FF1F8E", delay: 0.5 },
  ];

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #021a0a 0%, #041f0e 40%, #071a12 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti */}
      {isInView && confettiItems.map((c, i) => <Confetti key={i} {...c} />)}

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(74,222,128,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: "rgba(74, 222, 128, 0.1)",
          border: "1px solid rgba(74, 222, 128, 0.4)",
          borderRadius: "50px",
          padding: "6px 18px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "13px",
          color: "#4ade80",
          marginBottom: "24px",
          letterSpacing: "1px",
          position: "relative",
          zIndex: 1,
        }}
      >
        SCENE 6 • PROBLEM SOLVED 🎉
      </motion.div>

      {/* Big check */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -30 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.1 }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
          marginBottom: "28px",
          boxShadow: "0 0 40px rgba(34,197,94,0.5), 0 0 80px rgba(34,197,94,0.2)",
          position: "relative",
          zIndex: 1,
        }}
      >
        ✅
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(32px, 6vw, 62px)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Fixed in{" "}
        <span
          style={{
            color: "#4ade80",
            textShadow: "0 0 20px rgba(74,222,128,0.6)",
          }}
        >
          8 minutes.
        </span>
        <br />
        <span style={{ color: "#FFD700" }}>Crisis averted. 🎉</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(15px, 2.5vw, 20px)",
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          maxWidth: "500px",
          lineHeight: 1.7,
          marginBottom: "56px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Your pipe is fixed. Your floor is dry.
        <br />
        And you didn't miss a single episode of your show. 📺
      </motion.p>

      {/* Team photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 40 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        style={{
          position: "relative",
          marginBottom: "48px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            border: "3px solid rgba(255, 31, 142, 0.4)",
            boxShadow:
              "0 0 40px rgba(255,31,142,0.2), 0 20px 60px rgba(0,0,0,0.5)",
            maxWidth: "500px",
          }}
        >
          <img
            src={teamPhoto}
            alt="Inistnt Team"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.9, type: "spring", bounce: 0.6 }}
          style={{
            position: "absolute",
            bottom: "-16px",
            right: "20px",
            background: "linear-gradient(135deg, #FF1F8E, #d4006e)",
            borderRadius: "50px",
            padding: "8px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#fff",
            boxShadow: "0 6px 20px rgba(255,31,142,0.5)",
          }}
        >
          <span>⚡</span>
          <span>Your Inistnt Heroes</span>
        </motion.div>
      </motion.div>

      {/* Customer testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          marginTop: "24px",
        }}
      >
        {[
          {
            quote: "Saved me from a nightmare at 11pm. Thank you Inistnt!",
            name: "Priya M., Bangalore",
            stars: "⭐⭐⭐⭐⭐",
          },
          {
            quote: "The plumber arrived in 9 minutes. I couldn't believe it.",
            name: "Arjun K., Mumbai",
            stars: "⭐⭐⭐⭐⭐",
          },
          {
            quote: "Finally, a service that respects my time. Game changer!",
            name: "Neha R., Delhi",
            stars: "⭐⭐⭐⭐⭐",
          },
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "20px 22px",
              maxWidth: "260px",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: "14px", marginBottom: "8px" }}>{t.stars}</div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.6,
                margin: 0,
                marginBottom: "10px",
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </p>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#FF1F8E",
              }}
            >
              — {t.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
