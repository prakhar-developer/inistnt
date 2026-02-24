import { motion } from "motion/react";

// Star component
function Star({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#fff",
        animation: `star-twinkle ${1.5 + delay}s ease-in-out infinite ${delay}s`,
      }}
    />
  );
}

// 2D House SVG
function AnimatedHouse() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg width="320" height="280" viewBox="0 0 320 280" fill="none">
        {/* House body */}
        <rect x="60" y="140" width="200" height="130" rx="4" fill="#1a1240" stroke="#2d1f6e" strokeWidth="2" />
        {/* Roof */}
        <polygon points="40,145 160,50 280,145" fill="#FF1F8E" />
        <polygon points="40,145 160,50 280,145" fill="none" stroke="#FF6B8E" strokeWidth="2" />
        {/* Chimney */}
        <rect x="200" y="70" width="28" height="50" rx="2" fill="#1a1240" stroke="#2d1f6e" strokeWidth="2" />
        {/* Door */}
        <rect x="135" y="200" width="50" height="70" rx="4" fill="#FF1F8E" opacity="0.7" />
        <circle cx="178" cy="237" r="4" fill="#FFD700" />
        {/* Windows glow */}
        <rect x="80" y="160" width="55" height="45" rx="4" fill="#FFD700" opacity="0.8" />
        <rect x="185" y="160" width="55" height="45" rx="4" fill="#FFD700" opacity="0.8" />
        {/* Window frames */}
        <line x1="107" y1="160" x2="107" y2="205" stroke="#FF8C00" strokeWidth="2" />
        <line x1="80" y1="182" x2="135" y2="182" stroke="#FF8C00" strokeWidth="2" />
        <line x1="212" y1="160" x2="212" y2="205" stroke="#FF8C00" strokeWidth="2" />
        <line x1="185" y1="182" x2="240" y2="182" stroke="#FF8C00" strokeWidth="2" />
        {/* Smoke from chimney */}
        <circle cx="214" cy="58" r="6" fill="rgba(200,200,255,0.3)" />
        <circle cx="220" cy="44" r="8" fill="rgba(200,200,255,0.2)" />
        <circle cx="212" cy="30" r="10" fill="rgba(200,200,255,0.15)" />
        {/* Ground */}
        <rect x="0" y="268" width="320" height="12" rx="6" fill="#1a1240" opacity="0.5" />
      </svg>

      {/* Water drip from pipe */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "78px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Pipe */}
        <div
          style={{
            width: "16px",
            height: "20px",
            background: "linear-gradient(135deg, #888, #aaa)",
            borderRadius: "3px 3px 0 0",
            border: "1px solid #666",
          }}
        />
        {/* Drip */}
        <div
          style={{
            width: "5px",
            background: "linear-gradient(to bottom, rgba(100,180,255,0.9), rgba(100,180,255,0.4))",
            borderRadius: "0 0 3px 3px",
            animation: "drip 1.8s ease-in-out infinite",
            transformOrigin: "top",
          }}
        />
        {/* Drop */}
        <div
          style={{
            width: "6px",
            height: "8px",
            background: "rgba(100,180,255,0.8)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            marginTop: "2px",
            animation: "drip-drop 1.8s ease-in infinite",
          }}
        />
      </div>
    </div>
  );
}

export function HeroScene() {
  const stars = [
    { x: "8%", y: "12%", size: 2, delay: 0 },
    { x: "15%", y: "5%", size: 3, delay: 0.5 },
    { x: "25%", y: "18%", size: 2, delay: 1 },
    { x: "72%", y: "8%", size: 2, delay: 0.3 },
    { x: "85%", y: "15%", size: 3, delay: 0.8 },
    { x: "90%", y: "30%", size: 2, delay: 1.2 },
    { x: "5%", y: "40%", size: 2, delay: 0.6 },
    { x: "92%", y: "6%", size: 2, delay: 0.2 },
    { x: "50%", y: "10%", size: 2, delay: 1.5 },
    { x: "35%", y: "6%", size: 2, delay: 0.9 },
    { x: "62%", y: "20%", size: 2, delay: 0.4 },
    { x: "78%", y: "35%", size: 2, delay: 1.1 },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #080614 0%, #0D0B1E 40%, #1a1240 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <Star key={i} {...s} />
      ))}

      {/* Moon */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "10%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFD700, #FFA500)",
          boxShadow: "0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.15)",
        }}
      />

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: "rgba(255, 31, 142, 0.15)",
          border: "1px solid rgba(255, 31, 142, 0.4)",
          borderRadius: "50px",
          padding: "6px 18px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "13px",
          color: "#FF1F8E",
          marginBottom: "24px",
          letterSpacing: "1px",
        }}
      >
        SCENE 1 • CALM BEFORE CHAOS
      </motion.div>

      {/* House animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          scale: { duration: 0.8, delay: 0.4 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        style={{ marginBottom: "40px" }}
      >
        <AnimatedHouse />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ textAlign: "center", maxWidth: "600px" }}
      >
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(32px, 6vw, 58px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          It was a calm{" "}
          <span style={{ color: "#FFD700" }}>Tuesday night.</span>
        </h1>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "rgba(255,255,255,0.65)",
            marginTop: "16px",
            lineHeight: 1.7,
          }}
        >
          You'd just settled in after a long day at work.
          <br />
          Then you heard it — a <span style={{ color: "#88ccff" }}>drip.</span>
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "12px",
          letterSpacing: "2px",
        }}
      >
        <span>SCROLL TO CONTINUE</span>
        <div style={{ fontSize: "20px" }}>↓</div>
      </motion.div>
    </section>
  );
}
