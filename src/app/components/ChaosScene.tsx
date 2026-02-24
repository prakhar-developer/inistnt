import { motion, useInView } from "motion/react";
import { useRef } from "react";

function WaterSplash() {
  return (
    <div style={{ position: "relative", width: "200px", height: "120px" }}>
      {/* Pipe */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40px",
          height: "50px",
          background: "linear-gradient(135deg, #888, #ccc)",
          borderRadius: "6px",
          border: "2px solid #666",
        }}
      />
      {/* Crack */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "calc(50% - 8px)",
          width: "16px",
          height: "3px",
          background: "#333",
          transform: "rotate(-15deg)",
        }}
      />
      {/* Water gush */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "45px",
            left: `calc(50% + ${(i - 2.5) * 14}px)`,
            width: "8px",
            height: `${30 + Math.random() * 30}px`,
            background: `rgba(100, 180, 255, ${0.6 + i * 0.05})`,
            borderRadius: "4px",
            animation: `water-gush ${0.4 + i * 0.1}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.08}s`,
            transform: `rotate(${(i - 2.5) * 20}deg)`,
            transformOrigin: "top",
          }}
        />
      ))}
      {/* Water pool */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "160px",
          height: "18px",
          background: "rgba(100, 180, 255, 0.35)",
          borderRadius: "50%",
          animation: "water-gush 1s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
}

function SpinningClock() {
  return (
    <div
      style={{
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1a1240, #2d1f6e)",
        border: "3px solid #FF1F8E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0 0 20px rgba(255, 31, 142, 0.5)",
      }}
    >
      <div
        style={{
          fontSize: "36px",
          animation: "spin-fast 1.5s linear infinite",
        }}
      >
        🕐
      </div>
    </div>
  );
}

export function ChaosScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0a0a 0%, #2d0a0a 40%, #3d1010 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px",
      }}
    >
      {/* Warning flash overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,50,50,0.05)",
          animation: "pulse-ring 2s ease-out infinite",
        }}
      />

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: "rgba(255, 80, 80, 0.15)",
          border: "1px solid rgba(255, 80, 80, 0.4)",
          borderRadius: "50px",
          padding: "6px 18px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "13px",
          color: "#FF6B6B",
          marginBottom: "24px",
          letterSpacing: "1px",
        }}
      >
        SCENE 2 • PROBLEM ESCALATES
      </motion.div>

      {/* Big headline */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(36px, 7vw, 68px)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: "20px",
        }}
      >
        The drip became a{" "}
        <span
          style={{
            color: "#FF4444",
            textShadow: "0 0 20px rgba(255,68,68,0.8)",
            animation: isInView ? "shake 0.4s ease-in-out infinite" : "none",
            display: "inline-block",
          }}
        >
          FLOOD.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "rgba(255,255,255,0.65)",
          textAlign: "center",
          maxWidth: "500px",
          marginBottom: "60px",
          lineHeight: 1.7,
        }}
      >
        Water everywhere. Ceiling dripping. And your clock?{" "}
        <span style={{ color: "#FF6B6B" }}>Spinning like crazy.</span>
      </motion.p>

      {/* Visual chaos */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(20px, 8vw, 80px)",
          flexWrap: "wrap",
        }}
      >
        {/* Water pipe burst */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <WaterSplash />
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              color: "#88ccff",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            PIPE BURST 💧
          </div>
        </motion.div>

        {/* VS separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "rgba(255,68,68,0.2)",
            border: "2px solid #FF4444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF4444",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "18px",
            fontWeight: 900,
          }}
        >
          🚨
        </motion.div>

        {/* Spinning clock */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <SpinningClock />
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              color: "#FF8C8C",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            EVERY MINUTE COSTS 💸
          </div>
        </motion.div>
      </div>

      {/* Damage counter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{
          marginTop: "60px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { emoji: "💧", stat: "50L+", label: "water wasted/hour" },
          { emoji: "💰", stat: "₹5,000+", label: "property damage" },
          { emoji: "😤", stat: "3hrs", label: "avg wait time (old way)" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
            style={{
              background: "rgba(255, 68, 68, 0.1)",
              border: "1px solid rgba(255, 68, 68, 0.3)",
              borderRadius: "16px",
              padding: "20px 28px",
              textAlign: "center",
              minWidth: "140px",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "6px" }}>{item.emoji}</div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "24px",
                fontWeight: 800,
                color: "#FF6B6B",
              }}
            >
              {item.stat}
            </div>
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                marginTop: "4px",
              }}
            >
              {item.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
