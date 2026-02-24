import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PhoneOff, PhoneCall, X, Clock } from "lucide-react";

function FailedCall({ name, delay, isInView }: { name: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.5, delay }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "14px",
        padding: "14px 20px",
        border: "1px solid rgba(255,255,255,0.08)",
        width: "100%",
        maxWidth: "380px",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          flexShrink: 0,
        }}
      >
        🔧
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            color: "#fff",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginTop: "2px",
          }}
        >
          <PhoneCall size={11} />
          Calling...
        </div>
      </div>
      {/* Status */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.6, type: "spring" }}
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          background: "rgba(255,68,68,0.2)",
          border: "2px solid #FF4444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <X size={16} color="#FF4444" />
      </motion.div>
    </motion.div>
  );
}

export function OldWayScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const plumbers = [
    { name: "Rajesh Plumbers (Local)", delay: 0.3 },
    { name: "City Plumbing Services", delay: 0.55 },
    { name: "Suresh & Sons", delay: 0.8 },
    { name: "Just Dials 'Best Match'", delay: 1.05 },
    { name: "WhatsApp Group Contact", delay: 1.3 },
  ];

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0f0f1a 0%, #141428 60%, #1a1240 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faded background text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(60px, 12vw, 140px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.02)",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        NO ANSWER
      </div>

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: "rgba(150, 150, 255, 0.1)",
          border: "1px solid rgba(150, 150, 255, 0.3)",
          borderRadius: "50px",
          padding: "6px 18px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "13px",
          color: "#aaaaff",
          marginBottom: "24px",
          letterSpacing: "1px",
        }}
      >
        SCENE 3 • THE OLD WAY FAILS
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          maxWidth: "600px",
          lineHeight: 1.2,
          marginBottom: "12px",
        }}
      >
        You called{" "}
        <span style={{ color: "#FF6B6B" }}>5 plumbers.</span>
        <br />
        Not one picked up.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        The old way of finding help is broken. Completely.
      </motion.p>

      {/* Failed calls list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "420px",
          marginBottom: "48px",
        }}
      >
        {plumbers.map((p, i) => (
          <FailedCall key={i} name={p.name} delay={p.delay} isInView={isInView} />
        ))}
      </div>

      {/* Time wasted indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        style={{
          background: "linear-gradient(135deg, rgba(255,68,68,0.15), rgba(255,68,68,0.05))",
          border: "1px solid rgba(255,68,68,0.3)",
          borderRadius: "20px",
          padding: "24px 36px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(255,68,68,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Clock size={28} color="#FF6B6B" />
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "32px",
              fontWeight: 900,
              color: "#FF6B6B",
              lineHeight: 1,
            }}
          >
            2+ hours wasted
          </div>
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              marginTop: "4px",
            }}
          >
            just trying to reach someone
          </div>
        </div>
      </motion.div>

      {/* Phone icon with red X */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "15px",
        }}
      >
        <PhoneOff size={20} color="rgba(255,68,68,0.7)" />
        <span>There has to be a better way...</span>
        <PhoneOff size={20} color="rgba(255,68,68,0.7)" />
      </motion.div>
    </section>
  );
}
